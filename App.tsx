import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import DatePicker from './src/components/organisms/DatePicker';
import TaskList from './src/components/organisms/TaskList';
import BottomDrawer from './src/components/organisms/BottomDrawer';
import Button from './src/components/atoms/Button';
import ProgressBar from './src/components/molecules/ProgressBar';
import { Task } from './src/components/molecules/TaskItem';
import tasksByDate from './src/data/tasksByDate';
import quotesByDate, { Quote } from './src/data/quotes';

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [currentQuote, setCurrentQuote] = useState<Quote>({ text: '', author: '' });
  const [tasks, setTasks] = useState<Task[]>([]);

  const formatDateKey = (date: Date): string => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTaskToggle = (taskId: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFloatingButtonPress = () => {
    setDrawerVisible(true);
  };

  const handleDrawerOptionSelect = (optionId: string) => {
    console.log('Selected option:', optionId);
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const progressPercentage = tasks.length > 0 ? completedTasks / tasks.length : 0;

  useEffect(() => {
    const key = formatDateKey(selectedDate);
    const newTasks = tasksByDate[key] ?? [];
    setTasks(newTasks);
    setCurrentQuote(quotesByDate[key] ?? { text: 'Stay motivated!', author: '' });
  }, [selectedDate]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.header}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Image source={require('./assets/brand.png')} style={{ width: 32, height: 32 }} />
          <Text style={styles.appTitle}>WingsFly</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Image source={require('./assets/search.png')} style={{ width: 24, height: 24 }} />
          <Image source={require('./assets/calendar.png')} style={{ width: 24, height: 24 }} />
          <Image source={require('./assets/help.png')} style={{ width: 32, height: 32 }} />
        </View>
      </View>

      <DatePicker
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
      />

<View style={styles.quoteSection}>
      <Text style={styles.sectionTitle}>Today's Quote</Text>
      <Text style={styles.quote}>"{currentQuote.text}"</Text>
      {currentQuote.author ? (
        <Text style={styles.author}>— {currentQuote.author}</Text>
      ) : null}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          Progress {Math.round(progressPercentage * 100)}%
        </Text>
        <ProgressBar progress={progressPercentage} />
      </View>
    </View>

      <View style={styles.taskSection}>
        <TaskList
          tasks={tasks}
          onTaskToggle={(id) => {
            setTasks(prev =>
              prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
            );
          }}
        />
      </View>

      <Button
        title="+"
        variant="floating"
        onPress={handleFloatingButtonPress}
      />

      {/* Bottom Drawer */}
      <BottomDrawer
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        onOptionSelect={handleDrawerOptionSelect}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  quoteSection: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#333',
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
    marginBottom: 12,
  },
  progressContainer: {
    marginTop: 8,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  taskSection: {
    flex: 1,
    marginTop: 8,
  },
});

export default App;
