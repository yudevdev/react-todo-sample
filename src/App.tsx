import TodoList from "./components/TodoList";
import { Container, Typography } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        TODO App
      </Typography>
      <TodoList />
    </Container>
  );
}
