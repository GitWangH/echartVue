import {post, get} from '@/util/http'

export function query(param) {
  return get('/storageCensus/query',{
    beginDate:'2018-11-25',
    endDate:'2018-12-04'
  })
}

export function queryIncrement(param) {
  return get('/storageCensus/queryIncrement',{
    beginDate:'2018-11-22',
    endDate:'2018-11-28'
  })
}
