<template>
  <div class="article-edit">
    <el-form :model="policy" label-width="100px">
      <el-form-item label="文章ID">
        <el-input v-model="policy.policyId"/>
      </el-form-item>
      <el-form-item label="文章标题">
        <el-input v-model="policy.policyTitle"></el-input>
      </el-form-item>
      <el-form-item label="机构名称">
        <el-input v-model="policy.pubAgency"></el-input>
      </el-form-item>
      <el-form-item label="机构全名">
        <el-input v-model="policy.pubAgencyFullName"/>
      </el-form-item>
      <el-form-item label="机构ID">
        <el-input v-model="policy.pubAgencyId"/>
      </el-form-item>
      <el-form-item label="发布号">
        <el-input v-model="policy.pubNumber"/>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" :autosize="{ minRows: 12 }" v-model="policy.policyBody"></el-input>
      </el-form-item>
      <el-form-item label="发布省">
        <el-input v-model="policy.province"/>
      </el-form-item>
      <el-form-item label="通知类型">
        <el-input v-model="policy.policyType"/>
      </el-form-item>
<!--      <el-form-item>-->
<!--        <el-upload-->
<!--            class="upload-demo"-->
<!--            action="/upload"-->
<!--            :auto-upload="false"-->
<!--            :on-change="handleChange"-->
<!--            :file-list="fileList"-->
<!--            v-model="policy.policySource"-->
<!--            :data="uploadData"-->
<!--            limit="1"-->
<!--        >-->
<!--          <el-button type="primary">选取文件</el-button>-->
<!--          <el-button style="margin-left: 10px;" type="success" @click="upload">上传文件</el-button>-->
<!--        </el-upload>-->
<!--      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ref } from 'vue';
// import { useRoute, useRouter } from 'vue-router';
import JsCookie from "js-cookie";
import request, {success} from "@/request/request";
import {ElMessage} from "element-plus";

export default {
  name: 'ArticleEdit',
  setup() {
    const article = ref({});

    // const router = useRouter();
    // const route = useRoute();
    // const isEdit = route.params.id !== undefined;

    // function submit() {
    //   // 这里是提交文章的代码
    //   // 如果是新建文章，需要发送 POST 请求
    //   // 如果是编辑文章，需要发送 PUT 请求
    //   // 你可以根据实际情况来实现这个函数
    //   // 成功提交后，可以调用 router.push() 跳转回文章列表页面
    //   router.push('/article');
    // }

    return {
      article,
      // isEdit,
      // submit,
    };
  },
  data(){
    return {
      username: '',
      policy: {
        policyId: "",
        policyTitle: "",
        policyGrade: "",
        pubAgencyId: "",
        policyBody: "",
        pubAgency: "",
        pubAgencyFullName: "",
        pubNumber: "",
        pubTime: null,
        policyType: "",
        province: "",
        city: null,
        policySource: null,
        updateTime: null
      },
    }
  },
  mounted() {
    let token = JsCookie.get('token');
    if(!token){
      this.$router.push('/');
      return;
    }
    this.$data.username = JsCookie.get('username')
    let id = this.$route.query.id;
    request.get('/file/query/' + id).then((res) => {
      console.log('code: ' + res.code);
      if(res.code == success){
        this.$data.policy = res.data;
      }else{
        ElMessage.error(res.msg);
      }
    })
    let tempBody = this.$data.policy.policyBody.split(/\s+/);
    let str = "";
    tempBody.forEach((ts) => {
      str += ts + '\n';
    })
    // alert(str);
    this.$data.policy.policyBody = str;
  },
  methods:{
    getCurrentTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      // const hour = now.getHours();
      // const minute = now.getMinutes();
      // const second = now.getSeconds();
      this.policy.updateTime = `${year}-${month < 10 ?'0':''}${month}-${day}`;
      if(this.policy.pubTime == null){
        this.policy.pubTime = `${year}-${month < 10 ?'0':''}${month}-${day}`;
      }
    },
    submit(){
      this.getCurrentTime();
      console.log(this.$data.policy.pubTime);
      if(this.policy.policyId){
        request.post('/file/submit',this.policy, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          alert('code: ' + res.code);
          alert('success: ' + success);
          if(res.code == success){
            ElMessage.success("修改成功！");
            this.$router.push({
              path: '/article',
              query: {
                id: this.policy.policyId,
              }
            });
          }else{
            ElMessage.error(res.data.msg);
          }
        })
      }
    }
  }
};
</script>

<style scoped>
.article-edit {
  max-width: 800px;
  margin: 0 auto;
  padding: 6em;
}
</style>
