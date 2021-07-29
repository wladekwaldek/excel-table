const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry,
    output: {
        filename,
        path
    },
    plugins: []
}
