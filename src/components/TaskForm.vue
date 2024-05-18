<template>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="name" placeholder="New task" />
      <button type="submit">Add Task</button>
    </form>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    emits: ['addTask'],
    setup(_, { emit }) {
      const name = ref('');
  
      const onSubmit = () => {
        if (name.value.trim()) {
          emit('addTask', { id: Date.now(), name: name.value, completed: false });
          name.value = '';
        }
      };
  
      return { name, onSubmit };
    }
  });
  </script>
  