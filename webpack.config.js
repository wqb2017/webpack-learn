/*
 * @Author: WangQiBiao
 * @Date: 2019-11-05 14:20:49
 * @LastEditors: WangQiBiao
 * @LastEditTime: 2019-11-06 09:53:36
 * @Description:
 */
const path = require('path')
module.exports ={
  entry: {
    index: './src/index.js',
    base: './src/base.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist'
  },
  mode: 'development',
  devServer: {
    publicPath: '/dist'
  }
}
