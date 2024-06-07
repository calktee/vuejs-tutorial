<script setup>
import { ref } from 'vue';
const todoRef = ref('');
const todoListRef = ref([]);
const isEditRef = ref(false);

let editId = -1;
const ls = localStorage.todoList;
todoListRef.value = ls ? JSON.parse(ls) : [];

const addTodo = () => {
  const id = new Date().getTime();
  todoListRef.value.push({ id: id, task: todoRef.value });
  localStorage.todoList = JSON.stringify(todoListRef.value);
  todoRef.value = '';
};
const showTodo = (id) => {
  const todo = todoListRef.value.find((todo) => todo.id === id);
  todoRef.value = todo.task;
  editId = id;
};
const editTodo = () => {
  const todo = todoListRef.value.find((todo) => todo.id === editId);
  const idx = todoListRef.value.findIndex((todo) => todo.id === edhitId);
  todo.task = todoRef.value;
  todoListRef.value.splice(idx, 1, todo);
  localStorage.todoList = JSON.stringify(todoListRef.value);
  isEditRef.value = false;
  editId = -1;
  todoRef.value = '';
};
const deleteTodo = (id) => {
  const todo = todoListRef.value.find((todo) => todo.id === id);
  const idx = todoListRef.value.findIndex((todo) => todo.id === id);
  if (!confirm(`Are you sure you want to delete task "${todo.task}"?`)) return;
  todoListRef.value.splice(idx, 1);
  localStorage.todoList = JSON.stringify(todoListRef.value);
};
</script>

<template>
  <div class="box_input">
    <input
      type="text"
      class="todo_input"
      v-model="todoRef"
      placeholder="+ Input TODO"
    />
    <button class="btn green" @click="editTodo" v-if="isEditRef">Edit</button>
    <button class="btn" @click="addTodo" v-else>Add</button>
  </div>
  <div class="box_list">
    <div class="todo_list" v-for="todo in todoListRef" :key="todo.id">
      <div class="todo">
        <input type="checkbox" class="check" />
        <label>{{ todo.task }}</label>
      </div>
      <div class="btns">
        <button class="btn green" @click="showTodo(todo.id)">Edit</button>
        <button class="btn pink" @click="deleteTodo(todo.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<style>
.box_input {
  margin-top: 20px;
}

.todo_input {
  width: 300px;
  margin-right: 8px;
  padding: 8px;
  font-size: 18px;
  border: 1px solid #aaaaaa;
  border-radius: 6px;
}

.btn {
  padding: 8px;
  background-color: #03a9f4;
  border-radius: 6px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
}

.box_list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.todo_list {
  display: flex;
  align-items: center;
  gap: 8px;
}

.todo {
  border: 1px solid #cccccc;
  border-radius: 6px;
  padding: 12px;
  width: 300px;
  text-align: left;
}

.check {
  border: 1px solid red;
  transform: scale(1.6);
  margin: 0 16px 2px 6px;
}

.btns {
  display: flex;
  gap: 4px;
}

.green {
  background-color: #00c853;
}

.pink {
  background-color: #ff4081;
}
</style>
