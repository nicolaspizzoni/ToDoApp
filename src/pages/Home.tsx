import React, { useState } from 'react';
import { Alert, View } from 'react-native';

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
  const [darkMode, setDarkMode] = useState(false);

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
    <View style={{flex: 1, backgroundColor: darkMode ? '#1F1F1F' : '#fff'}}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <TodoInput darkMode={darkMode} addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
        darkMode={darkMode}
      />
    </View>
  )
}