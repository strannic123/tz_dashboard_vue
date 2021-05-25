<template lang="pug">
.breadcrumbs
  ul
    li(v-for="(breadcrumb, idx) in breadcrumbList" :key="idx"  :class="{'linked': !!breadcrumb.link}") {{breadcrumb.name}}

</template>

<script>
export default {
  name: "Breadcrumbs",
  data(){
    return {
      breadcrumbList: []
    }
  },
  methods: {
    routeTo(pRouteTo){
      // console.log('link', this.breadcrumbList[pRouteTo].link)
      // if(this.breadcrumbList[pRouteTo].link) {
      //   return this.$router.push(this.breadcrumbList[pRouteTo].link)
      // }

    }
  },

  watch: {
    '$route' () {
      this.breadcrumbList = this.$route.meta.breadcrumb
    }
  }

}
</script>

<style lang="scss">
.breadcrumbs {
  display: flex;
  justify-content: flex-start;

  & ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;

    & li {
      display: flex;
      float: left;
      height: 10px;
      width: auto;
      color: #41B883;
      font-weight: bold;
      font-size: .8em;
      cursor: default;
      align-items: center;
    }
    & li:not(:last-child)::after {
      content: '/';
      float: right;
      font-size: .8em;
      margin: 0 .5em;
      cursor: default;
      }
    & .linked {
      cursor: pointer;
      font-weight: normal;
      color: #35363A;
    }
    }
  }

</style>
