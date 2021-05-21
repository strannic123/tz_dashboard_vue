<template lang="pug">
h2 Заявки
p Количество посещений страницы: {{viewCount}}

</template>

<script>
export default {
  name: "Applications",
  methods: {
    changeCounter() {
      this.$store.commit('increment', {id: 'applicationsCounter'})
      return
    }
  },
  computed: {
    viewCount(){
      return this.$store.state.applicationsCounter
    },

  },
  mounted() {
    this.changeCounter()
  }
}
</script>

<style scoped>

</style>
