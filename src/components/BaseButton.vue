<script setup lang="ts">
withDefaults(
  defineProps<{ type?: string; variant?: 'primary' | 'secondary' }>(),
  {
    variant: 'primary',
    type: 'button',
  }
);
</script>

<template>
  <button :class="['base-button', variant]">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  display: inline-block;
  padding: 0 20px;
  color: var(--text-1);
  font-weight: var(--font-weight-6);
  line-height: 38px;
  font-size: var(--font-size-1);
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: var(--radius-4);
  cursor: pointer;

  &.primary {
    background-color: var(--green-dark);
    color: var(--text-1);
    border-color: var(--brand-lighter);
  }

  &.secondary {
    background-color: var(--white);
    color: var(--text-light-1);
    border-color: var(--border);
  }
}
</style>
