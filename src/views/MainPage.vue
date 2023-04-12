<template>
  <div class="home">
    <div class="banner">
      <img src="@/assets/logo.png" alt="banner">
    </div>
    <div class="content">
      <div class="latest-policies">
        <h3>最新政策</h3>
        <ul>
          <li class="policyLi" v-for="(policy, index) in latestPolicies" :key="index" @click="ArticleClicked(policy.policyId)">
            <h4 class="PolicyTitle">{{ policy.policyTitle }}</h4>
            <div class="About">发布时间 ： {{policy.pubTime}}</div>
          </li>
        </ul>
        <div class="more" @click="moreNewPageClicked">查看更多</div>
      </div>
      <div class="space"></div>
      <div class="hot-policies">
        <h3>热门政策</h3>
        <ul>
          <li class="policyLi" v-for="(policy, index) in hotPolicies" :key="index" @click="ArticleClicked(policy.policyId)">
            <h4 class="PolicyTitle">{{ policy.policyTitle }}</h4>
            <div class="About">发布时间 ： {{policy.pubTime}}</div>
          </li>
        </ul>
        <div class="more" @click="moreHotPageClicked">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
// import request from "@/request/request";

export default {
  data() {
    return {
      hotPolicies:[
        {
          policyId: "100103603",
          "policyTitle": "安徽省人民政府办公厅关于新时代 支持大别山革命老区振兴发展的实施意见",
          "policyGrade": "省级",
          "pubAgencyId": "3000000266",
          "pubAgency": "安徽省人民政府办公厅",
          "pubAgencyFullName": "安徽省人民政府",
          "pubNumber": "皖政办秘〔2021〕78号",
          "pubTime": "2021-09-26",
          "policyType": "意见",
          "province": "安徽省",
          "city": "null",
          "policySource": "null",
          "updateTime": "2022-06-20"
        },
        {
          policyId: "100103579",
          "policyTitle": "安徽省人民政府办公厅关于2020年度全省 政务公开、政府网站暨政务微博微信、 政务信息工作考核考评结果的通报",
          "policyGrade": "省级",
          "pubAgencyId": "3000000266",
          "pubAgency": "安徽省人民政府办公厅",
          "pubAgencyFullName": "安徽省人民政府",
          "pubNumber": "皖政办秘〔2021〕59号",
          "pubTime": "2021-06-01",
          "policyType": "通报",
          "province": "安徽省",
          "city": "null",
          "policySource": "null",
          "updateTime": "2022-06-20"
        },
        {
          policyId: "100066836",
          "policyTitle": "安徽省人民政府办公厅关于印发打好 城市黑臭水体治理标志性战役 实施方案的通知",
          "policyGrade": "省级",
          "pubAgencyId": "3000000266",
          "pubAgency": "安徽省人民政府办公厅",
          "pubAgencyFullName": "安徽省人民政府",
          "pubNumber": "皖政办秘〔2018〕270号",
          "pubTime": "2018-11-20",
          "policyType": "通知",
          "province": "安徽省",
          "city": "null",
          "policySource": "null",
          "updateTime": "2022-06-20"
        },
      ],
      latestPolicies: [
        {
          policyId: "100066815",
          "policyTitle": "安徽省人民政府办公厅关于加强 长江（安徽）水生生物保护工作的实施意见",
          "policyGrade": "省级",
          "pubAgencyId": "3000000266",
          "pubAgency": "安徽省人民政府办公厅",
          "pubAgencyFullName": "安徽省人民政府",
          "pubNumber": "皖政办〔2018〕60号",
          "pubTime": "2019-01-11",
          "policyType": "意见",
          "province": "安徽省",
          "city": "null",
          "policySource": "null",
          "updateTime": "2022-06-20"
        },
        {
          policyId: "100068247",
          "policyTitle": "安徽省人民政府办公厅关于做好疫情防控期 间返程、复工、返校人员管理工作的通知",
          "policyGrade": "省级",
          "pubAgencyId": "3000000266",
          "pubAgency": "安徽省人民政府办公厅",
          "pubAgencyFullName": "安徽省人民政府",
          "pubNumber": "皖政办明电〔2020〕5号",
          "pubTime": "2020-02-09",
          "policyType": "通知",
          "province": "安徽省",
          "city": "null",
          "policySource": "null",
          "updateTime": "2022-06-20"
        },
        {
          policyId: "100103553",
          "policyTitle": "安徽省人民政府办公厅关于推进 人工影响天气工作高质量发展的实施意见",
          "policyGrade": "省级",
          "pubAgencyId": "3000000266",
          "pubAgency": "安徽省人民政府办公厅",
          "pubAgencyFullName": "安徽省人民政府",
          "pubNumber": "皖政办秘〔2021〕19号",
          "pubTime": "2021-03-14",
          "policyType": "意见",
          "province": "安徽省",
          "city": "null",
          "policySource": "null",
          "updateTime": "2022-06-20"
        },
      ],

    };
  },
  mounted() {
    this.fetchLatestPolicies();
    this.fetchHotPolicies();
  },
  methods: {
    fetchLatestPolicies() {
      // 发起最新政策的请求
      // 将返回的数据赋值给 latestPolicies

    },
    fetchHotPolicies() {
      // 发起热门政策的请求
      // 将返回的数据赋值给 hotPolicies
    },
    moreNewPageClicked(){
      this.$router.push({
        path: '/new',
      })
    },
    moreHotPageClicked(){
      this.$router.push({
        path: '/hot',
      })
    },
    ArticleClicked(articleId){
      console.log(articleId);
      this.$router.push({
        path: '/article',
        query:{
          id: articleId,
        }
      })
    },
  }
};
</script>

<style scoped>
.home {
  /*max-width: 1200px;*/
  /*margin: 0 auto;*/
  /*padding-top: -6em;*/
  padding-bottom: 6em;
}

.banner {
  width: 100%;
  /*height: 300px;*/
  overflow: hidden;
  /*margin: -1em auto;*/
}

.banner img {
  width: 100%;
  height: auto;
  object-fit: cover;
  /*box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.5);*/
  /*border-radius: 20px;*/
}

.content {
  display: flex;
  justify-content: space-between;
  /*margin-top: 4%;*/
  padding-top: 5%;
  padding-left: 4em;
  padding-right: 4em;
}

.latest-policies,
.hot-policies {
  width: 48%;
  padding: 2em;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.policyLi{
  /*margin-bottom: 20px;*/
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 5px;
}

.PolicyTitle{
  font-size: 18px;
}

.About{
  color: #777777;
}

h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 10px;
  font-size: 16px;
}
.space{
  width: 8%;
}

.more{
  color: #777777;
  padding-top: 1em;
}

.more:hover , .policyLi:hover{
  cursor: pointer;
}
</style>
