import {post, get} from '@/util/http'

export function revenueList() {
  return get('/revenue/revenueList')
}
