<template>
<!--  <h1 class="title">最新政策</h1>-->
  <div class="search-result-page">
    <div class="search-result">
      <h1 class="title">最新政策</h1>
      <div class="result-list">
        <div class="result-item" v-for="(item, index) in resultList" :key="index" @click="ArticleClicked(item.policyId)">
          <div class="result-title">{{ item.policyTitle }}</div>
          <div class="result-info">{{item.province + ' ' + item.policyType + ' ' +  item.pubAgency}}</div>
          <div class="result-description">创建时间 ： {{ item.pubTime }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        keyword: '',
        type: '',
      },
      resultList: [
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
          "updateTime" : "2023-04-13"
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
          "updateTime" : "2022-10-05"
        },
        {
          "policyId" : "100432332",
          "policyTitle" : "湖南省药品监督管理局关于印发湖南省规范中药材产地趁鲜切制加工指导意见的通知",
          "policyGrade" : "省级",
          "pubAgencyId" : "3000000298",
          "pubAgency" : "省药品监督管理局",
          "pubAgencyFullName" : "湖南省药品监督管理局",
          "pubNumber" : "湘药监发〔2022〕13号",
          "pubTime" : "2022-06-07",
          "policyType" : "通知",
          "policyBody" : "请点击下面链接",
          "province" : "湖南省",
          "city" : "null",
          "policySource" : "湖南省人民政府",
          "updateTime" : "2022-10-05"
        },
        {
          "policyId" : "100432333",
          "policyTitle" : "湖南省药品监督管理局  湖南省卫生健康委员会 湖南省中医药管理局  湖南省医疗保障局关于加强中药配方颗粒生产、配送、使用管理有关事项的通知",
          "policyGrade" : "省级",
          "pubAgencyId" : "3000000298",
          "pubAgency" : "省药品监督管理局",
          "pubAgencyFullName" : "湖南省药品监督管理局",
          "pubNumber" : "湘药监发﹝2022﹞15号",
          "pubTime" : "2022-06-21",
          "policyType" : "通知",
          "policyBody" : "请点击下面链接",
          "province" : "湖南省",
          "city" : "null",
          "policySource" : "湖南省人民政府",
          "updateTime" : "2022-10-05"
        },
        {
          "policyId" : "100432334",
          "policyTitle" : "湖南省药品监督管理局关于印发湖南省药品监督管理行政处罚裁量权适用规定（试行）的通知",
          "policyGrade" : "省级",
          "pubAgencyId" : "3000000298",
          "pubAgency" : "省药品监督管理局",
          "pubAgencyFullName" : "湖南省药品监督管理局",
          "pubNumber" : "湘药监发〔2022〕18号",
          "pubTime" : "2022-08-30",
          "policyType" : "通知",
          "policyBody" : "请点击下面链接",
          "province" : "湖南省",
          "city" : "null",
          "policySource" : "湖南省人民政府",
          "updateTime" : "2022-10-05"
        },
        {
          "policyId" : "100432335",
          "policyTitle" : "湖南省药品监督管理局关于印发《湖南省第二类医疗器械应急审批程序》等3个程序文件的通知",
          "policyGrade" : "省级",
          "pubAgencyId" : "3000000298",
          "pubAgency" : "省药品监督管理局",
          "pubAgencyFullName" : "湖南省药品监督管理局",
          "pubNumber" : "湘药监发〔2022〕20号",
          "pubTime" : "2022-08-30",
          "policyType" : "通知",
          "policyBody" : "请点击下面链接",
          "province" : "湖南省",
          "city" : "null",
          "policySource" : "湖南省人民政府",
          "updateTime" : "2022-10-05"
        },
        {
          "policyId" : "100432257",
          "policyTitle" : "湖南省发展和改革委员会关于印发《湖南省景区门票定价成本监审办法》的通知",
          "policyGrade" : "省级",
          "pubAgencyId" : "3000000234",
          "pubAgency" : "省发展和改革委员会",
          "pubAgencyFullName" : "湖南省发展和改革委员会",
          "pubNumber" : "湘发改成调规〔2022〕279号",
          "pubTime" : "2022-04-29",
          "policyType" : "通知",
          "policyBody" : "null",
          "province" : "湖南省",
          "city" : "null",
          "policySource" : "湖南省人民政府",
          "updateTime" : "2022-10-01"
        },
      ],
    };
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