import React from "react";
import "../component/todos.css";
import { Card, CardContent, Grid } from "@mui/material";


//extra comments
const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id} item xs={12}>
          <Card>
            <CardContent>
              <span style={{ padding: "50px" }}>{todo.content}</span>
            </CardContent>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>You have no todo's left</p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
