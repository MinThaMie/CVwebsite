module.exports = {
    paths: {
        watched: ['app', 'vendor']
    },

    files: {
        javascripts: {
            joinTo: {
                'vendor.js': /^(?!app)/,
                'app.js': /^app/
            }
        },
        stylesheets: {
            joinTo: 'app.css'
        }
    },

    plugins: {
        babel: {
            presets: ['es2015']
        },
        sass: {
            precision: 8,
            options: {
                includePaths: [
                    'bower_components/bootstrap-sass/assets/stylesheets'
                ]
            }
        },
        copycat: {
            "fonts": [],
            "images": ["app/images"],
            verbose: true,
            onlyChanged: true
        }
    }
};