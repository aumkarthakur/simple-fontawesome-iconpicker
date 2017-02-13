module.exports = function(grunt){

  grunt.registerTask('speak', function(){
    console.log('awesome');
  });

  // Project configuration.
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'simple-iconpicker.min.js': ['simple-iconpicker.js']
        }
      }
    },
    cssmin:{
      my_target: {
        files:[{
          expand:true,
          cwd: '',
          src: ['*.css', '!*.min.css'],
          dest: '',
          ext: '.min.css'
        }]
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};
