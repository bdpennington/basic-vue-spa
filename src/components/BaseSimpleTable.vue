<script setup lang="ts" generic="THeaders extends string[], TRows extends string[][]">
type THeaders = string[];
type TRows = string[][];

defineProps<{
  tableHeaders: THeaders;
  tableRows: TRows;
}>()
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, idx) in tableHeaders" :key="idx">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rId) in tableRows" :key="rId">
        <td v-for="(cell, cId) in row" :key="cId">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped></style>
