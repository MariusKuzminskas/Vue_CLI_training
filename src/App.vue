<template>
  <div class="">
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>This is some subdescription</p>
      </div>
      <div slot="form-fields">
        <input type="text" name="name" id="">
        <input type="password" name="" id="">
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue';


export default {
  components: {
    // Tag name :  Import name
    'form-helper': formHelper,
    
  },
  data () {
    return {
      title: "I am dynamic slot title"
    }
  },
  methods:{
    handleSubmit: function(){
      
    }
  }
}
</script>

<style >
  
</style>
