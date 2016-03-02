var pkg = require('./package.json');

var version = pkg.version;

module.exports = function(grunt){
  grunt.initConfig({

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

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask('upload', ['aws_s3']);

  grunt.registerTask('default', ['webfont']);
};
