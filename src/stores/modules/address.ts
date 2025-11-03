import type { AddressItem } from '@/types/goods'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  // 选择的地址
  const selectedAddress = ref<AddressItem>()

  // 修改选择的地址
  const changeSelectedAddress = (val: AddressItem) => {
    selectedAddress.value = val
  }

  return { selectedAddress, changeSelectedAddress }
})
