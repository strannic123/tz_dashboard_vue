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

    }
  },
  computed: {
    viewCount(){
      return this.$store.state.settingsCounter
    },

  },
  mounted() {
    this.changeCounter()
    this.$toast.show(`Это страница "Настройки"`)
    setTimeout(this.$toast.clear, 3000)
  }
}
</script>

<style scoped>

</style>
