const app = getApp();
Page({
  data: {
    commodities: [
      {
        name: '埃塞尔比亚 挂耳咖啡',
        price: 188,
        image: '/static/images/orange-medium.jpeg',
      },
      {
        name: '日晒瑰夏',
        price: 288,
        image: '/static/images/red-orange-medium.jpeg',
      },
      {
        name: '日晒瑰夏',
        price: 288,
        image: '/static/images/red-orange-medium.jpeg',
      },
      {
        name: '埃塞尔比亚 挂耳咖啡',
        price: 188,
        image: '/static/images/orange-medium.jpeg',
      },
      {
        name: '埃塞尔比亚 挂耳咖啡',
        price: 188,
        image: '/static/images/orange-medium.jpeg',
      },
      {
        name: '埃塞尔比亚 挂耳咖啡',
        price: 188,
        image: '/static/images/orange-medium.jpeg',
      },
    ],
    pageNo: 1,
    pageSize: 10,
  },
  onReachBottom() {
    this.data.pageNo + 1;
    this.getGoodsData();
  },
  onLoad() {
    this.getGoodsData();
  },
  // TODO: 接口谁来写啊靠
  getGoodsData() {
    wx.request({
      url: 'https://ys.lumingx.com/api/manage/GoodsList',
      data: {
        pageNo: this.data.pageNo,
        pageSize: this.data.pageSize,
      },
      header: {
        'content-type': 'application/json',
      },
      success(res) {
        console.log(res.data.data);
      },
    });
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh();
  },
});
