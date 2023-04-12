<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="title">登录</h1>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model.trim="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model.trim="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" :loading="loginLoading" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import JsCookie from "js-cookie";
import request, {success} from "@/request/request";
import {ElMessage} from "element-plus/es";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      loginLoading: false
    }
  },
  mounted() {
    let token = JsCookie.get("token");
    if(token){
      this.$router.push({
        path: '/',
      });
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 这里执行登录逻辑，可以在这里向后端发送请求验证用户名和密码是否正确
          // 如果验证通过，则可以进行路由跳转或者其他操作
          let data = new FormData();
          data.append('username', this.$data.loginForm.username);
          data.append('password', this.$data.loginForm.password);
          request.post('/admin/login', this.$data.loginForm, {
            headers:{
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            let code = res.code;
            console.log('code:' + code);
            console.log('success:' + success);
            if(code == success){
              let token = '';//res.data.token;
              try{
                token = res.data.token;
              }catch(ex){
                token = 'admin';
                console.log(ex);
              }
              console.log("token:" + token);
              // try{
              //   token = res.data.token;
              // }catch (ex){
              //   console.log(ex);
              // }
              if(token == null){
                token = 1;
              }
              JsCookie.set('token',token,{ expires: 7 });
              JsCookie.set('username',this.$data.loginForm.username, {expires: 7});
              this.$router.push({
                path: '/',
              });
              location.reload();
              // 有效期7天
            }
            else{
              ElMessage.error(res.data.msg);
            }
            // let token = res.data.token;
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 2em;
}
.login-box {
  width: 25em;
  height: 18em;
  padding: 2em;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
}
.login-btn {
  width: 8em;
  float: right;
}
</style>
