module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      static_mappings:{
        files:[
            {
              src:'js/*.js',
              dest:'build/*.min.js'
            },
            {
              src:'js/main.js',
              dest:'build/main.min.js'
            }
        ]
      }
    },
    concat:{
      bar:{
        src:['build/*.js'],
        dest:'dest/all.min.js'
      }
    },
    watch:{
      files:['js/index.js'],
      tasks:['uglify','concat']
    }
  });

  // 加载包含 "uglify" 任务的插件,js压缩。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // 加载包含 "concat" ,合并 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-concat');
  // 加载包含 "watch"  监控 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-watch');
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','concat','watch']);

};