<template>
  <iframe id="geoPage" width=0 height=0 frameborder=0 style="display:none;" scrolling="no" src="https://apis.map.qq.com/tools/geolocation?key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77&referer=myapp"></iframe>

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
      <p class="address">
        <span><i class="el-icon-location"></i> 当前位置： {{city}} <el-checkbox class ="check" v-model="checked">优先显示当前城市的内容</el-checkbox></span>
      </p>
    </div>
  </div>


</template>

<script>
import {ElMessage} from "element-plus";
// import axios from "axios";

export default {
  name: "SearchPage",
  data() {
    return {
      searchValue: '',
      ip: '',
      country: '',
      region: '',
      city: '',
      checked: true,
    }
  },
  mounted() {
    this.Tmap();
  },
  methods: {
    clearSearch() {
      this.searchValue = '';
    },
    handleSearch() {
      // console.log('search clicked')
      // 执行搜索逻辑
      if(this.searchValue){
        if(this.checked == true){
          this.searchValue = this.city + ' ' + this.searchValue;
        }
        this.$router.push({
          path: '/result',
          query: {
            queryText: this.searchValue,
          }
        });
      }else{
        ElMessage.error("请输入要查找的内容！！！");
      }
    },
    Tmap() {
      let temp = '正在定位...';
      let vm = this;
      window.addEventListener('message', function(event) {

        let loc = event.data;
        if(loc != null){
          let opp = loc.city;
          // this.$data.city = opp;
          // console.log(opp); // 显示你当前位置
          // alert((opp));
          vm.city = opp;
          // temp = '1';
          // temp = opp;
        }
        // this.$data.city = temp;
        // temp = opp;
        // console.log(loc.city);
      }, false);
      this.city = temp;
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

.address{
  padding-top: 2em;
}

.check{
  padding-left: 1em;
}
</style>