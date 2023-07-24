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
    let that = this;
    wx.showLoading({
      title: '加载中...',
    });
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
        // 当请求成功时，关闭上拉刷新页面的loading动画，停止刷新，还有关闭这个loading动画
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
        wx.hideLoading();
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
    wx.showNavigationBarLoading();
    // 重置页数为1
    this.data.pageNo = 1;
    // 清除原来的商品数据
    this.data.goodsData = [];
    // 再get一次商品列表咯
    this.getGoodsData();
  },

  // 上拉触底
  onReachBottom() {
    this.data.pageNo++;
    this.getGoodsData();
  },

  // 点击跳转到商品详情页
  jumpToDetail(e) {
    // 获取当前商品的数据(id)
    // 跳转到商品详情页
    // 将商品的id传给商品详情页
    console.log(e);

    let goodsNo = e.currentTarget.dataset.goodsid;
    console.log(goodsNo);

    wx.navigateTo({
      url: '/pages/detail/detail?goodsNo=' + goodsNo,
    });
  },
});
