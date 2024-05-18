<template>
    <!-- <li>
      <span>{{ task.name }}</span>
      <button @click="deleteTask">Delete</button>
      <button @click="toggleComplete">{{ task.completed ? 'Undo' : 'Complete' }}</button>
    </li> -->
    <div class="list-group-item d-flex justify-content-between align-items-center">
        <span>{{ task.name }}</span>
        <div>
          <button @click="completeTask(task)" class="btn btn-sm btn-outline-success">{{ task.completed ? 'Undo' : 'Complete' }}</button>
          <button @click="deleteTask(task.id)" class="btn btn-sm btn-outline-danger">Delete</button>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    props: {
      task: {
        type: Object as PropType<{ id: number; name: string; completed: boolean }>,
        required: true
      }
    },
    emits: ['deleteTask', 'updateTask'],
    methods: {
      deleteTask() {
        this.$emit('deleteTask', this.task.id);
      },
      toggleComplete() {
        this.$emit('updateTask', { ...this.task, completed: !this.task.completed });
      }
    }
  });
  </script>
  