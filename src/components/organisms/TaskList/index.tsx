import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TaskItem, { Task } from '../../molecules/TaskItem';

interface TaskListProps {
  tasks: Task[];
  onTaskToggle: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskToggle }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer} >
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onTaskToggle}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingBottom: 96
  }
});

export default TaskList;
