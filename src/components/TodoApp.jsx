import { Container } from "@mantine/core";
import TodoForm from "./TodoForm";

function TodoApp() {
  return (
    <Container sx={{ marginTop: 20 }}>
      <h1>Todo App</h1>
      <TodoForm />
    </Container>
  )
}

export default TodoApp;