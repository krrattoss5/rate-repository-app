const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv){
  //ampliar configuracion por defecto de expo
  const config = await createExpoWebpackConfigAsync(env,argv)

  //crear regla que compile las dependencias de reac-router-native
  config.module.rules.push({
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
      path.join(__dirname, 'node_modules/react-router-native')
    ]
  })

  return config;
};