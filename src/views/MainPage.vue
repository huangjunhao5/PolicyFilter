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
            <div class="About">发布时间 ： {{policy.pubTime}} </div>
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
            <div class="About">发布时间 ： {{policy.pubTime}} <i class="el-icon-view hot"></i>热度： {{policy.hot}}</div>
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
          "updateTime": "2022-06-20",
          'hot': '10.3万'
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
          "updateTime": "2022-06-20",
          'hot': '12.3万'
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
          "updateTime": "2022-06-20",
          'hot': '20.4万'
        },
      ],
      latestPolicies: [
        {
          "_class" : "com.policybackend.backend.entity.Files",
          "policyId" : "100295618",
          "policyTitle" : "关于永东等同志任免（聘任）职务的通知",
          "policyGrade" : "省级",
          "pubAgencyId" : "3000000289",
          "pubAgency" : "自治区文化和旅游厅",
          "pubAgencyFullName" : "内蒙古自治区文化和旅游厅",
          "pubNumber" : "内文旅党字 〔2021〕40号",
          "pubTime" : "2021-04-26",
          "policyType" : "通知",
          "policyBody" : "自治区文物局，厅机关各处室、厅属各单位：根据工作需要，经自治区文化和旅游厅党组2021年3月22日会议研究决定，并报请自治区人力资源和社会保障厅备案（内人社函〔2021〕6.21号）：田永东同志任内蒙古艺术剧院办公室主任，免去内蒙古民族艺术剧院综合办公室主任职务；董海珍同志任内蒙古艺术剧院党委办公室主任，免去内蒙古民族艺术剧院乌兰恰特管理中心（演出中心）书记职务；聘任邢力莉同志为内蒙古艺术剧院人事处处长，解除内蒙古民族艺术剧院人事处处长聘任职务；黄斯钦毕勒格同志任内蒙古艺术剧院创作研究中心主任，免去内蒙古民族艺术剧院创作中心主任职务；郑睿达同志任内蒙古艺术剧院产业管理处处长，免去内蒙古民族艺术剧院乌兰恰特管理中心（演出中心）主任职务；聘任乌兰牧骑勒同志为内蒙古艺术剧院歌舞团团长，解除内蒙古民族艺术剧院乌力格尔蒙古剧团团长聘任职务；聘任塔纳同志为内蒙古艺术剧院杂技团团长，解除内蒙古民族艺术剧院杂技团团长聘任职务；叶尔达同志任内蒙古艺术剧院民族乐团团长，免去内蒙古民族艺术剧院民乐团团长职务；顾树荣同志任内蒙古艺术剧院合唱团团长，免去内蒙古民族艺术剧院歌舞团团长职务；高艳同志任内蒙古艺术剧院话剧团团长，免去内蒙古民族艺术剧院创作中心书记职务；聘任韩春庆同志为内蒙古艺术剧院办公室副主任，解除内蒙古民族艺术剧院综合办公室副主任聘任职务；聘任张惠娟同志为内蒙古艺术剧院纪检室副主任，解除内蒙古民族艺术剧院计划财务处副处长聘任职务；张莹同志任内蒙古艺术剧院人事处副处长，免去内蒙古民族艺术剧院人事处副处长职务；聘任王军同志为内蒙古艺术剧院人事处副处长，解除内蒙古民族艺术剧院二人台艺术团副团长聘任职务；聘任周向光同志为内蒙古艺术剧院计划财务处副处长，解除内蒙古民族艺术剧院计划财务处副处长聘任职务；王永喜同志任内蒙古艺术剧院研究室副主任，免去内蒙古民族艺术剧院综合办公室副主任职务；吉日木图同志任内蒙古艺术剧院创作研究中心副主任，免去内蒙古民族艺术剧院创作中心副主任职务；聘任李永忠同志为内蒙古艺术剧院演出管理中心副主任，解除内蒙古民族艺术剧院乌兰恰特管理中心（演出中心）副主任聘任职务；梁斌同志任内蒙古艺术剧院演出管理中心副主任，免去内蒙古民族艺术剧院创作中心副主任职务；好斯巴雅尔同志任内蒙古艺术剧院宣传交流处副处长，免去内蒙古民族艺术剧院蒙古族青年合唱团副团长职务；满都拉同志任内蒙古艺术剧院产业管理处副处长，免去内蒙古民族艺术剧院综合办公室副主任职务；朱虹同志任内蒙古艺术剧院歌舞团副团长，免去内蒙古民族艺术剧院歌舞团副团长职务；王秀玲同志任内蒙古艺术剧院蒙古剧艺术团副团长，免去内蒙古民族艺术剧院蒙古族青年合唱团副团长职务；图雅同志任内蒙古艺术剧院民族曲艺团副团长，免去内蒙古民族艺术剧院乌兰恰特管理中心（演出中心）副主任职务；宝力道同志任内蒙古艺术剧院二人台艺术团副团长，免去内蒙古民族艺术剧院人事处副处长职务；聘任吴群同志为内蒙古艺术剧院杂技团副团长，解除内蒙古民族艺术剧院杂技团副团长聘任职务；孙润平同志任内蒙古艺术剧院京剧团副团长，免去内蒙古民族艺术剧院直属乌兰牧骑副团长职务；聘任李继春同志为内蒙古艺术剧院京剧团副团长，解除内蒙古民族艺术剧院京剧团副团长聘任职务；聘任贺丹彦同志为内蒙古艺术剧院民族乐团副团长，解除内蒙古民族艺术剧院民乐团副团长聘任职务；杜敏同志任内蒙古艺术剧院交响乐团副团长，免去内蒙古民族艺术剧院交响乐团副团长职务；聘任云良海同志为内蒙古艺术剧院离退休人员工作处副处长，解除内蒙古民族艺术剧院乌兰恰特管理中心（演出中心）副主任聘任职务；聘任乌兰托娅同志为内蒙古博物院社会教育部主任，解除内蒙古博物院保管研究部主任聘任职务；聘任张慧媛同志为内蒙古博物院文物保护部主任，解除内蒙古博物院展览陈列部主任聘任职务；郎新伟任内蒙古博物院财务处副处长，免去内蒙古博物院综合办公室副主任职务；郑承燕同志任内蒙古博物院典藏部副主任，免去内蒙古博物院文物保管研究部副主任职务；聘任丁勇同志为内蒙古博物院文物鉴定与资料部副主任，解除内蒙古博物院安全保卫部副主任聘任职务；呼格吉勒图同志任内蒙古自治区直属乌兰牧骑副团长，免去内蒙古民族艺术剧院直属乌兰牧骑副团长职务；白岚同志任内蒙古自治区直属乌兰牧骑副团长，免去内蒙古民族艺术剧院乌力格尔蒙古剧团副团长职务；免去孟祥洪同志内蒙古民族艺术剧院京剧团团长职务；免去哈斯敖登同志内蒙古民族艺术剧院歌舞团副团长职务。此通知。          中共内蒙古自治区文化和旅游厅党组                  2021年4月23日",
          "province" : "内蒙古自治区",
          "city" : "null",
          "policySource" : "内蒙古自治区文化和旅游厅",
          "updateTime" : "2023-04-13",
        },
        {
          "_class" : "com.policybackend.backend.entity.Files",
          "policyId" : "987987",
          "policyTitle" : "安徽省人民政府办公厅关于做好疫情防控期 间返程、复工、返校人员管理工作的通知",
          "policyGrade" : "省级",
          "pubAgencyId" : "3000000266",
          "pubAgency" : "安徽省人民政府办公厅",
          "pubAgencyFullName" : "安徽省人民政府",
          "pubNumber" : "皖政办明电〔2020〕5号",
          "pubTime" : "2023-04-12",
          "policyType" : "通知",
          "policyBody" : "",
          "province" : "安徽省",
          "updateTime" : "2023-04-12"
        },
        {
          "policyId" : "100432331",
          "policyTitle" : "关于印发《湖南省智慧广电乡村工程建设实施方案》的通知",
          "policyGrade" : "省级",
          "pubAgencyId" : "3000000241",
          "pubAgency" : "省广播电视局",
          "pubAgencyFullName" : "湖南省广播电视局",
          "pubNumber" : "湘广电发〔2022〕63号",
          "pubTime" : "2022-08-30",
          "policyType" : "通知",
          "policyBody" : "请点击下面链接",
          "province" : "湖南省",
          "city" : "null",
          "policySource" : "湖南省人民政府",
          "updateTime" : "2022-10-05",
          'hot': '20.2万'
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

.hot{
  padding-left: 1em;
}
</style>
