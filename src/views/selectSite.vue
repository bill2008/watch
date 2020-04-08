<template>
  <div>
    <h1>欢迎! {{userInfo.userName}}</h1>
    <h2>请选择您要订阅的网站</h2>
    <el-checkbox-group v-model="selectedSite" class="checkGroup" @change="selectedChange">
      <el-checkbox v-for='item in siteList' :label="item.id" :key='item.id'>
        {{item.siteName}}
      </el-checkbox>
    </el-checkbox-group>
    <el-button type="primary" @click="updateSelectedSite">提交</el-button>
  </div>
</template>
<script>
export default {
  name: "selectSite",
  data() {
    return {
      userInfo: this.$route.query.data,
      siteList: [],
      selectedSite: []
    }
  },
  created() {
    var userId = this.userInfo.id;
    //getSiteList
    this.$store
    .dispatch("getSiteList")
    .then(response => {
      let code = response.data.code;
      if (code == 200) {
        this.siteList = response.data.data;
      }
    });
    // .dispatch("getSelectedSite", userId)
    // .then(response => {
    //   let code = response.data.code;
    //   if (code == 200) {
    //     this.selectedSite = response.data.data;
    //   }
    // });

    this.$store
    .dispatch("getSelectedSite", userId)
    .then(response => {
      let code = response.data.code;
      if (code == 200) {
        this.selectedSite = response.data.data;
      }
    });
    
  },
  methods: {
    selectedChange() {
      console.log(this.selectedSite);
    },
    updateSelectedSite() {
      var userId = this.userInfo.id;
      var selectedSite = this.selectedSite;
      var data = {
        "userId": userId,
        "siteIds": selectedSite
      };
      console.log(data);
      this.$store
      .dispatch("insertOrUpdateUserSite", data)
      .then(response => {
        let code = response.data.code;
        if (code == 200) {
          this.$message({
            showClose: true,
            message: '订阅成功！',
            type: 'success'
          });
        } else {
          this.$message({
            showClose: true,
            message: '出错了，订阅失败。请稍后重试。',
            type: 'error'
          });
        }
      });
    }
  }
//   data() { //这种方式也可以
//     return {
//       msg: null
//     };
//   },
  // created() {
  //   this.msg = this.$route.query.data;
  // }
}
</script>