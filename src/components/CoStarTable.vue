<script setup lang="ts">
import BaseSimpleTable from '@/components/BaseSimpleTable.vue';
import { useActorStore } from '@/store/actors';
import { computed } from 'vue';

const actorStore = useActorStore();

type Props = {
  actor1: string;
  actor2: string;
  tableData: {
    coStar: string;
    actor1Movies: string[];
    actor2Movies: string[];
  }[];
};

const props = defineProps<Props>();

const tableData = computed(() => {
  const tableHeaders = ['Name', `Starring w/ ${actorStore.actorsById[Number(props.actor1)]}`, `Starring w/ ${actorStore.actorsById[Number(props.actor2)]}`];
  const tableRows = props.tableData.map((row) => {
    return [row.coStar, row.actor1Movies.join(','), row.actor2Movies.join(',')];
  });
  return {
    tableHeaders,
    tableRows,
  };
});
</script>

<template>
  <BaseSimpleTable :tableHeaders="tableData.tableHeaders" :tableRows="tableData.tableRows" />
</template>

<style lang="scss" scoped></style>
