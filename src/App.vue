<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'app',
  // props: {},
  data: function(){
    return {}
  },
  // computed: {},
  //methods: {}
  // watch: {},
  components: {
    Navbar,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>
<style>

</style>
