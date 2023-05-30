import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Realm from 'realm';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const realm = new Realm({ schema: [{ name: 'Task', properties: { id: 'int', title: 'string', completed: 'bool' } }] });
    const taskList = realm.objects<Task>('Task');
    setTasks([...taskList]);

    return () => {
      realm.close();
    };
  }, []);

  const handleAddTask = () => {
    const realm = new Realm({ schema: [{ name: 'Task', properties: { id: 'int', title: 'string', completed: 'bool' } }] });

    realm.write(() => {
      const newTask: Task = {
        id: new Date().getTime(),
        title: title,
        completed: false,
      };

      realm.create<Task>('Task', newTask);
    });

    setTitle('');
  };

  return (
    <View>
      {tasks.map((task) => (
        <Text key={task.id}>
          {task.title} - {task.completed ? 'Completed' : 'Incomplete'}
        </Text>
      ))}
      <TextInput
        placeholder="Enter task title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

export default App;
