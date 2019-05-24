import {post, get} from '@/util/http'

export function serviceInfo() {
  return get('/apiSer/jhip/WebserviceController.do?serviceInfo')
}
