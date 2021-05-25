<template lang="pug">
.content
  h2 Главная
  p счетчик посещений: {{viewCount}}
  .container
    .content_row
      router-view

</template>

<script>


export default {
  name: "Home",
  methods: {
    changeCounter() {
      this.$store.commit('increment', {id: 'homeCounter'})
    },
  },
  computed: {
    viewCount(){
      return this.$store.state.homeCounter
    },

  },
  mounted() {
    this.changeCounter()
    this.$toast.show(`Это "Главная" страница`)
    setTimeout(this.$toast.clear, 3000)
  }


}
</script>

<style lang="scss" scoped>
.content_row{
  border-radius: 6px;
}

</style>
