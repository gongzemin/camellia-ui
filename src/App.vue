<script setup lang="ts">
import Table from "./table/Table";
let data = [
  { name: 1, age: 1000 },
  { name: 2, age: 20 },
];
</script>
<template>
  <Table :data />
</template>
