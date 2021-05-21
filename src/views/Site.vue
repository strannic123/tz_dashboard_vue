<template lang="pug">
h2 Страница Сайт
p Количество посещений страницы: {{viewCount}}

</template>

<script>
export default {
  name: "Site",
  methods: {
    changeCounter() {
      this.$store.commit('increment', {id: 'siteCounter'})
      return
    }
  },
  computed: {
    viewCount(){
      return this.$store.state.siteCounter
    },
  },
  mounted() {
    this.changeCounter()
  }
}
</script>

<style scoped>

</style>
