// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    background: [
      '../../static/images/plants-with-wall.jpeg',
      '../../static/images/jellyfish.jpeg',
      '../../static/images/wine.jpeg',
    ],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    background_bottom: [
      '../../static/images/tulip-medium.jpeg',
      '../../static/images/brand-new-tulip.jpeg',
      '../../static/images/wall.jpeg',
    ],
    interval_bottom: 4000,
    indicatorDots_bottom: true,
  },

  gotoCategory() {
    // wx.navigateTo({
    //   url: '/pages/index/index?name=logic&ps=123',
    // });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
