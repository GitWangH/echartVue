import {post, get} from '@/util/http'

export function queryTitleCount() {
  return get('/departmentProTitleCount/queryTitleCount')
}
