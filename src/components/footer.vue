<template>
  <div class="footer">
    <div class="content">
      <div class="row">
        <div class="col">
          <h3>关于我们</h3>
          <p>
            珈波波波团队是一支积极进取，精益求精的团队，由5名充满理想的在校生组成。
          </p>
        </div>
        <div class="col">
<!--          <h3>快速链接</h3>-->
<!--          <ul>-->
<!--            <li><a href="#">Link 1</a></li>-->
<!--            <li><a href="#">Link 2</a></li>-->
<!--            <li><a href="#">Link 3</a></li>-->
<!--            <li><a href="#">Link 4</a></li>-->
<!--          </ul>-->
        </div>
        <div class="col">
          <h3>联系我们</h3>
          <ul>
            <li><i class="el-icon-location"></i> 地址：浙江 杭州</li>
<!--            <li><i class="el-icon-phone"></i> 电话：123-456-7890</li>-->
<!--            <li><i class="el-icon-message"></i> 邮箱：<a href="mailto:info@example.com">info@example.com</a></li>-->
          </ul>
        </div>
      </div>
      <div class="divider"></div>
      <div class="row">
        <div class="col">
          <p>版权所有 ©2023-2024</p>
        </div>
<!--        <div class="col">-->
<!--          <p>Powered by Vue.js + Element Plus</p>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:"Footer",
  data(){

  }
}
</script>

<style scoped>
.footer {
  background-color: #f5f5f5;
  color: #777;
  padding: 50px 0;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}

.row {
  display: flex;
  justify-content: space-between;
}

.col {
  width: 30%;
}

.col h3 {
  font-weight: bold;
  font-size: 18px;
}

.col ul {
  list-style-type: none;
  padding: 0;
}

.col ul li {
  margin-bottom: 10px;
}

.col ul li a {
  color: #777;
  text-decoration: none;
}

.col ul li a:hover {
  color: #409EFF;
}

.col ul li i {
  margin-right: 10px;
  color: #409EFF;
}

.divider {
  border-top: 1px solid #ddd;
  margin: 20px 0;
}

@media (max-width: 992px) {
  .row {
    flex-direction: column;
  }

  .col {
    width: 100%;
    margin-bottom: 30px;
  }

  .col:last-child {
    margin-bottom: 0;
  }
}
</style>
