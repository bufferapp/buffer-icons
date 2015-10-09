module.exports = function(grunt){
  grunt.initConfig({
    webfont: {
      icons: {
        src: 'src/icons/*.svg',
        dest: 'dist/fonts',
        destCss: 'dist/less',
        options: {
          stylesheet: 'less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('build', ['webfont']);
  grunt.registerTask('default', ['build']);
};
