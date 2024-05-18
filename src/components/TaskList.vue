<template>
    <div class="container">
        <div class="row mb-3">
          <div class="col-md-6">
            <input type="text" v-model="searchQuery" placeholder="Search tasks" class="form-control" />
          </div>
        </div>
        <div class="list-group">
            <div v-if="filteredTasks.length === 0" class="list-group-item text-center">No tasks found.</div>
            <TaskItem
                v-for="task in filteredTasks"
                :key="task.id"
                :task="task"
                @deleteTask="deleteTask"
                @updateTask="updateTask"
            />
            <TaskForm @addTask="addTask" />
          </div>
    <!-- <div>
      <input type="text" v-model="searchQuery" placeholder="Search tasks" />
      <ul>
        <TaskItem
          v-for="task in filteredTasks"
          :key="task.id"
          :task="task"
          @deleteTask="deleteTask"
          @updateTask="updateTask"
        />
      </ul>
      <TaskForm @addTask="addTask" />
    </div> -->
</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import TaskItem from './TaskItem.vue';
  import TaskForm from './TaskForm.vue';
  
  export default defineComponent({
    components: { TaskItem, TaskForm },
    setup() {
      const tasks = ref<Array<{ id: number; name: string; completed: boolean }>>([]);
      const searchQuery = ref('');
  
      const filteredTasks = computed(() =>
        tasks.value.filter(task =>
          task.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      );
  
      const addTask = (task: { id: number; name: string; completed: boolean }) => {
        tasks.value.push(task);
      };
  
      const deleteTask = (id: number) => {
        tasks.value = tasks.value.filter(task => task.id !== id);
      };
  
      const updateTask = (updatedTask: { id: number; name: string; completed: boolean }) => {
        const index = tasks.value.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
          tasks.value[index] = updatedTask;
        }
      };
  
      return { tasks, searchQuery, filteredTasks, addTask, deleteTask, updateTask };
    }
  });
  </script>
  