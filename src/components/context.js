import React, { createContext, useState } from "react";

const TravelPlanContext = createContext();

const TravelPlanProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <TravelPlanContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TravelPlanContext.Provider>
  );
};

export { TravelPlanContext, TravelPlanProvider };
