<template lang="pug">
h2 О нас
p Количество посещений страницы: {{viewCount}}
</template>

<script>
export default {
  name: "About",
  methods: {
    changeCounter() {
      this.$store.commit('increment', {id: 'aboutCounter'})
    },

  },
  computed: {
    viewCount(){
      return this.$store.state.aboutCounter
    },

  },
  mounted() {
    this.changeCounter()
    this.$toast.show(`Это страница "О нас"`)
    setTimeout(this.$toast.clear, 3000)
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->
