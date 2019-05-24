import {post, get} from '@/util/http'

export function query(param) {
  return get('/patDayInfo/query',{
    beginDate:'2019-01-27',
    endDate:'2019-01-27'
  })
}
