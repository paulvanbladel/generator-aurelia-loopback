'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.option('skip-install');
  },

  init: function(){
    var done = this.async();
    var self = this;

    this.env.register('generator-loopback','lb');
    this.env.register('generator-aurelia/app/index.js','au');
    this.aureliaGenerator = self.env.create('au',{ options: { 'skip-install':this.options['skip-install'] } });
    this.loopbackGenerator = this.env.create('lb',{ options: { 'skip-install':this.options['skip-install'] } });

    this.aureliaGenerator.on('end', function(){
        self.log('aurelia generator finished');
    });


    this.loopbackGenerator.on('end',function() {
      self.destinationRoot(self.destinationRoot() + "/client");
      self.aureliaGenerator.run();

  });

  this.loopbackGenerator.run();
  done();
  },

  prompting: function () {
    //var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('AureliaLoopback') + ' generator!'
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
