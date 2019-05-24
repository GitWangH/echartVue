import {post, get} from '@/util/http'

export function query(param) {
  return get('/msgCensus/query',{
    beginDate:'2018-01-02 23:00:00',
    endDate:'2018-01-02 23:00:00',
    createDate:'2018-01-02 23:00:00',
    serviceType:'MQ',
    orderBy:'msg_count',
  })
}
