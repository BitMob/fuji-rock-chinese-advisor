// const ENV = process.env.NODE_ENV || 'development'
// const apiUrl = ENV !== 'production' ? 'http://localhost:3003' : ''

// const wxConfig = {
//   appId: 'wx05b474a8f19e1a85',
//   appSecret: 'c3ad8bfc3b3b676f913a04d4dba2a22b',
//   cache_json_file: '/tmp'
// }

export function shuffle(array) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex
  const _ary = array
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = _ary[currentIndex]
    _ary[currentIndex] = _ary[randomIndex]
    _ary[randomIndex] = temporaryValue
  }
  return _ary
}

export const defaultShare = {
  title: 'Digest Design',
  img: 'https://digest-design.oss-cn-huhehaote.aliyuncs.com/images/apple-icon-180x180.png',
  desc: 'Real is good, interesting is better.',
  descTimeline: 'Digest Design - Real is good, interesting is better.'
}

export function setShareContent(params) {
  const link = window.location.href.split('?')[0]
  let _imgUrl = defaultShare.img
  let _title = defaultShare.title
  let _desc = defaultShare.desc
  let _descTimeline = defaultShare.descTimeline
  if (params) {
    _imgUrl = params.imgUrl
    _title = params.title
    _desc = params.desc
    _descTimeline = params.descTimeline
  }
  wx.ready(() => {
    wx.onMenuShareTimeline({
      title: _descTimeline,
      imgUrl: _imgUrl,
      link
    })

    wx.onMenuShareAppMessage({
      title: _title,
      imgUrl: _imgUrl,
      link,
      desc: _desc
    })
  })
}

export function getWxSignature(url) {
  fetch('http://localhost:3004/api/wx', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url })
  })
    .then(response => response.json())
    .then(json => {
      // 开始配置微信JS-SDK
      wx.config({
        // debug: true,
        appId: json.appId,
        timestamp: json.timestamp,
        nonceStr: json.nonceStr,
        signature: json.signature,
        jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'openLocation',
          'getLocation'
        ]
      })
    })
}
