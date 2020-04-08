import request from '@/utils/request' //引入封装好的 axios 请求
 
export function getSiteList() { //取得站点名称列表
  return request({ //使用封装好的 axios 进行网络请求
    url: '/admin/getSiteList',
    method: 'get',
    data: {
    }
  })
}

export function getSelectedSite(userId) {
  return request({ //使用封装好的 axios 进行网络请求
    url: '/admin/getSelectedSite',
    method: 'get',
    params: {
      "userId": userId
    }
  })
}

export function insertOrUpdateUserSite(insertData) {
  console.log("insertData")
  console.log(insertData)
  return request({ //使用封装好的 axios 进行网络请求
    url: '/admin/insertOrUpdateUserSite',
    method: 'post',
    data: {
      "userId": insertData.userId,
      "siteIds": insertData.siteIds
    }
  })
}