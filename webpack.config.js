/*
 * @Author: WangQiBiao
 * @Date: 2019-11-05 14:20:49
 * @LastEditors: WangQiBiao
 * @LastEditTime: 2019-11-05 18:04:58
 * @Description:
 */
module.exports ={
  entry: './src/index.js',
  output: {
    filename: 'main.js'
  },
  mode: 'development',
  devServer: {
    open: true,
    publicPath: '/dist'
  }
}
