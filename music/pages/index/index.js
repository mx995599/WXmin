// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img1:[],
    img2:[],
    img3:[],
    img4:[],
    list1:[],
    list2:[],
    list3:[],
    list4:[],

  },
  // 跳转到详情
  hots:function(e){
    wx.navigateTo({
      url: '../hots/hots?itemid='+e.currentTarget.dataset.id,
    })
  },
  jin:function(e){
    wx.navigateTo({
      url: '../jin/jin?itemid='+e.currentTarget.dataset.id,
    })
  },
  old:function(e){
    wx.navigateTo({
      url: '../old/old?itemid='+e.currentTarget.dataset.id,
    })
  },
  news:function(e){
    wx.navigateTo({
      url: '../news/news?itemid='+e.currentTarget.dataset.id,
    })
  },
  //跳转到搜索
search:function(){
  wx.navigateTo({
    url: '../search/search',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://iwenwiki.com/api/music/list.php?type=1&count=4&offset=0',
      success:res=>{
          if(res.statusCode == 200){
            console.log(res.data.song_list);
            this.setData({
              img1:res.data.billboard,
              list1:res.data.song_list,
            })
          }
      }
    }),
    wx.request({
      url: 'http://iwenwiki.com/api/music/list.php?type=2&count=3&offset=2',
      success:res=>{
          if(res.statusCode == 200){
            this.setData({
              img2:res.data.billboard,
              list2:res.data.song_list
            })
          }
      }
    }),
    wx.request({
      url: 'http://iwenwiki.com/api/music/list.php?type=24&count=3&offset=0',
      success:res=>{
          if(res.statusCode == 200){
          
            this.setData({
              img3:res.data.billboard,
              list3:res.data.song_list
            })
          }
      }
    }),
    wx.request({
      url: 'http://iwenwiki.com/api/music/list.php?type=22&count=3&offset=0',
      success:res=>{
          if(res.statusCode == 200){
          
            this.setData({
              img4:res.data.billboard,
              list4:res.data.song_list
            })
          }
      }
    })
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})