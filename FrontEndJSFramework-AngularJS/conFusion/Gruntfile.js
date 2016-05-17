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
        },
        copy: {
          dist: {
            cwd: 'app',
            src: [ '**','!styles/**/*.css','!scripts/**/*.js' ],
            dest: 'dist',
            expand: true
          },
          fonts: {
              files:[
                  {
                      //for bootstrap fonts
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/bootstrap/dist',
                        src: ['fonts/*.*'],
                        dest: 'dist'
                    }, {
                        //for font-awesome
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/font-awesome',
                        src: ['fonts/*.*'],
                        dest: 'dist'
                    }
              ]
            }
        },
        clean: {
            folderOne: 'dist/'
        }
    });

  grunt.registerTask('build', ['clean','jshint','copy']);   
    grunt.registerTask('default',['build']);
    
    
};