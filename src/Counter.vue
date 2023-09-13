<script>
 export default {
  name: "Counter",
  props: {
   name_count: { default: "", type: String },
   switch: { type: Boolean, default: false },
  },data:function() {
   return ["10 party clones", "45 prob clones", "7 partial  circles"];
  }
 };

</script>

<template>
 <div class="counter">
  counter here
  {{ name_count }}
  <pre>Директива v-html: </pre>

  <div v-for="item in $data " :key="item" class="list">
   {{ item }}
  </div>
  <button :disabled="false">
   off
  </button>
 </div>
</template>

<style scoped>
.counter {
  border: 1px solid beige;
  padding: 1rem;
}
.list {
  background-color: azure;
}
pre {
  color: aqua;
}
button{
  margin: 1rem;
}
</style>