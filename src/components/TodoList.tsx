import { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && addTodo()}
      />
      <Button variant="contained" color="primary" onClick={addTodo} style={{ marginTop: "10px" }}>
        Add Task
      </Button>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <Checkbox checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
            <ListItemText primary={todo.text} style={{ textDecoration: todo.completed ? "line-through" : "none" }} />
            <IconButton onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
