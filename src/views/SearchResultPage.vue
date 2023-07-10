<template>
<!--  <h1 class="title">搜索结果</h1>-->
  <div class="search-result-page">
    <div class="search-result">
      <h1 class="title">搜索结果</h1>
      <div class="result-list">
        <div class="result-item" v-for="(item, index) in resultList" :key="index" @click="ArticleClicked(item.policyId)">
          <div class="result-title">{{ item.policyTitle }}</div>
          <div class="result-info">{{item.province + ' ' + item.policyType + ' ' +  item.pubAgency}}</div>
          <div class="result-description">创建时间 ： {{ item.pubTime }}</div>
        </div>
      </div>
      <div>
        <el-button type="primary" @click="loadMore">加载更多</el-button>
      </div>
<!--      <el-pagination-->
<!--          class="page"-->
<!--          layout="prev, pager, next, jumper"-->
<!--          small-->
<!--          :total="total"-->
<!--          :current-page="currentPage"-->
<!--          :page-sizes="[10, 20, 30, 40]"-->
<!--          :page-size="pageSize"-->
<!--          @current-change="handleCurrentChange"-->
<!--          v-model:current-page="currentPage"-->
<!--      />-->
    </div>
  </div>
</template>

<script>
import request, {success} from "@/request/request";
// import {ElMessage} from "element-plus";



export default {
  data() {
    return {
      queryText: '',
      page: 1,
      form: {
        keyword: '',
        type: '',
      },
      pageSize: 2,
      currentPage: 1,
      total: 0,
      resultList: [

      ],
    };
  },
  mounted() {
    this.$data.queryText = this.$route.query.queryText;
    // alert(this.$data.queryText);
    console.log(this.$data.queryText);
    this.$data.total = this.$data.resultList.length;
    this.$data.currentPage = 1;
    request.get('/file/query?page=0&&size=10&&keyword=' + this.$data.queryText).then((res) => {
      // let code = res.data.code;
      // console.log(res.data);
      // console.log(res.code);
      console.log(res.code == success);
      this.$data.resultList = res.data.content;
      // this.$data.total = this.$data.resultList.length;
      // if(this.$route.query.page){
      //   this.$data.currentPage = this.$route.query.page;
      // }else{
      //   this.$data.currentPage = 1;
      // }
      // if(code == success){
      //   //
      //   // code = 0;
      // }else{
      //   ElMessage.error("加载错误，请重试！");
      //   // this.$router.push('/');
      // }
    });
  },
  methods: {
    search() {
      // 根据关键词和类型进行搜索
    },
    ArticleClicked(articleId){
      this.$router.push({
        path: '/article',
        query:{
          id: articleId,
        }
      })
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    loadMore(){
      request.get('/file/query?page=' + this.page.toString() + '&&size=10&&keyword=' + this.$data.queryText).then((res) => {
        // let code = res.data.code;
        // console.log(res.data);
        // console.log(res.code);
        console.log(res.code == success);
        this.$data.resultList = [...this.$data.resultList,...res.data.content];
        this.page += 1;
        // this.$data.total = this.$data.resultList.length;
        // if(this.$route.query.page){
        //   this.$data.currentPage = this.$route.query.page;
        // }else{
        //   this.$data.currentPage = 1;
        // }
        // if(code == success){
        //   //
        //   // code = 0;
        // }else{
        //   ElMessage.error("加载错误，请重试！");
        //   // this.$router.push('/');
        // }
      });
    }
  },
};
</script>

<style scoped>
.search-result-page{
  display: flex;
  justify-content: center;
}

.search-result {
  padding-top: 2em;
  width: 60%;
  padding-bottom: 10em;
}

.title{
  padding-top: 1em;
  justify-content: center;
}

.result-list {
  margin-top: 20px;
}

.result-item {
  margin-bottom: 20px;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 5px;
}

.result-title {
  font-size: 18px;
  font-weight: bold;
}

.result-info {
  margin-top: 5px;
  font-size: 14px;
  color: #999;
}

.result-description {
  margin-top: 5px;
  font-size: 16px;
  line-height: 1.5;
  color: #666;
}

.result-item:hover{
  cursor: pointer;
}
</style>

<!--<template>-->
<!--  <h1 class = "title">搜索结果</h1>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "SearchResultPage",-->
<!--  data(){-->
<!--    return {-->
<!--      queryText: "",-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    this.$data.queryText = this.$route.query.queryText;-->
<!--    // console.log(this.$data.queryText);-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.title{-->
<!--  float: left;-->
<!--  padding-left: 10em;-->
<!--}-->
<!--</style>-->