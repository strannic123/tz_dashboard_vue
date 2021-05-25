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

    }
  },
  computed: {
    viewCount(){
      return this.$store.state.applicationsCounter
    },

  },
  mounted() {
    this.changeCounter()
    this.$toast.show(`Это страница "Заявки"`)
    setTimeout(this.$toast.clear, 3000)
  }
}
</script>

<style scoped>

</style>
