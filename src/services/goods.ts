import { http } from '@/utils/http'

/**
 *
 * @param id 商品id
 * @returns
 */
export const getGoodsAPI = (id: string) => {
  return http({
    url: '/goods',
    method: 'GET',
    data: {
      id,
    },
  })
}
