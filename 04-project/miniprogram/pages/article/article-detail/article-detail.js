
var { articles } = require('../../../data/db.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var articleId = options.articleId;
    var article = articles[articleId];
    //处理收藏状态
    var articles_collection = wx.getStorageSync('articles_collection');
    var isCollected = false;
    if (!articles_collection){
      /**
       * {
       * 0:false,
       * 1:true
       * }
       */
      var data = {};
      data[articleId] = false;
      wx.setStorageSync('articles_collection',data)  
    }else{
      isCollected = !!articles_collection[articleId]
    }

    this.setData({...article,isCollected:isCollected})
  },
  /*
  *处理收藏
  */
  tapCollect:function() {
    /* 
    wx.setStorageSync('key1', 123);
    wx.setStorageSync('key2', 'hello');
    wx.setStorageSync('key3', {name:'Tom'});

    wx.setStorageSync('key1', 456);

    console.log(wx.getStorageSync('key1', 456))

    wx.removeStorageSync('key1');
    wx.clearStorageSync();
    */
    var articles_collection = wx.getStorageSync('articles_collection');
    var isCollected = articles_collection[this.data.articleId];
    //改变storage的数据
    articles_collection[this.data.articleId] = !isCollected;
    wx.setStorageSync('articles_collection',articles_collection)
    //改变界面
    this.setData({
      isCollected:!isCollected
    },function(){
      wx.showToast({
        title:isCollected ? '取消收藏' : '收藏成功'
      })
    })
  },
    
  /**
   * 处理分享
   */
  tapShare:function(){
    var itemList = ['分享到朋友圈','分享到QQ','分享到微博']
    wx.showActionSheet({
      itemList: itemList,
      success:function(res){
        wx.showToast({
          title: itemList[res.tapIndex] + '成功',
        })
      }
    })
  },

  /**
   * 音乐播放
   */
  tapMusic:function(){
    var backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.src = 'https://music.163.com/?from=infinity#/song?id=1349292048';

  },
  
})