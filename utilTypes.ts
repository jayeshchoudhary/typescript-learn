// partial types in typescript
interface Todo {
    title: string;
    description: string;
  }
   
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }
   
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
   
  const todo2 = updateTodo(todo1, {
    description: "throw out trash",
  });

  interface Todo {
    title: string;
  }
   
  const todo: Readonly<Todo> = {
    title: "Delete inactive users",
  };
   
  todo.title = "Hello";