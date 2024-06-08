<script setup>
const props = defineProps({ color: String });
const emits = defineEmits(['on-click']);
const onClick = () => {
  emits('on-click');
};
</script>

<template>
  <button class="btn" :class="props.color" @click="onClick">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 8px;
  border-radius: 6px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
}

.green {
  background-color: #00c853;
}
.blue {
  background-color: #03a9f4;
}
.pink {
  background-color: #ff4081;
}
</style>
