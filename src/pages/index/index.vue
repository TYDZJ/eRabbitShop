<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component'

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

onLoad(() => {
  getHomeBannerData()
  getCategoryData()
  getHomeHotData()
})

const guessRef = ref<XtxGuessInstance>()
const onScrollToLower = () => {
  guessRef.value?.getMore()
}
</script>

<template>
  <CustomNavbar />
  <scroll-view class="scroll-view" scroll-y @scrolltolower="onScrollToLower">
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList" />
    <XtxGuess ref="guessRef" />
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
