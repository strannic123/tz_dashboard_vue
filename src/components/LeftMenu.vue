<template lang="pug">
.left_menu
  .container
    .left_menu_row
      router-link(to="/").home Главная
      router-link(to="/site").site Сайт
      router-link(to="/applications").applications Заявки
      router-link(to="/about").about О нас
      router-link(to="/settings").settings Настройки


</template>

<script>
export default {
  name: "LeftMenu",

}
</script>

<style lang="scss" scoped>
.left_menu_row{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  & a{
    margin: 10px 0 10px 10px;
    text-decoration: none;
    color: #E7E8E9;
  }
  & .home{
    //background: url("../assets/icons/icons8-home-24.png") no-repeat left;
  }


}

</style>
