<script>
 export default {
  name: "Inbox",

  data: function () {
   return {
    array: ["10 party clones", "45 prob clones", "7 partial  circles"],
    newItem: "",
   };
  },
  methods: {
   addItem: function (data) {
    if (data !== "") {
     this.$data.array.push(data);
     this.newItem = '';
    }
    return undefined;
   },
  },
 };
</script>

<template>
 <div class="wrapper">
  <div v-if="array.length>4" class="jumbo">
   Nice work! You are wine!
  </div>
  <div v-if="array.length < 5" class="card">
   <h1>Input</h1>
   <input
    v-model="newItem"
    type="text"
    value="newItem"
    @keyup.enter="addItem($data.newItem)"
   >
   <pre v-for="item in $data.array" :key="item" class="item">{{ item }}</pre>
   <button @click="addItem($data.newItem)">
    add item
   </button>
  </div>
 </div>
</template>

<style scoped>
.card {
  border: 2px solid beige;
  border-radius: 0.5rem;
  margin: 0.5rem;
  padding: 1rem;

  .item {
    max-width: 15rem;
    border: 1px solid blueviolet;
    border-radius: 0.25rem;
    padding: 0.25rem;
  }
}
</style>