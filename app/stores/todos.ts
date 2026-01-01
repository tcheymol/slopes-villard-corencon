import { defineStore } from 'pinia'

interface Todo {
    id: number;
    text: string;
    done: boolean;
}

interface State {
  todosList: Todo[]
}

export const useTodosStore = defineStore('todosStore', {
  state: (): State => ({
    todosList: [
        { id: 1, text: 'Learn Vue 3', done: false },
        { id: 2, text: 'Build a Nuxt 3 app', done: false },
        { id: 3, text: 'Write some code', done: false }
    ],
  }),
  actions: {
    checkTodo(id: number) {this.todosList = this.todosList.map((todo: Todo) => todo.id === id ? { ...todo, done: true } : todo)},
    removeTodo(id: number) {this.todosList = this.todosList.filter((todo: Todo) => todo.id !== id)},
    getPendingTodos() {return this.todosList.filter((todo: Todo) => !todo.done)},
    getDoneTodos() {return this.todosList.filter((todo: Todo) => todo.done)},
    countPendingTodos() {return this.getPendingTodos().length},
    createNewTodo(newTodoName: string) {return { id: Date.now(), text: newTodoName, done: false }},
    addTodo(newTodoName: string) {
      if(newTodoName.trim() === '') return;
      this.todosList = [...this.todosList, this.createNewTodo(newTodoName)];
    },
  }
});
