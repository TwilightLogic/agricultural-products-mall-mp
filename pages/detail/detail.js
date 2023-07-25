// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailInfo: {
      Id: 1,
      goodsImage: '/static/images/biscuit-medium.jpeg',
      SaleAmount: 88.88,
      SwiperImages: [
        '/static/images/brand-new-tulip.jpeg',
        '/static/images/flower-medium.jpeg',
        '/static/images/plants-with-wall.jpeg',
      ],
    },
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    current: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
  },

  // 幻灯片切换时的事件
  swiperChange(e) {
    let curNum = e.detail.current;
    this.setData({
      current: curNum,
    });
  },

  // 回到首页
  jumpToHome() {
    wx.switchTab({
      url: '/pages/home/home',
    });
  },

  // 客服
  callService() {
    wx.makePhoneCall({
      phoneNumber: '13727779966',
    });
  },

  // 跳转到购物车
  jumpToCart() {
    wx.switchTab({
      url: '/pages/shopcart/shopcart',
    });
  },

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
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
