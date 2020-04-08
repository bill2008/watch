import { getSiteList,getSelectedSite,insertOrUpdateUserSite } from '@/api/selectSite'//引入登录 api 接口
 
const siteList = {
  actions: {
    // 取得站点更表
    getSiteList() { //定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
      return new Promise((resolve, reject) => { //封装一个 Promise
        getSiteList().then(response => { //使用 login 接口进行网络请求
          // commit('') //提交一个 mutation，通知状态改变
          resolve(response) //将结果封装进 Promise
        }).catch(error => {
          reject(error)
        })
      })
    },
    getSelectedSite({ commit },userId) {
      return new Promise((resolve, reject) => { //封装一个 Promise
        getSelectedSite(userId).then(response => { //使用 login 接口进行网络请求
          commit('') //提交一个 mutation，通知状态改变
          resolve(response) //将结果封装进 Promise
        }).catch(error => {
          reject(error)
        })
      })
    },
    insertOrUpdateUserSite({ commit },data) {
      return new Promise((resolve, reject) => { //封装一个 Promise
        insertOrUpdateUserSite(data).then(response => { //使用 login 接口进行网络请求
          commit('') //提交一个 mutation，通知状态改变
          resolve(response) //将结果封装进 Promise
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
export default siteList