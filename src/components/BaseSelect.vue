<script setup lang="ts">
import { coolGuid } from '@/utils';
import { computed } from 'vue';

type Props = {
  modelValue: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  id?: string;
  name?: string;
};

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  id: coolGuid(),
  name: '',
});

const emit = defineEmits(['update:modelValue']);

const modelledValue = computed({
  get: () => props.modelValue,
  set: (newVal: string) => emit('update:modelValue', newVal),
});
</script>

<template>
  <select
    :id="id"
    :name="name || id"
    v-model="modelledValue"
    class="form-control"
  >
    <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

<style lang="scss" scoped></style>
