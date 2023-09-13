<script>
 import Counter from "@/Counter.vue";

 export default {
  name: "App",
  components: { Counter },
 };
</script>

<template>
 <div>
  child
  <Counter name="some" />
 </div>
</template>

<style scoped></style>