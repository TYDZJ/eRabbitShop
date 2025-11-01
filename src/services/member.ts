import type { ProfileDetail, UpdateProfile } from '@/types/member'
import { http } from '@/utils/http'

/**
 * 获取个人信息
 */
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    url: '/member/profile',
    method: 'GET',
  })
}

/**
 * 修改个人信息
 */
export const updateMemberProfileAPI = (data: UpdateProfile) => {
  return http<ProfileDetail>({
    url: '/member/profile',
    method: 'PUT',
    data,
  })
}
