var grunt = require('grunt');

module.exports = {
  requirejs: {
    files: [
      {
        src: 'bower_components/requirejs/require.js',
        dest: grunt.config('paths.output.js') + '/require.js'
      }
    ]
  },
  // copy baseUrl(js/) to tmp before building with r.js optimzer
  // templates are not raw copied, they are pre-processed to tmp/templates
  prepareBuild: {
    files: [
      { // copy js to tmp/ before compiling
        expand: true,
        cwd: grunt.config('paths.js'),
        src: ['**'],
        dest: grunt.config('paths.tmp')
      }
    ]
  },
  images: {
    files: [
      { // copy js to tmp/ before compiling
        expand: true,
        cwd: grunt.config('paths.public'),
        src: [ grunt.config('paths.images') + '/*' ],
        dest: grunt.config('paths.dist')
      }
    ]
  },
  styles: {
    files: [
      {
        expand: true,
        cwd: grunt.config('paths.css'),
        src: '*.css',
        dest: grunt.config('paths.output.css')
      }
    ]
  }
};
