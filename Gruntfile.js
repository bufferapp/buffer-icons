module.exports = function(grunt){
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'src/icons/*.svg',
        dest: 'dist/webfonts',
        destCss: 'dist/less',
        options: {
          fontFilename: 'buffer-icons',
          syntax: 'bootstrap',
          templateOptions: {
            baseClass: 'bi', // "buffer-icons"
            classPrefix: 'bi-',
            mixinPrefix: 'bi_',
          }, 
          stylesheet: 'less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont']);
};
