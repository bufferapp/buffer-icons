module.exports = function(grunt){
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'src/icons/*.svg',
        dest: 'dist/webfonts',
        destCss: 'dist/less',
        options: {
          font: 'buffer-icons',
          fontFilename: 'buffer-icons',
          syntax: 'bootstrap',
          templateOptions: {
            baseClass: 'bi',
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
