import type { LoginParams, LoginTraditionalParams, RefreshTokenParams } from '@/types/login'
import type { LoginResult, LoginTraditionalResult } from '@/types/member'
import { http } from '@/utils/http'

// 小程序登录
export const postLoginWxMinAPI = (data: LoginParams) => {
  return http<LoginResult>({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}

/**
 * 小程序登录_内测版
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}

// 传统登录-用户名+密码
export const postLoginTraditionalAPI = (data: LoginTraditionalParams) => {
  return http<LoginTraditionalResult>({
    url: '/login',
    method: 'POST',
    data,
  })
}

// 刷新token
export const refreshTokenAPI = (data: RefreshTokenParams) => {
  return http<LoginTraditionalResult>({
    url: '/login/refresh',
    method: 'PUT',
    data,
  })
}
