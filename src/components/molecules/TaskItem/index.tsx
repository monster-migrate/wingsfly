import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../../atoms/Icon';

export interface Task {
  id: string;
  title: string;
  time: string;
  tags: string[];
  completed: boolean;
  icon: string;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={task.icon} size={24} color="#007AFF" />
      </View>
      
      <View style={styles.content}>
        <Text style={[styles.title, task.completed && styles.completedTitle]}>
          {task.title}
        </Text>
        <View style={styles.metaContainer}>
          <Text style={styles.time}>{task.time}</Text>
          <View style={styles.tagsContainer}>
            {task.tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      
      <TouchableOpacity
        style={styles.statusButton}
        onPress={() => onToggle(task.id)}
        activeOpacity={0.7}
      >
        <Icon 
          name={task.completed ? 'check' : 'circle'} 
          size={20} 
          color={task.completed ? '#34C759' : '#C7C7CC'} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 14,
    color: '#666',
  },
  tagsContainer: {
    flexDirection: 'row',
  },
  tag: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    marginLeft: 4,
  },
  tagText: {
    fontSize: 12,
    color: '#666',
  },
  statusButton: {
    padding: 8,
  },
});

export default TaskItem;
