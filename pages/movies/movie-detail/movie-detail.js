// var util = require("../../../utils/utils.js");
import {
    Movie
} from 'class/Movie.js'
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        movie: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var movieId = options.id;
        var detailUrl = app.globalData.doubanBase + '/v2/movie/subject/' + movieId + app.globalData.apikey;
        // util.http(detailUrl, this.processDoubanData);

        // ES6 Class改写movie-detail.js -- Movie
        var movie = new Movie(detailUrl);
        // 理解同步、异步 var movieData = getMovieData
        // es6箭头函数
        // var that = this;
        // movie.getMovieData(function(movie) {
        //     that.setData({
        //         movie
        //     });
        // });
        movie.getMovieData((movie) => {
            this.setData({
                movie
            });
        });
    },

    processDoubanData: function(data) {
        // console.log(data);
        if (!data) {
            return;
        }
        var director = {
            avatar: '',
            name: '',
            id: ''
        }
        if (data.directors[0] != null) {
            if (data.directors[0].avatars != null) {
                director.avatar = data.directors[0].avatars.large
            }
            director.name = data.directors[0].name;
            director.id = data.directors[0].id;
        }
        var movie = {
            movieImg: data.images ? data.images.large : '',
            country: data.countries[0],
            title: data.title,
            originalTitle: data.original_title,
            wishCount: data.wish_count,
            commentCount: data.comments_count,
            year: data.year,
            generes: data.genres.join('、'),
            stars: util.convertToStarsArray(data.rating.stars),
            score: data.rating.average,
            director: director,
            casts: util.convertToCastString(data.casts),
            castsInfo: util.convertToCastInfos(data.casts),
            summary: data.summary
        }
        this.setData({
            movie
        });
    },

    /* 查看图片 */
    viewMoviePostImg: function(e) {
        var src = e.currentTarget.dataset.src;
        wx.previewImage({
            current: src, // 当前显示图片的http链接
            urls: [src] // 需要预览的图片http链接列表
        })
    },

    viewCarstImg: function(e) {
        var carsts = this.data.movie.castsInfo;
        var carstArray = [];
        for (var idx in carsts) {
            var carst = carsts[idx].img;
            carstArray.push(carst);
        }
        var src = e.currentTarget.dataset.src;
        wx.previewImage({
            current: src, // 当前显示图片的http链接
            urls: carstArray // 需要预览的图片http链接列表
        })
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

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

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