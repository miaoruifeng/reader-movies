// pages/welcome/welcome.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    onTap: function(event) {
        /*
            wx.navigateTo: 有返回箭头 跳转之前页面onHide
            wx.redirectTo: 没有返回箭头  跳转之前页面onUnload
            wx.switchTab: 有tab时必须要用wx.switchTab
        */

        // wx.navigateTo({
        //     url: '../posts/post',
        // });

        // wx.redirectTo({
        //     url: '../posts/post',
        // });

        wx.switchTab({
            url: '../posts/post',
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        // console.log('onhide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        // console.log('onupload');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})