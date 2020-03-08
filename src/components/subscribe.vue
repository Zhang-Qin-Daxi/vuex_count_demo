<template>
  <div>
    <p>当前数量为：{{count}}</p>
    <p>{{show_getter}}</p>
    <button @click="subscribe">-1</button>
    <button @click="subN(6)">-N</button>
    <button @click="async_sub">async-1</button>
    <button @click="async_subscribeN">async-N</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["show_getter"])
  },
  methods: {
    ...mapMutations(["sub", "subN"]),
    subscribe() {
      this.sub();
    },
    // subscribeN() {
    //   this.subN(6);
    // },
    ...mapActions(["async_sub", "async_subN"]),
    // async_subscribe(){
    //     this.async_sub()
    // },
    async_subscribeN() {
      this.async_subN(5);
    }
  }
};
</script>
<style scoped>
</style>