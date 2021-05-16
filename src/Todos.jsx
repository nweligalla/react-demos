import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Divider } from "@material-ui/core";
import TodoCard from "./TodoCard";

//fetch data when mounting
const Todos = () => {
  const [todos, setTodos] = useState();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  console.log(todos);
  return (
    <>
      {!todos ? (
        <CircularProgress />
      ) : (
        <div style={{ display: "flex",flexWrap:"wrap" }}>
          {todos.map((todo) => (
            <TodoCard todo={todo} />
          ))}
        </div>
      )}
    </>
  );
};

export default Todos;
