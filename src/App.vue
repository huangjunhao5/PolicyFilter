<template>
  <MainNav id="nav"/>
  <div class="route">
    <router-view/>
  </div>
  <Footer/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainNav from "@/components/MainNav.vue";
import Footer from "@/components/footer.vue";

export default {
  name: 'App',
  components: {
    MainNav,
    // eslint-disable-next-line vue/no-unused-components
    Footer,
  },
  mounted() {
    document.title = 'Policy Filter';
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
#nav{
  position: fixed;
  top: 0;
  width: 100%;
  height: 4em;
  z-index: 1000; /* 设置一个较高的z-index，以确保导航栏不被其它元素遮盖 */
  /*margin: 0 -1em;*/
}
.route{
  padding-top: 4em;
  min-height: 30em;
}
</style>
