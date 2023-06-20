<template>
  <div class="container m-3">
    <div class="row">
        <h1 class="text-center"><i class="fa-solid fa-headphones"></i> Pop</h1>
    <div v-for="banda in pop" :key="banda.id" class="card text-center mx-auto m-3 p-0" style="width: 18rem">
      <img :src="banda.image" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{banda.artist}}</h5>
        <p class="card-text">{{banda.album}}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
export default {
  name: "pop-view",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["pop"]),
  },
  //methods: {}
  // watch: {},
  //components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>