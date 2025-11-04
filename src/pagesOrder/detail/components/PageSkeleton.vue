<template name="skeleton">
  <view class="sk-container">
    <view class="navbar navbar" style="padding-top: 47px">
      <view class="wrap wrap">
        <navigator
          class="back icon-left sk-pseudo sk-pseudo-circle"
          open-type="navigateBack"
        ></navigator>
        <view class="title sk-transparent sk-text-14-2857-655 sk-text">订单详情</view>
      </view>
    </view>
    <scroll-view
      :scroll-y="true"
      class="viewport viewport"
      id="scroller"
      :enable-back-to-top="true"
    >
      <view class="overview sk-image" style="padding-top: 67px">
        <view
          class="status icon-clock sk-transparent sk-text-0-0000-428 sk-text sk-pseudo sk-pseudo-circle"
          >等待付款</view
        >
        <view class="tips tips">
          <text class="money sk-transparent sk-text-0-0000-973 sk-text">应付金额: ¥ 36.90</text>
          <text class="time sk-transparent sk-text-0-0000-782 sk-text">支付剩余</text>
        </view>
        <view
          class="button sk-transparent sk-text-28-7879-902 sk-text"
          style="background-position-x: 50%"
          >去支付</view
        >
      </view>
      <view class="shipment shipment">
        <view class="locate sk-image">
          <view class="user sk-transparent sk-text-14-2857-115 sk-text">祁同伟 16666666666</view>
          <view class="address sk-transparent sk-text-14-2857-46 sk-text"
            >北京市 北京市 朝阳区朝阳小区</view
          >
        </view>
      </view>
      <view class="goods goods">
        <view class="item item">
          <navigator class="navigator navigator" hover-class="none">
            <image class="cover sk-image"></image>
            <view class="meta meta">
              <view class="name ellipsis sk-transparent sk-text-14-2857-5 sk-text"
                >随用随丢，懒人真爱地板清洁/除菌湿巾</view
              >
              <view class="type sk-transparent sk-text-22-2222-608 sk-text"
                >加厚加湿升级版20片*3包</view
              >
              <view class="price price">
                <view class="actual actual">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="sk-transparent sk-text-14-2857-880 sk-text">29.90</text>
                </view>
              </view>
              <view class="quantity sk-transparent sk-opacity">x1</view>
            </view>
          </navigator>
        </view>
        <view class="total total">
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-25 sk-text">商品总价: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-498 sk-text sk-pseudo sk-pseudo-circle"
              >29.90</view
            >
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-121 sk-text">运费: </view>
            <view
              class="symbol sk-transparent sk-text-0-0000-444 sk-text sk-pseudo sk-pseudo-circle"
              >7.00</view
            >
          </view>
          <view class="row row">
            <view class="text sk-transparent sk-text-0-0000-259 sk-text">应付金额: </view>
            <view
              class="symbol primary sk-transparent sk-text-0-0000-580 sk-text sk-pseudo sk-pseudo-circle"
              >36.90</view
            >
          </view>
        </view>
      </view>
      <view class="detail detail">
        <view class="title sk-transparent sk-text-0-0000-519 sk-text">订单信息</view>
        <view class="row row">
          <view class="item sk-transparent">
            订单编号: 1985719025254010882
            <text class="copy sk-transparent sk-text-0-0000-167 sk-text">复制</text>
          </view>
          <view class="item sk-transparent sk-text-0-0000-70 sk-text"
            >下单时间: 2025-11-04 22:41:23</view
          >
        </view>
      </view>
      <view is="components/XtxGuess" class="r r">
        <view class="caption XtxGuess--caption">
          <text
            class="text XtxGuess--text sk-transparent sk-text-0-0000-961 sk-text sk-pseudo sk-pseudo-circle"
            >猜你喜欢</text
          >
        </view>
        <view class="guess XtxGuess--guess"></view>
        <view
          class="loading-text XtxGuess--loading-text sk-transparent sk-text-14-2857-492 sk-text"
          style="background-position-x: 50%"
          >已经到底了~</view
        >
      </view>
      <view class="toolbar-height toolbar-height" style="padding-bottom: 34px"></view>
      <view class="toolbar toolbar" style="padding-bottom: 34px">
        <view class="button primary sk-transparent sk-text-14-2857-157 sk-text"> 去支付 </view>
        <view class="button sk-transparent sk-text-14-2857-418 sk-text"> 取消订单 </view>
      </view>
    </scroll-view>
  </view>
</template>
<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-655 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-0-0000-428 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 34.6154rpx;
  position: relative !important;
}
.sk-text-0-0000-973 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text-0-0000-782 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}
.sk-text-15-0000-389 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 38.4615rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-15-0000-564 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 38.4615rpx;
  position: relative !important;
}
.sk-text-15-0000-366 {
  background-image: linear-gradient(
    transparent 15%,
    #eeeeee 0%,
    #eeeeee 85%,
    transparent 0%
  ) !important;
  background-size: 100% 38.4615rpx;
  position: relative !important;
}
.sk-text-28-7879-902 {
  background-image: linear-gradient(
    transparent 28.7879%,
    #eeeeee 0%,
    #eeeeee 71.2121%,
    transparent 0%
  ) !important;
  background-size: 100% 63.4615rpx;
  position: relative !important;
}
.sk-text-14-2857-115 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-46 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-14-2857-5 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-22-2222-608 {
  background-image: linear-gradient(
    transparent 22.2222%,
    #eeeeee 0%,
    #eeeeee 77.7778%,
    transparent 0%
  ) !important;
  background-size: 100% 41.5385rpx;
  position: relative !important;
}
.sk-text-14-2857-880 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.3077rpx;
  position: relative !important;
}
.sk-text-0-0000-25 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-498 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-121 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-444 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-259 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-580 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 34.6154rpx;
  position: relative !important;
}
.sk-text-0-0000-519 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 28.8462rpx;
  position: relative !important;
}
.sk-text-0-0000-167 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 19.2308rpx;
  position: relative !important;
}
.sk-text-0-0000-70 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 25rpx;
  position: relative !important;
}
.sk-text-0-0000-961 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7692rpx;
  position: relative !important;
}
.sk-text-14-2857-492 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 37.6923rpx;
  position: relative !important;
}
.sk-text-14-2857-157 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-text-14-2857-418 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
