<template>
  <footer>
    <p>{{copyright}} </p>
  </footer>
</template>

<script>


export default {
  data () {
    return {
      copyright: "Visos teises saugomos 2019 &copy"
    }
  }
}
</script>

<style scoped>
  footer{
    background-color: #222;
    padding: 6px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }
</style>
