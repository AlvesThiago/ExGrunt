module.exports = function (grunt) {

  grunt.initConfig({

    less: {
      development: {
        options: {
          paths: ["src/less"],
        },
        files: {
          "dist/css/main.css": "src/less/main.less",
        },
      },
      production: {
        options: {
          paths: ["src/less"],
          compress: true,
        },
        files: {
          "dist/css/main.min.css": "src/less/main.less",
        },
      },
    },

    uglify: {
      options: {
        mangle: false,
      },
      my_target: {
        files: {
          "dist/js/main.min.js": ["src/js/main.js"],
        },
      },
    },
  });


  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");


  grunt.registerTask("default", ["less:development", "uglify"]);
  grunt.registerTask("build", ["less:production", "uglify"]);
};
