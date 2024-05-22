<script setup lang="ts">
import Table from "./table/Table";
const dataSource = [
  {
    key: "1",
    name: "曹雪芹",
    age: 32,
    address: "北京西郊",
  },
  {
    key: "2",
    name: "莫言",
    age: 42,
    address: "山东",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];
</script>
<template>
  <Table :dataSource :columns />
</template>
