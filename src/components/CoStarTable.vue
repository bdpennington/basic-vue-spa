<script setup lang="ts">
import { useActorStore } from '@/store/actors';

const actorStore = useActorStore();

type Props = {
  actor1: string;
  actor2: string;
  tableData: {
    Name: string;
    Actor1Movies: string[];
    Actor2Movies: string[];
  }[];
};

defineProps<Props>();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Starring w/ {{ actorStore.actorsById[Number(actor1)] }}</th>
        <th>Starring w/ {{ actorStore.actorsById[Number(actor2)] }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in tableData" :key="row.Name">
        <td>{{ row.Name }}</td>
        <td>
          <ul>
            <li v-for="movie in row.Actor1Movies" :key="movie">
              {{ movie }}
            </li>
          </ul>
        </td>
        <td>
          <ul>
            <li v-for="movie in row.Actor2Movies" :key="movie">
              {{ movie }}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped></style>
