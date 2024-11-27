"use client"
import { useState,useEffect } from "react";
const CSR = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const data = await response.json();
        setTodoList(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // if (isLoading) {
  //   return <p>Loading todos...</p>;
  // }
  const styles = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px',
    fontFamily: 'Geist Sans, sans-serif',
    color: 'black',
    margin: '40px'
} 
  return (
    <div style={styles}>
      <h2 className="text-2xl font-semibold mb-4">Client-Side Rendered Todos</h2>
      <ul className="list-disc pl-5">
        {todoList.map((todo) => (
          <li key={todo.id} className="mb-2">{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

type Todo = {
  id: number;
  title: string;
};

export default CSR;