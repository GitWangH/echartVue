import {post, get} from '@/util/http'

export function list() {
  return get('/departmentRanking/list')
}
