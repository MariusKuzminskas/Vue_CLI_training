<template>
  <div class="">
    <app-header></app-header>
    <ninjas></ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';

export default {
  components: {
    // Tag name :  Import name
    'app-header': Header,
    'app-footer': Footer,
    'ninjas': Ninjas
  },
  data () {
    return {
      
    }
  }
}
</script>

<style >
  
</style>
