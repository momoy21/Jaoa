import React, { useState } from "react";
import TravelPlanContext from "./context";

const TravelPlanProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const value = {
    todos,
    addTodo,
    removeTodo,
  };

  return (
    <TravelPlanContext.Provider value={value}>
      {children}
    </TravelPlanContext.Provider>
  );
};

export default TravelPlanProvider;
