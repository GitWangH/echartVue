const geoCoordMap = {
  '集成平台': [121.4648, 31.2891],
  '东莞': [113.8953, 22.901],
  '东营': [118.7073, 37.5513],
  '中山': [113.4229, 22.478],
  '临汾': [111.4783, 36.1615],
  '临沂': [118.3118, 35.2936],
  '丹东': [124.541, 40.4242],
  '丽水': [119.5642, 28.1854],
  '乌鲁木齐': [87.9236, 43.5883],
  '佛山': [112.8955, 23.1097],
  '保定': [115.0488, 39.0948],
  '检验系统': [103.5901, 36.3043],
  '包头': [110.3467, 41.4899],
  '数据中心': [116.4551, 40.2539],
  '北海': [109.314, 21.6211],
  '南京': [118.8062, 31.9208],
  '南宁': [108.479, 23.1152],
  '南昌': [116.0046, 28.6633],
  '南通': [121.1023, 32.1625],
  '厦门': [118.1689, 24.6478],
  '台州': [121.1353, 28.6688],
  '合肥': [117.29, 32.0581],
  '呼和浩特': [111.4124, 40.4901],
  '咸阳': [108.4131, 34.8706],
  '哈尔滨': [127.9688, 45.368],
  '唐山': [118.4766, 39.6826],
  '嘉兴': [120.9155, 30.6354],
  '大同': [113.7854, 39.8035],
  '大连': [122.2229, 39.4409],
  '天津': [117.4219, 39.4189],
  '太原': [112.3352, 37.9413],
  '威海': [121.9482, 37.1393],
  '宁波': [121.5967, 29.6466],
  '宝鸡': [107.1826, 34.3433],
  '宿迁': [118.5535, 33.7775],
  '常州': [119.4543, 31.5582],
  '电子病历': [113.5107, 23.2196],
  '廊坊': [116.521, 39.0509],
  '延安': [109.1052, 36.4252],
  '张家口': [115.1477, 40.8527],
  '徐州': [117.5208, 34.3268],
  '德州': [116.6858, 37.2107],
  '惠州': [114.6204, 23.1647],
  '成都': [103.9526, 30.7617],
  '扬州': [119.4653, 32.8162],
  '承德': [117.5757, 41.4075],
  '心电系统': [91.1865, 30.1465],
  '无锡': [120.3442, 31.5527],
  '日照': [119.2786, 35.5023],
  '昆明': [102.9199, 25.4663],
  '杭州': [119.5313, 29.8773],
  '枣庄': [117.323, 34.8926],
  '柳州': [109.3799, 24.9774],
  '株洲': [113.5327, 27.0319],
  '武汉': [114.3896, 30.6628],
  '汕头': [117.1692, 23.3405],
  '江门': [112.6318, 22.1484],
  '沈阳': [123.1238, 42.1216],
  '沧州': [116.8286, 38.2104],
  '河源': [114.917, 23.9722],
  '泉州': [118.3228, 25.1147],
  '泰安': [117.0264, 36.0516],
  '泰州': [120.0586, 32.5525],
  '济南': [117.1582, 36.8701],
  '济宁': [116.8286, 35.3375],
  '海口': [110.3893, 19.8516],
  '淄博': [118.0371, 36.6064],
  '淮安': [118.927, 33.4039],
  '深圳': [114.5435, 22.5439],
  '清远': [112.9175, 24.3292],
  '温州': [120.498, 27.8119],
  '渭南': [109.7864, 35.0299],
  '湖州': [119.8608, 30.7782],
  '湘潭': [112.5439, 27.7075],
  '滨州': [117.8174, 37.4963],
  '潍坊': [119.0918, 36.524],
  '烟台': [120.7397, 37.5128],
  '玉溪': [101.9312, 23.8898],
  '珠海': [113.7305, 22.1155],
  '盐城': [120.2234, 33.5577],
  '盘锦': [121.9482, 41.0449],
  '石家庄': [114.4995, 38.1006],
  'HIS': [119.4543, 25.9222],
  '秦皇岛': [119.2126, 40.0232],
  '绍兴': [120.564, 29.7565],
  '聊城': [115.9167, 36.4032],
  '肇庆': [112.1265, 23.5822],
  '舟山': [122.2559, 30.2234],
  '苏州': [120.6519, 31.3989],
  '莱芜': [117.6526, 36.2714],
  '菏泽': [115.6201, 35.2057],
  '营口': [122.4316, 40.4297],
  '葫芦岛': [120.1575, 40.578],
  '衡水': [115.8838, 37.7161],
  '衢州': [118.6853, 28.8666],
  '西宁': [101.4038, 36.8207],
  '西安': [109.1162, 34.2004],
  '贵阳': [106.6992, 26.7682],
  '连云港': [119.1248, 34.552],
  '邢台': [114.8071, 37.2821],
  '邯郸': [114.4775, 36.535],
  '郑州': [113.4668, 34.6234],
  '鄂尔多斯': [108.9734, 39.2487],
  '重庆': [107.7539, 30.1904],
  '金华': [120.0037, 29.1028],
  '铜川': [109.0393, 35.1947],
  '银川': [106.3586, 38.1775],
  '镇江': [119.4763, 31.9702],
  '长春': [125.8154, 44.2584],
  '长沙': [113.0823, 28.2568],
  '长治': [112.8625, 36.4746],
  '阳泉': [113.4778, 38.0951],
  '青岛': [120.4651, 36.3373],
  '韶关': [113.7964, 24.7028]
};

var errorSymbolIcon = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n" +
  "AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA+VBMVEX////XWkrXWkrXWkrX\n" +
  "WkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrX\n" +
  "WkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrX\n" +
  "WkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWkrXWUnYX0/balzbaVvYYFDxxb/ihnrXWEjW\n" +
  "WEjgf3Lxx8HccGL00c3ihXrgfnL00czkjoPhhXngfnHjjYLXWUj22dX229jjjIH33tvih3vuubLZ\n" +
  "Y1PXW0sAAAAyIxcaAAAANHRSTlMABCA/VEEiBglPqN/1/P324q5WDCmp9/mxMDnS2kPbM7YO+163\n" +
  "6Cr6Tf5a6i28C2W+EjtOJ7qElAAAAAFiS0dEUg1gLZAAAAAJcEhZcwAAAfQAAAH0AMQEOAcAAAAH\n" +
  "dElNRQfjAhMXAhhcWye8AAABIElEQVQoz4VS13bCMAylEEYYIUAp0DLDTNjUlFIcZgizFP7/Z5Bl\n" +
  "KEle0IMt3aujK0t2uZ7Zi9sjCF6f3wEHxGAoHJGiciyesOKvyTdys1Q688DfP4jFsrn/fBtOSL5w\n" +
  "q59k0ZCDeBVLSIis/tcIoeH3GE6ljH0GGTD6mVBC9OlszhIqASDcIUydLJZUXxlrLFitAeEJo0+X\n" +
  "C3NjbHcY1BtACBEuS8394Ui5r2qMkHigbw6/ppXwRjm+Mo4m6GCgiED4ZBSfGlsKOickmi0g/DHs\n" +
  "f7YGXXr6O7N22x32kHgK3PGcVz9f4JC6+PJE2jmSXp8PK5O1D1Ee3Meby9vwz8dCCkXlDku9gXWF\n" +
  "pXKlWldVpdnu9p1brzU0TWx1nv6aK5YmRz1awFuSAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAy\n" +
  "LTE5VDE1OjAyOjI0KzA4OjAwDXBXugAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMi0xOVQxNTow\n" +
  "MjoyNCswODowMHwt7wYAAABDdEVYdHNvZnR3YXJlAC91c3IvbG9jYWwvaW1hZ2VtYWdpY2svc2hh\n" +
  "cmUvZG9jL0ltYWdlTWFnaWNrLTcvL2luZGV4Lmh0bWy9tXkKAAAAY3RFWHRzdmc6Y29tbWVudAAg\n" +
  "R2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAu\n" +
  "IFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICDOSJALAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6\n" +
  "OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA0MDPgUzhhAAAAF3RFWHRU\n" +
  "aHVtYjo6SW1hZ2U6OldpZHRoADQwM3OiaDwAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9w\n" +
  "bmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTU0Njk3NzQ3NnXLVikAAAASdEVYdFRodW1iOjpT\n" +
  "aXplADEyMDExQq462i8AAABidEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL3d3d3Jvb3QvbmV3\n" +
  "c2l0ZS93d3cuZWFzeWljb24ubmV0L2Nkbi1pbWcuZWFzeWljb24uY24vZmlsZXMvMTIwLzEyMDEw\n" +
  "NTIucG5n7STXdgAAAABJRU5ErkJggg==";

var normalHostIcon = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n" +
  "AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACKFBMVEX///8AAACClqoAAAB+\n" +
  "kqZ9kaUAAAAAAAAAAABid4kAAAAAAAAAAACDmK2Cl6yYrL/A0+C/0d++0d97kaemu8mrwM2pv8x8\n" +
  "kqj9///2+v31+Pv0+Pt5kaf4/P22ytq1ydp5kKX0+fv4+vt5j6Tz+fu5zduDpL6Fpr+Gpr94jqPw\n" +
  "9/q5zNqIqMCIqMF3jqPu9Pi3ydm5y9q6y9p2jaLs8fa1ydf6+vx1jKHp8PW2ytiDpb51i6Dn7vO2\n" +
  "ydeJqMF0i6Hk7PGzyNW1ydW1ydZziqDh6e+yxtT5+vz5+ftyiZ/d5++0x9WEpb9yiJ7b5ey0xtSG\n" +
  "p8CJqcFxiZ7Z5OqwxdKxxdKyxtJxiJ3V4Omuw9D3+fr3+Plwh5zS3uexxNKFpb+Gp79vhpvQ3OWx\n" +
  "xdGKqsKLqsOLqsSKqsSKq8SHqsOxxtNuhZrM2uOvw9CyxdGyxdKzxtK1xta4yN64yd+0ytywzt+u\n" +
  "zd2ux9VthZrI1+Cuws+vw9GzxNk6iwA6jACxy+PtFADsFACryNjI2OFshJnF1d6sws6tws6vw9Oy\n" +
  "xNqyxdutxtiqytupytqrxdPF1t9tg5jB09uswM2qv8yqvsyrv82rv86qv86qwM6rwc5sgpe+z9mp\n" +
  "vsvx/f+lusfw+/+kucdrg5i8zdiovsqkusbv+v+iuMXu+v9rgpe3ytSovcny/f+iucXx/P9qgZa0\n" +
  "yNOpvsqnvMi1ydSvw8+vws9qgpZpgJX///88gKs+AAAADXRSTlMABLADrrMNFRbEKz9Dib10AQAA\n" +
  "AAFiS0dEAIgFHUgAAAAHdElNRQfjAhQXCyOhRU1oAAABv0lEQVQ4y2XTVVsCURCAYTB2sbsVwQID\n" +
  "xQ4UEwMbTMTubsVusBO7xU7M32csx8XxncvzPfOcm6FQEKqOiSliokOlQLp6ZuYWlgQLczM9XfBO\n" +
  "1beytrFFbKyt9MEOzM7ewdEJcXSwt8P+BrizC92VRHdxxv8GNAaT7kaiMxk0ELh7eHqx2ASWl6eH\n" +
  "Owy8fXxZfhyCH8vXxxsG/gHcwCAkkBvgD4PgkNAwUmhIMAzCIyKjfv8QFRkRDgNedAybwydw2DHR\n" +
  "PBjExsUnJCIJ8XGxMEgSJKekIinJgiQYpAnTM9hIRrowDQaZWdk5/FwCPyc7KxMGInFefgGSnycW\n" +
  "waCwqFhSgkiKiwphIC0tK69AystKpTCorKrm1Hypraurb2hsqqqEQXNLa3Vbe3tHZ1d3T29ff0sz\n" +
  "DGQDg9+GhkdGx8YnJqdkMJiekcsVcoVidm5+YXFpeWUaBqtr6xsbSqVyc2tre2dnd20VBnv7B4dH\n" +
  "xyc/c3R4sL8Hg9Mz1fnF5dXPXJyrzk5hcH1ze3f/oJm725trGDw+qZ9J6qfHf8HL6xvp9QUGuMH7\n" +
  "h7Z3A3A4mKGRsTYjQ3B6VAynacMxzfF+ArLCrs0wZqY3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5\n" +
  "LTAyLTIwVDE1OjExOjM1KzA4OjAww/VtCQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMi0yMFQx\n" +
  "NToxMTozNSswODowMLKo1bUAAABDdEVYdHNvZnR3YXJlAC91c3IvbG9jYWwvaW1hZ2VtYWdpY2sv\n" +
  "c2hhcmUvZG9jL0ltYWdlTWFnaWNrLTcvL2luZGV4Lmh0bWy9tXkKAAAAGHRFWHRUaHVtYjo6RG9j\n" +
  "dW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAzMij0+PQAAAAW\n" +
  "dEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMzLQWzh5AAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1h\n" +
  "Z2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1NDY5NjIyMzYflDYdAAAAEHRFWHRUaHVt\n" +
  "Yjo6U2l6ZQA5OTdClByG1AAAAF50RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2hvbWUvd3d3cm9vdC9u\n" +
  "ZXdzaXRlL3d3dy5lYXN5aWNvbi5uZXQvY2RuLWltZy5lYXN5aWNvbi5jbi9maWxlcy8xLzEyMjgw\n" +
  "LnBuZ2j7rOYAAAAASUVORK5CYII="

var errorHostIcon = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n" +
  "AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA\n" +
  "B3RJTUUH4wIUFx8Hs+h+7AAABXFJREFUWMOtl31slFUWxn/n3nc+mkqLUPAji1IIUtRYBXa7C/gF\n" +
  "anVZbPAjGk3URBNITCDG/YfENSRuNtnsmrgakl3jJruroqKGQtTAQFhZikg0iKZ8SEAEQQLU2tKP\n" +
  "KTP33rN/zAxMp7UzUE9ycv947zl57nOec+95RVUpNhGJVq565z1ro5bSb8OZiOC9W7fy6YceUFVX\n" +
  "NqDEopJk9vmXV6+5/PKJLQ3X1KNBGQmCAGKE/QcOtzz/8uo1IvKgqvoLASCFU4pI9Ie/vbk2YH53\n" +
  "3bVTiMUiQgUMGBGyWceevd9gCB+8sPzRxRfEhKqSBzHmuVfeVq+q/RmvfQNZ7a3A+way2p/x6lX1\n" +
  "uVfeVmBMIWclXlyCZPCeTDbw8e5DVHD4otLB7TdOJXgPkAR6LkYDEoAQAgALbqqvGMCW3YcJIRDy\n" +
  "eSqHXiJCVPEK1gh/WbMNY2TEbAqEoPyqYRJec/EXaoMAqGqeAcUYwRphJAjneyQXV0nblmXAacD7\n" +
  "wKxpV1acxPuA0/AzMeBy6pzfOC1PcjkTNu06cC5udACAoAExwp/f3YqRCjSgyqxpVxI0VAS3LAPO\n" +
  "56i0RjBiygKQPPXO/wwaUAWvAR8CjfWXVZzEh4DXcDESGMqAd4EQAnf+sgG0/FuACBs/2493OvoS\n" +
  "oIoPASPCX99twwiUq0FQaKyfgNOAM2b0DAQNIAUNSFkAAqg1OBuRiSVHCUDAuYDzgRmTLi0fLYJa\n" +
  "i4vi9H/5Obdu+iePzpp8cmvTNaiY3Kwg8nFvYEXLzn07dRiVDlMChQB3N80YUdUqghqLRoa2Z5bh\n" +
  "dm7klt/ey9gbHsNWVwPg+9N07mu/7diWzTtSv5nxmogsLZ0XhrZhcIiBF9/fjvwk/YKKwSeSTH/v\n" +
  "Jaac3M91K1aSPbiX3tX/wJ0+kUs+4Qpqmm6lcdmztL+66qnUrxERWVIMwpQC8D4ggDWGyNpBHrMR\n" +
  "MRsjFsWIEgnGH9vPlCNfcP3TyxlY9xYDqXXQ20NUXUNUXQO9PQykWhlY+zrXP7mEMWPHPvmvmdPm\n" +
  "ipw/2rAXkQ+Bhl/UDtKfiGCIsCaJiiEbFy5pfZFJi+4ns3UD/tRxTDKZGw7ORSpohD95nMx/P+Dq\n" +
  "5oWceeeNPwHzgcwQBsgzUGDCFbtTfDC8sG0qf9xeTyBO/LOt1E4Yjzt0APEe0mno74P+3rz3QTqN\n" +
  "eI8/9DWXjq8lYcxcoOonukBwwRM0nJ8HtXAgj1f4fdM+sJaz4SxBDPLdYaxA7Ye7R2yY7pbZyNFD\n" +
  "hcsqPqIGfAjcc8tsstkszTfPJpPN0jxvNmczaRbMbaB/oJvmWZNzE1BXJ6aC/jexJHT9CGIoqtHQ\n" +
  "Nsw6h6rSuvkTFt0+h9ZNbbTcMe/cujbVRkvzPFq376FeldDVia2ppfeR+ahzQ2cCESSKsDW1hK4u\n" +
  "Sltr6FvgFYOw+M45rEvt4L7meazfVLJu3sl9dzWxY+bNdPecpm7iBHw8mZuQSq8OyQvYRnR0dXPG\n" +
  "+V0U7TIle1EjxOIxNm7bRbIqQaptuDVO6tN20gsf5vtjx7HWEiWrsIkkpsRtIkmUqMJEMY6cOE3q\n" +
  "VNdLhQ4oZUDT/T3bP9rwv7mVvOvBGFy8iqapTcjedm5qvBFjpPg/AxFBRCAon7fv4eCZvvWrvvl+\n" +
  "G5A+d+iizWOAq4C6IdoY2ey/Gycvm143buHU+qupq6uDKB/uHB0dHRz89ihfd/Z8+MSuAyuAI0BP\n" +
  "4V0Y9GtGrj+TXNhsnwDGPX7VxDmLrhi3dHxkbyjwJ8APzn+1/kTn3/9z9FQbcBzoLr6K5WLGqEG6\n" +
  "EbFANTAuz94lgM1/9kAv0AF0An2lj9GoAeRBCBDLMxhn0F1MhlzNs8M9x/8HhIckfqecESEAAAAl\n" +
  "dEVYdGRhdGU6Y3JlYXRlADIwMTktMDItMjBUMTU6MzE6MDcrMDg6MDCCicICAAAAJXRFWHRkYXRl\n" +
  "Om1vZGlmeQAyMDE5LTAyLTIwVDE1OjMxOjA3KzA4OjAw89R6vgAAAEN0RVh0c29mdHdhcmUAL3Vz\n" +
  "ci9sb2NhbC9pbWFnZW1hZ2ljay9zaGFyZS9kb2MvSW1hZ2VNYWdpY2stNy8vaW5kZXguaHRtbL21\n" +
  "eQoAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFn\n" +
  "ZTo6SGVpZ2h0ADMyKPT49AAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAzMtBbOHkAAAAZdEVY\n" +
  "dFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTU0Njk2\n" +
  "NDgwNPJL3vgAAAARdEVYdFRodW1iOjpTaXplADE0OTdCUTb23wAAAF10RVh0VGh1bWI6OlVSSQBm\n" +
  "aWxlOi8vL2hvbWUvd3d3cm9vdC9uZXdzaXRlL3d3dy5lYXN5aWNvbi5uZXQvY2RuLWltZy5lYXN5\n" +
  "aWNvbi5jbi9maWxlcy8wLzY4MjcucG5nkStgRgAAAABJRU5ErkJggg==";

const BJData = [
  //[{name: '检验系统', value: 25}, {name: '集成平台', status: 1}, {network: 1}],
  [{name: '心电系统', value: 75}, {name: '电子病历', status: 1}, {network: 1}],
  [{name: '集成平台', value: 20}, {name: '电子病历', status: 1}, {network: 1}],
  [{name: '集成平台', value: 20}, {name: '心电系统', status: 1}, {network: 1}],
  [{name: '电子病历', value: 50}, {name: '心电系统', status: 1}, {network: 1}],
  [{name: '电子病历', value: 50}, {name: '数据中心', status: 0}, {network: 0}],
  [{name: '心电系统', value: 10}, {name: '数据中心', status: 0}, {network: 1}],
  [{name: '电子病历', value: 70}, {name: '集成平台', status: 1}, {network: 1}],
  [{name: '心电系统', value: 45}, {name: '集成平台', status: 1}, {network: 1}]

];


const convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i];
    var fromCoord = geoCoordMap[dataItem[0].name];
    var toCoord = geoCoordMap[dataItem[1].name];
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem[0].name,
        toName: dataItem[1].name,
        value: dataItem[0].value,
        coords: [fromCoord, toCoord],
        lineStyle: {
          normal: {

            type: dataItem[2].network == 0 ? 'dashed' : 'solid',
            shadowColor: dataItem[2].network == 0 ? "red" : "blue"
          },
          emphasis: {
            color: dataItem[2].network == 0 ? "red" : "blue"
          },

        },
        label: {
          emphasis: {
            show:true,
            formatter: dataItem[2].network == 0 ?"警告：网络连接不通！\n\n\n\n\n\n":"",
            color:"red",
            position:'middle'
          }
        }
      })
      ;
    }
  }
  return res;
};

var color = ['#a6c84c', '#ffa022', '#46bee9'];
var series = [];
[['数据流量', BJData]].forEach(function (item, i) {
  series.push(
    {
      //name: item[0],
      "type": "lines",
      "polyline":false,
      "zlevel": 2,
      "effect": {
        "show": true,
        "period": 4,
        "trailLength": 0.02,
        "symbol": "arrow",
        "symbolSize": 5
      },
      "lineStyle": {
        "normal": {
          "width": 1,
          "opacity": 0.6,
          "curveness": 0.2
        }
      },
      "tooltip": {
        "trigger": "item"
      },
      data: convertData(item[1])
    },
    /*{
      "name": "来源地址",
      "type": "effectScatter",
      "coordinateSystem": "geo",
      "zlevel": 2,
      "rippleEffect": {
        "period": 4,
        "brushType": "stroke",
        "scale": 4
      },
      "tooltip": {
        "trigger": "item"
      },
      "label": {
        "normal": {
          "show": true,
          "position": "left",
          "offset": [
            -5,
            5
          ],
          "formatter": "{b}"
        },
        "emphasis": {
          "show": true
        }
      },
      "hoverAnimation": true,
      "symbol": "circle",
      "symbolSize": 20,
      "itemStyle": {
        "normal": {
          "show": true,
          "color": "#f00"
        }
      },
      //data: convertData(item[1])103.5901,36.3043
      /!*data: [
        {
          "name": "检验系统",
          "value": [
            "103.5901",
            "36.3043",
            1
          ]
        }]*!/
    },*/
    {
      "name": "目标地址",
      "type": "scatter",
      "coordinateSystem": "geo",
      "zlevel": 2,
      "tooltip": {
        "trigger": "item"
      },
      "label": {
        "normal": {
          "show": true,
          "position": "right",
          "color": "#00ffff",
          "formatter": "{b}",
          "textStyle": {
            "color": "#00ffff"
          }
        },
        "emphasis": {
          "show": false
        }
      },

      //"symbol": "circle",
      //"symbol": errorHostIcon,
      "symbolSize": 20,
      "itemStyle": {
        "normal": {
          "show": true,
          "color": "#ff0"
        }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[1].name,
          value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
          symbol: dataItem[1].status == 1 ? normalHostIcon : errorHostIcon
        };
      })
    });
});

export const systemRelationChartOption = {
  backgroundColor: 'rgba(10, 10, 10, 0)',
  title: {
    text: '系统流量监控',
    //subtext: '嘉和美康',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show: false,
    orient: 'vertical',
    top: 'bottom',
    left: 'right',
    data: ['数据流量'],
    textStyle: {
      color: '#fff'
    },
    //selectedMode: 'single'
    selected: {
      // 选中'系列1'
      '数据流量': true/*,
      '电子病历': true,
      '集成平台': true,
      '心电系统': true*/
    }
  },
  dataRange: {
    show: true,
    min: 0,
    max: 100,
    text: ['高', '低'],
    textStyle: {
      "color": "#fff"
    },
    itemWidth: 8,
    itemHeight: 70,
    realtime: true,
    calculable: true,
    color: ['orangered', 'yellow', 'lightskyblue']
  },
  geo: {
    map: 'china',
    show: false,
    label: {
      emphasis: {
        show: false
      }
    },
    zoom: 1.8,
    center: [110.97, 32.71],
    roam: true,
    itemStyle: {
      normal: {
        areaColor: '#323c48',
        borderColor: '#404a59'
      },
      emphasis: {
        areaColor: '#2a333d'
      }
    }
  },
  series: series
};
