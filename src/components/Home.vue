<template lang="pug">
.content
  h2 Главная
  .container
    .content_row
      router-view

</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="scss" scoped>
.content_row{
  border-radius: 6px;
}

</style>
