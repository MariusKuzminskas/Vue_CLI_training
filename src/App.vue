<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{ greeting() }}</p>
    
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      title: "My first Vue File. VUUEEEEEEE"
    }
  },
  methods: {
    greeting: function() {
      return 'Hey rich man how do you feel?';
    }
  }
}
</script>

<style>

</style>
