import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const Todo = () => {
  const { id } = useParams(); //get id paramater from url

  const [tododetails, setTodoDetails] = useState();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const responseTodoDetailss = res.data;
        setTodoDetails(responseTodoDetailss);
      });
  }, []);

  const { id: todoId, userId, title, completed } = tododetails || {};
  console.log(tododetails);

  return (
    <>
      {!tododetails ? (
        <CircularProgress />
      ) : (
        <div>
          <h1>{userId}</h1>
          <h1>{todoId}</h1>
          <h1>{title}</h1>
          <h1>{completed}</h1>
        </div>
      )}
    </>
  );
};

export default Todo;
