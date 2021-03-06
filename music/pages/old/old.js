// pages/hots/hots.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:[],
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */play:function(e){
  wx.navigateTo({
    url: '../display/display?id=' + e.currentTarget.dataset.id,
  })
},
  onLoad: function (options) {
    wx.request({
      url: 'http://iwenwiki.com/api/music/list.php?type=22&count=15&offset=0',
      success:res=>{
        console.log(res.data.song_list);
        this.setData({
          img:res.data.billboard,
          list:res.data.song_list
        })
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