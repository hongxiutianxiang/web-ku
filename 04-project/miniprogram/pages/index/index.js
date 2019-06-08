//index.js
//获取应用实例
const app = getApp()

Page({
  tapMotto:function(){
    // console.log('aaa')
    /*
    wx.navigateTo({
      // url:"../article/article"
      url:"/pages/article/article"
    })
    */
    /*
    wx.redirectTo({
      url:"/pages/article/article"
    })
    */
    wx.switchTab({
      url: '/pages/article/article',
    })
  },
  /*
  tapText:function(){
    console.log("bbb")
  }*/

  /*
    生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('加载', 'index')
  },

  /*
   生命周期函数--监听页面初次渲染完成
  */
  onReady: function (options) {
    // console.log('初次渲染完成', 'index')
  },

  /*
   生命周期函数--监听页面显示
  */
  onShow: function () {
    // console.log('显示', 'index-onShow')
  },

  /*
   生命周期函数--监听页面隐藏
  */
  onHide: function () {
    // console.log('隐藏', 'index-onHide')
  },

  /*
   生命周期函数--监听页面卸载
  */
  onUnload: function () {
    // console.log('卸载', 'index-onUnload')
  },

  /*
  页面相关事件处理--监听用户下拉动作
 */
  onPullDownRefresh: function () {
    // console.log('下拉', 'index-onPullDownRefresh')
  },

  /*
  页面上拉触底事件的处理函数
 */
  onReachBottom: function () {
    // console.log('触底', 'index-onReachBottom')
  },

  /*
  用户点击右上角分享
*/
  onShareAppMessage: function () {
    // console.log('分享', 'index-onShareAppMessage')
  },
})
