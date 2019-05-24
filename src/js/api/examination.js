import {post, get} from '@/util/http'

export function querySplitByType() {
  return get('/examination/querySplitByType')
}
