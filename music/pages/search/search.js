// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    his:''
  },
  //历史
  his:function(e){
    var inputVal = e.detail.value;
    his+=inputVal;
  },
//搜索事件
search:function(e){
  var inputVal = e.detail.value;
  
  if(inputVal){
    wx.request({
      url: 'http://iwenwiki.com/api/music/search.php',
      data:{
        content:inputVal
      },
      success:res=>{
        // console.log(res.data.album);
        this.setData({
          list:res.data.album,
          his:inputVal
        })
      }
    })
  }else{
    this.setData({
      list:[]
    })
  }
  
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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