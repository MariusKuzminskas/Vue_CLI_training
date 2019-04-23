<template>
  <div class="">
    <h1>List of ninjas</h1>
    <div>
      <ul>
          <li v-for="ninja in ninjas">{{ninja}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      ninjas: ['Yoshi', 'Mario', 'Ryu']
    }
  }
}
</script>

<style scoped>
 h1 {
    color: green;
  }
</style>
