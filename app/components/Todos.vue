<script setup lang="ts">
    const newTodoName = ref('');
    const todosStore = useTodosStore();

    const addTodo = () => {
        todosStore.addTodo(newTodoName.value);
        newTodoName.value = '';
    };
</script>

<template>
    <div>
        <h3 class="text-xl font-semibold">Il reste {{ todosStore.countPendingTodos() }} tâches à faire</h3>
         <br/>   
        <ul>
            <li v-for="todo in todosStore.getPendingTodos()" :key="todo.id" class="mb-2">
                <div class="grid grid-cols-12">
                    <span class="col-span-6">{{ todo.text }}</span>
                    <UButton  size="md" color="neutral" variant="outline" @click="todosStore.checkTodo(todo.id)" aria-label="Check todo"></UButton>
                </div>
            </li>
            <li v-for="todo in todosStore.getDoneTodos()" :key="todo.id" class="mb-2">
                <div class="grid grid-cols-12">
                    <span class="col-span-6 line-through">{{ todo.text }}</span>
                    <UButton class="grid place-items-center text-white" icon="lucide:check" size="md" color="primary" variant="solid"></UButton>
                    <UButton class="ms-1 grid place-items-center" icon="lucide:eye-off" size="md" color="warning" variant="ghost" @click="todosStore.removeTodo(todo.id)"></UButton>
                </div>
            </li>
        </ul>
        <br/>

        <span>Nouvelle tache :</span><br/>
        <div class="grid grid-cols-12 mt-2">
            <UInput v-model="newTodoName" class="col-span-8"/>
            <div class="ms-4 col-span-4">
                <UButton @click="addTodo">Ajouter</UButton>
            </div>
        </div>
    </div>
</template>