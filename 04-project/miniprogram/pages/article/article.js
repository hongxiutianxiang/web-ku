
var { articles } = require('../../data/db.js')

Page({
  /*
    页面的初始数据
   */
  data:{
    /*
    articles:[
      {
        avatar: '../../images/avatar/a1.jpg',
        date:'2019-06-07',
        title:'标题',
        img:'../../images/article/qin1.jpg',
        desc:'描述',
        start:30,
        view:50,
      },
      {
        avatar: '../../images/avatar/a2.jpg',
        date: '2019-06-07',
        title: '标题',
        img: '../../images/article/qin2.jpg',
        desc: '描述',
        start: 30,
        view: 50,
      },
      {
        avatar: '../../images/avatar/a3.jpg',
        date: '2019-06-07',
        title: '标题',
        img: '../../images/article/qin3.jpg',
        desc: '描述',
        start: 30,
        view: 50,
      }
    ]
    */
  },

  /*
    生命周期函数--监听页面加载
   */
  onLoad:function(options){
    // console.log('加载','article')
   /* 
    var articles = [
      {
        avatar: '../../images/avatar/a1.jpg',
        date: '2019-06-07',
        title: '标题',
        img: '../../images/article/qin1.jpg',
        desc: '描述',
        start: 30,
        view: 50,
      },
      {
        avatar: '../../images/avatar/a2.jpg',
        date: '2019-06-07',
        title: '标题',
        img: '../../images/article/qin2.jpg',
        desc: '描述',
        start: 30,
        view: 50,
      },
      {
        avatar: '../../images/avatar/a3.jpg',
        date: '2019-06-07',
        title: '标题',
        img: '../../images/article/qin3.jpg',
        desc: '描述',
        start: 30,
        view: 50,
      }
    ]
    */
    /* 
    console.log(articles)
    this.setData({
      articles:articles
    },function(){
      console.log('in cb',this.data.articles)
    }.bind(this))
    console.log('out cb',this.data.articles)
  },
  */
    // console.log(articles)
    this.setData({
      articles: articles
    })
  },

  /*
   生命周期函数--监听页面初次渲染完成
  */
  onReady: function (options) {
    // console.log('初次渲染完成','article')
  },

  /*
   生命周期函数--监听页面显示
  */
  onShow: function () {
    // console.log('显示','article-onShow')
  },

  /*
   生命周期函数--监听页面隐藏
  */
  onHide: function () {
    // console.log('隐藏','article-onHide')
  },

  /*
   生命周期函数--监听页面卸载
  */
  onUnload: function () {
    // console.log('卸载', 'article-onUnload')
  },

  /*
  页面相关事件处理--监听用户下拉动作
 */
  onPullDownRefresh: function () {
    // console.log('下拉', 'article-onPullDownRefresh')
  },

  /*
  页面上拉触底事件的处理函数
 */
  onReachBottom: function () {
    // console.log('触底', 'article-onReachBottom')
  },

  /*
  用户点击右上角分享
*/
  onShareAppMessage: function () {
    // console.log('分享', 'article-onShareAppMessage')
  },

  tapArticleItem:function(ev){
    var articleId = ev.currentTarget.dataset.articleId;
    // console.log('article-145',articleId)
    wx.navigateTo({
      url:'./article-detail/article-detail?articleId='+articleId,
    })
  }



})
