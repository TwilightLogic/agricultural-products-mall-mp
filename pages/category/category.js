const app = getApp();
Page({
  data: {
    goodsData: [],
    pageNo: 1,
    pageSize: 10,
    isComplete: false,
  },
  // 页面加载时就调用
  onLoad() {
    this.getGoodsData();
  },

  // 这里后面再用我们自己的API ⬇️
  // Tips: 现在暂时用的是别人的API
  getGoodsData() {
    var that = this;
    wx.request({
      url: 'https://ys.lumingx.com/api/manage/GoodsList',
      data: {
        pageNo: that.data.pageNo,
        pageSize: that.data.pageSize,
      },
      header: {
        'content-type': 'application/json',
      },
      success(res) {
        // 当API的pageNo还有值的时候（因为pageNo会自增完）：
        if (res.data.success && res.data.data.length > 0) {
          // 这里做了个页面的拼接
          let newData = that.data.goodsData.concat(res.data.data);
          that.setData({
            goodsData: newData,
          });
        } else {
          that.setData({ isComplete: true });
        }
      },
    });
  },

  // 下拉刷新
  onPullDownRefresh() {
    wx.stopPullDownRefresh();
  },

  // 上拉触底
  onReachBottom() {
    this.data.pageNo++;
    this.getGoodsData();
  },
});
