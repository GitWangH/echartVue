import {post, get} from '@/util/http'

export function queryDeptTypeCount() {
  return get('/departmentType/queryDeptTypeCount')
}
