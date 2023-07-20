const app = getApp();
Page({
  data: {
    goodsData: [],
  },
  // 页面加载时就调用
  onLoad() {
    this.getGoodsData();
  },

  // TODO: 接口谁来写啊靠
  getGoodsData() {
    var that = this;
    wx.request({
      url: 'https://ys.lumingx.com/api/manage/GoodsList',
      data: {
        pageNo: 5,
        pageSize: 10,
      },
      header: {
        'content-type': 'application/json',
      },
      success(res) {
        console.log(res.data);
        if (res.data.success && res.data.data.length > 0) {
          that.setData({
            goodsData: res.data.data,
          });
        }
      },
    });
  },

  onPullDownRefresh() {
    wx.stopPullDownRefresh();
  },
});
