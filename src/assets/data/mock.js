// 引入mockjs
const Mock = require('mockjs');

const respData ={
  "cpu":{
    "idle":'@float(10000, 50000, 2, 6)',
    "system":"3113.41",
    "user":"10101.3"
  },
  "createDate":'@now("second")',//'@DATETIME("yyyy-MM-dd HH:mm:ss")',//"2019-02-22 17:01:20",
  "disk":{
    "disk_io":{
      "write_bytes":"19976670720",
      "read_count":"94417",
      "read_bytes":"2976430080",
      "write_count":"497026"
    },
    "disk_usage":{
      "total":"28",
      "percent":"30.9",
      "free":"@natural(1, 100)",
      "used":"8"
    }
  },
  "host_ip":"192.168.254.18",
  "host_name":"jiankong1",
  "memory":{
    "mem_real":{
      "total":"7803",
      "free":'@natural(1, 1000)', //大于等于零的整数,
      "used":"5028"
    },
    "mem_swap":{
      "total":"0",
      "free":"0",
      "used":"0"
    }
  },
  "network":{
    "ens160":{
      "bytes_sent|10000000-100000000":500000000,
      "bytes_recv|10000000-100000000":500000000
    },
    "ens192":{
      "bytes_sent|10000000-100000000":500000000,
      "bytes_recv|10000000-100000000":500000000
    }
  }
}

Mock.mock('http://127.0.0.1:8083/test', 'get', respData);
