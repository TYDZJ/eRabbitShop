import type { PageParams } from '@/types/global'
import type { HotResult } from '@/types/hot'
import { http } from '@/utils/http'

type hotParams = PageParams & { subType?: string }
// 获取热门推荐数据
export const getHotRecommendAPI = (url: string, data?: hotParams) => {
  return http<HotResult>({
    url,
    method: 'GET',
    data,
  })
}
