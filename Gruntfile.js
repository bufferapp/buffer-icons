var pkg = require('./package.json');

var version = pkg.version;

module.exports = function(grunt){
  grunt.initConfig({

    clean: {
      options: {
        force: true // Is made necessary by a bug in some versions of Node when comparing paths
      },
      dist: ['dist/*']
    },

    webfont: {
      icons: {
        src: 'src/icons/*.svg',
        dest: 'dist/webfonts',
        destCss: 'dist',
        options: {
          font: 'buffer-icons',
          fontFilename: 'buffer-icons',
          syntax: 'bootstrap',
          templateOptions: {
            baseClass: 'bi',
            classPrefix: 'bi-',
            mixinPrefix: 'bi_',
          },
          htmlDemoTemplate: 'templates/demo.html'
        }
      }
    },

    cssmin: {
      options: {
        // shorthandCompacting: false,
        // roundingPrecision: -1
      },
      target: {
        files: {
          'dist/buffer-icons.css': ['dist/buffer-icons.css', 'src/extras.css']
        }
      }
    },

    aws_s3: {
      options: {
        // Must include AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY env variables
        region: 'us-east-1',
        bucket: 'buffer-icons',
        params: {
          CacheControl: 'public, max-age=31520626'
        },
        overwrite: false
      },
      production: {
        files: [
          {
            expand: true,
            cwd: 'dist',
            src: ['**'],
            dest: version + '/'
          }
        ]
      }
      // IDEA: Add future 'staging' for branch builds during dev
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask('upload', ['aws_s3']);

  grunt.registerTask('default', ['clean', 'webfont', 'cssmin']);
};
