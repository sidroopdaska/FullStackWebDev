'use strict';

module.exports = function(grunt){
    
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    
    // Automatically load required Grunt tasks. Looks inside node_modules folder and automatically loads grunt modules when required in the Gruntfile.js. Other alternative, explicitly include all the grunt modules.
    require('jit-grunt')(grunt); 
    
    // Define configuation for all the Grunt modules
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
          options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
          },
          all: {
            src: [
              'Gruntfile.js',
              'app/scripts/{,*/}*.js'
            ]
          }
        }
    });

    grunt.registerTask('build', ['jshint']);
    grunt.registerTask('default',['build']);
    
    
};