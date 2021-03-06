var grunt = require('grunt');

module.exports = {
  options: { // livereload will run after all watch tasks finish
    livereload: grunt.config('settings.liveReloadPort'),
    debounceDelay: 0,
    interval: 20
  },
  styles: { // watch all styles and rebuild when change
    files: [grunt.config('paths.css') + '/**/*.{css,sass,scss,less,styl}'],
    tasks: ['styles:development', 'copy:styles']
  },
  scripts: { // any js/cs files change? lint + run karma
    files: [
      grunt.config('paths.js') + '/**/*.{js,coffee}',
      grunt.config('paths.templates') + '/**/*.{hbs,handlebars}',
      'test/**/*',
      'require-config.js'
    ],
    tasks: ['jshint:all', 'karma:server:run']
  },
  deploy: { // any js/cs files change? lint + run karma
    files: [
      grunt.config('paths.js') + '/**/*.{js,coffee}',
      grunt.config('paths.templates') + '/**/*.{hbs,handlebars}',
      grunt.config('paths.css') + '/**/*.{css,sass,scss,less,styl}',
      'require-config.js'
    ],
    tasks: ['sass', 'copy:prepareBuild', 'requirejs:production']
  },
  other: { // images, fonts change? livereload browser
    files: [
      'public/**/*'
    ]
  }
};
