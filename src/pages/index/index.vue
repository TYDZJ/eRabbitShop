<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component'
import PageSkeleton from './components/PageSkeleton.vue'

const bannerList = ref<BannerItem[]>([])
// 获取轮播图数据
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

const categoryList = ref<CategoryItem[]>([])
//获取前台分类数据
const getCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

const hotList = ref<HotItem[]>([])
//获取热门推荐数据
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

// 加载数据
const isloading = ref(true)
onLoad(async () => {
  await Promise.all([getHomeBannerData(), getCategoryData(), getHomeHotData()])
  isloading.value = false
})

//触底滚动加载猜你喜欢
const guessRef = ref<XtxGuessInstance>()
const onScrollToLower = () => {
  guessRef.value?.getMore()
}

// 下拉刷新
const refresher_triggered = ref(false)
const onRefresherrefresh = async () => {
  refresher_triggered.value = true

  // 重置 猜你喜欢 数据
  guessRef.value?.resetData()
  // 重新获取数据
  await Promise.all([getHomeBannerData(), getCategoryData(), getHomeHotData()])
  // 结束下拉刷新
  refresher_triggered.value = false
}
</script>

<template>
  <!-- 导航栏 -->
  <CustomNavbar />

  <scroll-view
    class="scroll-view"
    scroll-y
    @scrolltolower="onScrollToLower"
    :refresher-enabled="true"
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="refresher_triggered"
  >
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isloading" />
    <template v-else>
      <!-- 轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 前台分类 -->
      <CategoryPanel :list="categoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
