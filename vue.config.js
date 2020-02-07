module.exports = {
    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        './' : '/'
}