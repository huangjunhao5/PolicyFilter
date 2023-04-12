<template>
  <div class="about">
    <h2 class="title">关于我们</h2>
    <p class="description">
      珈波波波团队是一支积极进取，精益求精的团队，由5名充满理想的在校生组成。
      团队成员基础知识扎实，熟练掌握多种语言与框架。
      珈波波波科技团队对软件的开发遵循软件工程设计方法和行业规范，能够为用户提供优质可靠的软件和技术支持。
      团队设置了项目管理组，技术组和户组，各设有经理一名。三个小组责任明晰，项目经理负责各个小组之间的协调，每个组长负责各自的部分。
    </p>
<!--    <div class="team">-->
<!--      <div class="team-member">-->
<!--&lt;!&ndash;        <img src="path/to/member1.png" alt="Team Member 1">&ndash;&gt;-->
<!--        <h3>John Doe</h3>-->
<!--&lt;!&ndash;        <p class="position">CEO</p>&ndash;&gt;-->
<!--        <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>-->
<!--        <div class="social-links">-->
<!--          <a href="#"><i class="el-icon-linkedin"></i></a>-->
<!--          <a href="#"><i class="el-icon-twitter"></i></a>-->
<!--          <a href="#"><i class="el-icon-facebook"></i></a>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="team-member">-->
<!--&lt;!&ndash;        <img src="path/to/member2.png" alt="Team Member 2">&ndash;&gt;-->
<!--        <h3>Jane Smith</h3>-->
<!--&lt;!&ndash;        <p class="position">CTO</p>&ndash;&gt;-->
<!--        <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>-->
<!--        <div class="social-links">-->
<!--          <a href="#"><i class="el-icon-linkedin"></i></a>-->
<!--          <a href="#"><i class="el-icon-twitter"></i></a>-->
<!--          <a href="#"><i class="el-icon-facebook"></i></a>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="team-member">-->
<!--&lt;!&ndash;        <img src="path/to/member3.png" alt="Team Member 3">&ndash;&gt;-->
<!--        <h3>Tom Lee</h3>-->
<!--&lt;!&ndash;        <p class="position">CFO</p>&ndash;&gt;-->
<!--        <p class="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>-->
<!--        <div class="social-links">-->
<!--          <a href="#"><i class="el-icon-linkedin"></i></a>-->
<!--          <a href="#"><i class="el-icon-twitter"></i></a>-->
<!--          <a href="#"><i class="el-icon-facebook"></i></a>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  text-align: center;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}

.description {
  font-size: 18px;
  margin-bottom: 40px;
  max-width: 52em;
}

.team {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.team-member {
  margin: 20px;
  max-width: 300px;
}

.team-member img {
  width: 100%;
  margin-bottom: 20px;
}

.team-member h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.team-member .position {
  font-size: 18px;
  margin-bottom: 20px;
}

.team-member .bio {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.social-links a {

}
</style>



