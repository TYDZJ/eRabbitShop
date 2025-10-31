/** 小程序登录参数 */
export type LoginParams = {
  /** 登录方式 1-微信小程序 2-支付宝小程序 */
  code: string
  /** 用户信息 */
  encryptedData: string
  /** 加密算法的初始向量 */
  iv: string
}

/** 传统登录参数 */
export type LoginTraditionalParams = {
  /** 用户名或手机号 */
  account: string
  /** 密码 */
  password: string
}

/** 刷新token */
export type RefreshTokenParams = {
  /** 用户名 */
  account: string
  /** 用户id */
  id: string
}
