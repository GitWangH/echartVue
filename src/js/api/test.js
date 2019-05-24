import {post, get} from '@/util/http'

export function queryTest() {
  return post('/api/JHIP.TEST.BS.NewService6/OnProcessInput')
}

