<template>
  <div class="header">
    <el-row>
      <el-col :span="4">
        <div class="logo" @click="handleLogoTextClicked">
                    <img src="@/assets/logo1.png" alt="logo" />
<!--          Policy Filter-->
        </div>
      </el-col>
      <el-col :span="18 + navLen">
        <div class="nav">
          <el-menu mode="horizontal" :router="true" :default-active="$route.path" class="menu-custom-style">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/new">最新政策</el-menu-item>
            <el-menu-item index="/hot">热门政策</el-menu-item>
            <el-menu-item index="/search">检索政策</el-menu-item>
            <el-menu-item index="/about">关于</el-menu-item>
            <el-menu-item index="/login" v-if="!token">登录</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="2 - navLen">
        <div v-if="token" style="padding-left: 1em;">
          <el-dropdown>
            <span class="el-dropdown-link logo">
              <div>
                {{username}}
              </div>
              <el-icon class="el-icon--right">
                <arrow-down/>
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="handleNewArticleClicked">新建文章</el-dropdown-item>
                <el-dropdown-item @click="handleAdmin">后台管理</el-dropdown-item>
                <!--                <el-dropdown-item>Action 3</el-dropdown-item>-->
                <!--                <el-dropdown-item disabled>Action 4</el-dropdown-item>-->
                <el-dropdown-item divided @click="handleLogout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
<!--        <div v-else>-->
<!--          <div class = "logo">登录</div>-->
<!--        </div>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {ElRow, ElCol, ElMenu, ElMenuItem, ElMessageBox} from "element-plus";
import JsCookie from "js-cookie";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Nav",
  components: {
    ElRow,
    ElCol,
    ElMenu,
    ElMenuItem,
  },
  data() {
    return {
      token: "",
      username: "admin",
      navLen: 0,
    }
  },
  mounted() {
    // console.log("111");
    this.$data.token = JsCookie.get("token");
    if (this.$data.token) {
      this.$data.username = JsCookie.get("username");
      this.$data.navLen = 0;
    }else{
      this.$data.navLen = 1;
    }
    // this.$data.token = '1';
  },
  methods: {
    handleLogout() {
      ElMessageBox.confirm('确定要退出登录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        JsCookie.remove("token");
        JsCookie.remove("username");
        location.reload();
        // 确定退出登录，执行相关逻辑
      }).catch(() => {
        // 取消退出登录，不需要执行任何逻辑
      })
    },
    handleNewArticleClicked(){
      this.$router.push({path: '/change'});
    },
    handleLogoTextClicked(){
      this.$router.push({
        path: '/',
      })
    },
    handleAdmin(){
      this.$router.push({
        path: '/admin',
      });
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.logo {
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  height: 40px;
}


.nav {
  height: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.el-menu.el-menu--horizontal {

}

.menu-custom-style{
  border-bottom: solid 0px var(--el-menu-border-color)!important;
}

/*.menu-custom-style .el-menu-item {*/
/*  background-color: transparent;*/
/*  border-color: transparent;*/
/*}*/
/*.menu-custom-style .el-menu-item:hover {*/
/*  text-decoration: none;*/
/*}*/

.login-btn {
  margin-left: auto;
  color: #333;
  font-weight: bold;
  border-color: #333;
  border-color: transparent;
}

.logo:hover{
  cursor: pointer;
}
</style>
<!--<template>-->
<!--  <el-menu-->
<!--      :router="true"-->
<!--      text-color="#606266"-->
<!--      active-text-color="#2F74FF"-->
<!--      default-active="¥route.path"-->
<!--      mode="horizontal"-->
<!--      style="overflow-x: auto;height: 4em;flex-direction: row-reverse"-->
<!--      class="el-menu-demo"-->
<!--      ellipsis="false"-->
<!--  >-->

<!--    <el-menu-item-->
<!--        index="/mainPage"-->
<!--    >-->
<!--      <div>首页</div>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item-->
<!--        index="/new"-->
<!--    >-->
<!--      <div>最新政策</div>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item-->
<!--        index="/search"-->
<!--    >-->
<!--      <div>检索政策</div>-->
<!--    </el-menu-item>-->
<!--  </el-menu>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "MainNav",-->
<!--  data(){-->
<!--    return {-->

<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.flex-grow {-->
<!--  flex-grow: 1;-->
<!--  width: 20%;-->
<!--}-->
<!--</style>-->