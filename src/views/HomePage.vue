<template>
  <div class="home">
    <header>
      <h1>Task Management System</h1>
    </header>
    <main>
      <div class="container">
        <task-list />
      </div>
    </main>
  </div>
</template>

<script>
import TaskList from '@/components/TaskList.vue';

export default {
  components: {
    TaskList
  }
};
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.task-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
}

.add-task-btn {
  display: block;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
}

.add-task-btn:hover {
  background-color: #0056b3;
}
</style>
