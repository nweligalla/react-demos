import React from "react";
import { useHistory } from "react-router-dom";

const TodoCard = (props) => {
  let history = useHistory();
  const { todo } = props;
  const { userId, id, title, completed } = todo;
  return (
    <div
      key={id}
      style={{
        backgroundColor: "grey",
        margin: "10px",
        padding: "10px",
        width: "10%",
        textAlign: "center",
      }}
      onClick={() => history.push(`/todo/${id}`)}
    >
      <h4>{title}</h4>
      <h6>{`completed : ${completed}`}</h6>
    </div>
  );
};

export default TodoCard;
