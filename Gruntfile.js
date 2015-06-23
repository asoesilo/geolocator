module.exports = function(grunt) {
	grunt.initConfig({
		bowerPkg: grunt.file.readJSON('bower.json'),
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true,
				browsers: ['PhantomJS']
			}
		},
		ngAnnotate: {
			build: {
				src: 'src/geolocator.js',
				dest: 'dist/geolocator.min.js'
			}
		},
		uglify: {
			options: {
				banner: '/* <%= bowerPkg.name %> v<%= bowerPkg.version %> (<%= bowerPkg.homepage %>) */\n'
			},
			build: {
				src: 'dist/geolocator.min.js',
				dest: 'dist/geolocator.min.js'
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-karma')
	grunt.loadNpmTasks('grunt-ng-annotate')

	grunt.registerTask('build', ['ngAnnotate', 'uglify'])
	grunt.registerTask('test', ['karma'])
	grunt.registerTask('default', ['build'])
}
