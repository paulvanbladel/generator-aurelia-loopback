'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.option('skip-install');
  },

  initializing : function(){
    var done = this.async();

    this.env.register('generator-loopback','lb');
    this.env.register('generator-aurelia/app/index.js','au');

    this.loopbackGenerator = this.env.create('lb',{ options: { 'skip-install':this.options['skip-install'] } });
    this.aureliaGenerator = this.env.create('au',{ options: { 'skip-install':this.options['skip-install'] } });
    this.loopbackGenerator.run(function(){
      this.log("run callback");
      this.destinationRoot(this.destinationRoot() + "/client"); //should be avoided I guess
      this.aureliaGenerator.run();
    }.bind(this));
    done();
  },




  prompting: function () {
    //var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'zzzzzzzzzzzzzzWelcome to the ' + chalk.red('AureliaLoopback') + ' generator!'
    ));

    /*var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));*/
  },

  writing: {
    app: function () {
      this.log("qqqqqqqqqqqqqqqqqqqqqq in writing ");
      /*this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );*/
    },

    projectfiles: function () {
      /*this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );*/
    }
  },

  install: function () {
    //this.installDependencies();
  }
});
