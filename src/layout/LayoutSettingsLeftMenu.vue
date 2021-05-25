<template lang="pug">
.left_menu
  .container
    .left_menu_row
      h3 Меню настроек

      .admin Администратор
      p(v-for="user in listAdmin") {{user.name}}

      .moderator Модератор
      p(v-for="user in listModerator") {{user.name}}

      .user Пользователи
      p(v-for="user in listModerator") {{user.name}}



</template>

<script>
import {store} from '../store/index'


export default {
  name: "LayoutSettingsLeftMenu",
  setup(){
    const users = store.state.users




    return {
      users
    }
  },
  computed: {
    listAdmin(){
      console.log(this.users)
      return this.users.filter(user => user.typeUser === 'Администратор')
    },
    listModerator(){
      console.log(this.users)
      return this.users.filter(user => user.typeUser === 'Модератор')
    },
    listUser(){
      console.log(this.users)
      return this.users.filter(user => user.typeUser === 'Пользователь')
    }
  }
}
</script>

<style lang="scss" scoped>
.left_menu_row{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;


  & h3{
    text-align: center;
  }

  & .admin, .moderator, .user{
    padding-left: 15px;
    text-decoration: underline;
  }

  & p{
    padding-left: 35px;
  }

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
