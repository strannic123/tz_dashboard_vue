<template lang="pug">
h2 Настройки
p Количество посещений страницы: {{viewCount}}
</template>

<script>
export default {
  name: "Settings",
  methods: {
    changeCounter() {
      this.$store.commit('increment', {id: 'settingsCounter'})
      return
    }
  },
  computed: {
    viewCount(){
      return this.$store.state.settingsCounter
    },

  },
  mounted() {
    this.changeCounter()
  }
}
</script>

<style scoped>

</style>
