<template>

  <div class=SearchPage>
    <div class="search">
      <h1 class="title">检索政策</h1>
      <div class = "inputBox">
        <el-input
            v-model="searchValue"
            placeholder="请输入搜索内容"
            clearable
            @clear="clearSearch"
            @keyup.enter="handleSearch"
        >
          <template v-slot:append>
            <el-button icon="el-icon-search" @click="handleSearch"></el-button>
          </template>
        </el-input>
      </div>
    </div>
  </div>


</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "SearchPage",
  data() {
    return {
      searchValue: '',
    }
  },
  mounted() {

  },
  methods: {
    clearSearch() {
      this.searchValue = '';
    },
    handleSearch() {
      // console.log('search clicked')
      // 执行搜索逻辑
      if(this.searchValue){
        this.$router.push({
          path: '/result',
          query: {
            queryText: this.searchValue,
          }
        });
      }else{
        ElMessage.error("请输入要查找的内容！！！");
      }
    }
  }
}
</script>

<style scoped>
.title{
  padding-top: 2.5em;
}

.search {
  width: 60%;
  padding-top: 4em;
}

.SearchPage {
  display: flex;
  justify-content: center;
}
.inputBox{
  padding-top: 2em;
}
</style>