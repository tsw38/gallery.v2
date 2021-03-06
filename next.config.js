const path = require('path')

module.exports = {
    webpack (config, options) {
        config.resolve.alias['pages'] = path.join(__dirname, 'pages')
        config.resolve.alias['common'] = path.join(__dirname, 'common')
        config.resolve.alias['styles'] = path.join(__dirname, 'styles')
        config.resolve.alias['reducers'] = path.join(__dirname, 'redux/reducers')
        config.resolve.alias['actions'] = path.join(__dirname, 'redux/actions')
        config.resolve.alias['constants'] = path.join(__dirname, 'redux/constants')
        config.resolve.alias['utilities'] = path.join(__dirname, 'utilities')
        config.resolve.alias['libraries'] = path.join(__dirname, 'libraries')
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        return config
    }
}