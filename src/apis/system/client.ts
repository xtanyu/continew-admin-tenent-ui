import http from '@/utils/http'

const BASE_URL = '/system/client'

export interface ClientResp {
  id: string
  clientId: string
  clientKey: string
  clientSecret: string
  authType: string
  clientType: string
  activeTimeout: string
  timeout: string
  status: string
  createUser: string
  createTime: string
  updateUser: string
  updateTime: string
  createUserString: string
  updateUserString: string
}
export interface ClientDetailResp {
  id: string
  clientId: string
  clientKey: string
  clientSecret: string
  authType: string
  clientType: string
  activeTimeout: string
  timeout: string
  status: string
  createUser: string
  createTime: string
  updateUser: string
  updateTime: string
  createUserString: string
  updateUserString: string
}
export interface ClientQuery {
  clientKey: string
  clientSecret: string
  authType: string[]
  clientType: string
  status: string
  sort: Array<string>
}
export interface ClientPageQuery extends ClientQuery, PageQuery {}

/** @desc 查询系统授权列表 */
export function listClient(query: ClientPageQuery) {
  return http.get<PageRes<ClientResp[]>>(`${BASE_URL}`, query)
}

/** @desc 查询系统授权详情 */
export function getClient(id: string) {
  return http.get<ClientDetailResp>(`${BASE_URL}/${id}`)
}

/** @desc 新增系统授权 */
export function addClient(data: any) {
  return http.post(`${BASE_URL}`, data)
}

/** @desc 修改系统授权 */
export function updateClient(data: any, id: string) {
  return http.put(`${BASE_URL}/${id}`, data)
}

/** @desc 删除系统授权 */
export function deleteClient(id: string) {
  return http.del(`${BASE_URL}/${id}`)
}

/** @desc 导出系统授权 */
export function exportClient(query: ClientQuery) {
  return http.download(`${BASE_URL}/export`, query)
}
