<template>
  <div>
    <p>当前数量为：{{this.$store.state.count}}</p>
    <p>{{this.$store.getters.show_getter}}</p>
    <button @click="add_btn">+1</button>
    <button @click="addN">+N</button>
    <button @click="async_add">async+1</button>
    <button @click="async_addN">async+N</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    add_btn() {
      this.$store.commit("add");
    },
    addN() {
      // commit 的作用就是调用某个 mutation 函数
      this.$store.commit("addN", 6);
    },
    async_add() {
      // dispatch 函数专门用来触发 action
      this.$store.dispatch("async_add");
    },
    async_addN() {
      this.$store.dispatch("async_addN", 4);
    }
  }
};
</script>
<style scoped>
</style>