/** 小程序登录 登录用户信息 */
export type LoginResult = {
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
  /** 手机号 */
  mobile: string
  /** 登录凭证 */
  token: string
}

/** 传统登录 登录用户信息 */
export type LoginTraditionalResult = LoginResult & {
  /** 性别*/
  gender: Gender
  /** 生日 */
  birthday: string
  /** 城市编码 */
  cityCode: string
  /** 省份编码 */
  provinceCode: string
  /** 职业 */
  profession: string
}
type Gender = '男' | '女' | '未知'
