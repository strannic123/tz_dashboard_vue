<template lang="pug">
.home
  .container
    .home_row
      .home__navbar
        Navbar
      .home__menu-content
        .home__left-menu
          component(:is="dynamicMenu? 'LeftMenu' : 'LayoutSettingsLeftMenu'")
        .home__content
          router-view

</template>

<script>
import LeftMenu from "../components/LeftMenu";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import LayoutSettingsLeftMenu from "../layout/LayoutSettingsLeftMenu";



export default {
  name: 'NavSite',
  components: {
    LeftMenu,
    Navbar,
    Home,
    LayoutSettingsLeftMenu

  },
  computed: {
    dynamicMenu(){
      console.log(this.$route.path)
      return this.$route.path !== '/settings';
    }
  }
}
</script>

<style lang="scss">
.home__menu-content{
  display: flex;

  & .home__left-menu{
    justify-content: center;
    flex: 0 1 200px;
    background: #313A46;
    color: #E7E8E9;
    border-radius: 6px;
    height: calc(100vh - 121px);
  }
  & .home__content{
    flex: 1 1 auto;
    margin-left: 10px;
    background: #E6E8EB;
    border-radius: 6px;

  }
}
h1 {
  color: green;
}
</style>
