var con = require('../../utils/data.js');
var WxParse = require("../../wxParse/wxParse.js");
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
var app = getApp();
//var lng, lat, name, address;

Page({
  data: {
    longitude: 114.4204800000,
    latitude: 30.4637200000,   
    name:"武汉元新科技有限公司",
    address:"武汉光谷大道",
    tel:"13545212560",
    markers: [{
      longitude: 114.4204800000,
      latitude: 30.4637200000,
      iconPath: '../../../images/map/map.png',
      title: "武汉元新科技有限公司",
      address: "武汉光谷大道",
      alpha: 1,
      width: 40,
      height: 40
    }],

  },
  onLoad: function () {
    var that = this;
    // wx.request({
    //   url: con.hospital_getinfo,
    //   method: 'GET',
    //   data: { wxappid: con.wyy_user_wxappid },
    //   header: {
    //     "Content-Type": "application/json"
    //   },
    //   success: function (res) {
    //     console.log(res.data.info);       
    //     WxParse.wxParse('shoperIn', 'html', res.data.info.intro, that, 0)
    //     that.setData({
    //       address: res.data.info.address,
    //       name: res.data.info.name,
    //       tel: res.data.info.tel
    //     })
    //   }

    // });   
    /*
    wx.request({
      url: con.getmap,
      method: 'GET',
      data: { wxappid: con.wyy_user_wxappid },
      header: {
        "Content-Type": "application/json",
      },
      success: function (res) {
        console.log("getmap:"+JSON.stringify(res));      
        that.setData({
          longitude: res.data.lng,
          latitude: res.data.lat,
          markers: [{
            longitude: res.data.lng,
            latitude: res.data.lat,
            iconPath: '../../../images/map/map.png',
            title: that.data.name,
            address: that.data.address,
            alpha: 1,
            width: 40,
            height: 40
          }],
        });
      }
    });
    */

  },
  bindgothere: function (e) {
    var that = this;
    wx.openLocation({
      latitude: that.data.latitude,
      longitude: that.data.longitude,
      name: that.data.name,
      address: that.data.address
    })
  }
});




