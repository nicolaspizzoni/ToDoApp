import React, { useState } from 'react';
import { Alert } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle === ''){
      Alert.alert("Atenção", "Favor informar uma tarefa para adicionar")
      return;
    }
    setTasks(oldState => [...oldState, {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }]);
  }

  function handleMarkTaskAsDone(id: number) {
    const taskHasDone = tasks.map(t => {
      if(t.id === id) {
        t.done = !t.done
      }
      return t;
    })
    
    setTasks(oldState => [...taskHasDone]);
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}