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

    }
  },
  computed: {
    viewCount(){
      return this.$store.state.siteCounter
    },
  },
  mounted() {
    this.changeCounter()
    this.$toast.show(`Это страница "Сайт"`)
    setTimeout(this.$toast.clear, 3000)
  }
}
</script>

<style scoped>

</style>
