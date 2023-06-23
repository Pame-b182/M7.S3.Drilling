<template>
    <div class="card text-center mx-auto m-3 p-0" style="width: 18rem">
      <img :src="banda.image" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{banda.artist}}</h5>
        <p class="card-text">{{banda.album}}</p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'card-component',
    //Se reciben los states del vuex, que actúa como componente padre, para utilizarlos en card, componente hijo
    props: {
        banda: {
            type: Object,
            required: true,
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>