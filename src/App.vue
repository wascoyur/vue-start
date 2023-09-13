<script>
 import Counter from "@/Counter.vue";

 export default {
  name: "App",
  components: { Counter },
 };

</script>

<template>
 <div>
  <h1>App</h1>
  <Counter name_count="some" switch />
 </div>
</template>

<style scoped></style>