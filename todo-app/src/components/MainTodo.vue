<script setup>
import { ref } from 'vue';
import { useTodoList } from '../composables/useTodoList';
const todoRef = ref('');
const isEditRef = ref(false);
const { todoListRef, add, show, edit, del, check, countFin } = useTodoList();

const addTodo = () => {
  add(todoRef.value);
  todoRef.value = '';
};
const showTodo = (id) => {
  todoRef.value = show(id);
  isEditRef.value = true;
};
const editTodo = () => {
  edit(todoRef.value);
  isEditRef.value = false;
  todoRef.value = '';
};
const deleteTodo = (id) => {
  del(id);
};
const changeCheck = (id) => {
  check(id);
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
      <div class="todo" :class="{ fin: todo.checked }">
        <input
          type="checkbox"
          class="check"
          @change="changeCheck(todo.id)"
          :checked="todo.checked"
        />
        <label>{{ todo.task }}</label>
      </div>
      <div class="btns">
        <button class="btn green" @click="showTodo(todo.id)">Edit</button>
        <button class="btn pink" @click="deleteTodo(todo.id)">Delete</button>
      </div>
    </div>
  </div>
  <div class="finCount">
    <span>Finished:{{ countFin }}</span>
    <span>Not finished:{{ todoListRef.length - countFin }}</span>
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

.fin {
  text-decoration: line-through;
  background-color: #dddddd;
  color: #777777;
}
.finCount {
  margin-top: 8px;
  font-size: 0.8em;
}
</style>
