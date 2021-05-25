<template lang="pug">
.navbar
  .container
    .navbar_row
      .logo
        img(src="../assets/icons/logo.png" @click="handleClick")
      .search
        input(type="text" placeholder="search")
      .btn_navbar
        button(class="btn_exit" @click="handleClick")
          span Выход
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    handleClick(){
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar_row{
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  background: #EBECED;
  border-radius: 6px;
  & input {
    padding-left: 30px;
    width: 250px;
    height: 30px;
    border: 1px solid #41B883;
    border-radius: 40px;
    background: url("../assets/icons/icons-search.png") no-repeat;
    background-position: 10px;
    &:active, &:hover, &:focus {
      outline: 0;
      outline-offset: 0;
    }
  }
  & .logo:hover {
    cursor: pointer;
  }
  & img{
    margin: 7px 0px 0px 4px;
    max-width: 60px;
  }
  & .btn_navbar{
    & button{
      margin-right: 5px;
      padding: 8px 17px;
      border: 1px solid #41B883;
      border-radius: 6px;
      background: #41B883;
      cursor: pointer;
      &:hover{
        -webkit-box-shadow: 0px 0px 13px -5px rgba(34, 60, 80, 0.6);
        -moz-box-shadow: 0px 0px 13px -5px rgba(34, 60, 80, 0.6);
        box-shadow: 0px 0px 13px -5px rgba(34, 60, 80, 0.6);
      }
    }
    & span {
      padding: 10px;
      color: #EBECED;
      font-size: 16px;
      font-weight: bold;
    }
  }

}

</style>
