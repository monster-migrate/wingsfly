import { Task } from '../components/molecules/TaskItem';

const tasks2025_07_07: Task[] = [
  {
    id: '1',
    title: 'Schedule a meeting with Harshit Sir',
    time: '09:00 AM',
    tags: ['Habit', 'Must'],
    completed: true,
    icon: 'meeting',
  },
  {
    id: '2',
    title: '2.5 Hours Simran and Meditation',
    time: '09:00 AM',
    tags: ['Habit', 'Must'],
    completed: false,
    icon: 'meditation',
  },
  {
    id: '7',
    title: 'Read 20 pages of “Atomic Habits”',
    time: '08:00 PM',
    tags: ['Habit', 'Important'],
    completed: false,
    icon: 'reading',
  },
  {
    id: '8',
    title: 'Plan weekly sprint backlog',
    time: '10:00 AM',
    tags: ['Task', 'Work'],
    completed: false,
    icon: 'planning',
  },
  {
    id: '9',
    title: 'Practice guitar for 30 minutes',
    time: '06:00 PM',
    tags: ['Habit', 'Relax'],
    completed: false,
    icon: 'guitar',
  },
  {
    id: '10',
    title: 'Write blog post on React Native',
    time: '02:30 PM',
    tags: ['Task', 'Creative'],
    completed: false,
    icon: 'writing',
  },
  {
    id: '11',
    title: 'Evening yoga session',
    time: '07:00 PM',
    tags: ['Habit', 'Wellness'],
    completed: false,
    icon: 'yoga',
  },
];

const tasks2025_07_08: Task[] = [
  {
    id: '3',
    title: 'Save 200 Rupees Daily',
    time: '01:00 PM',
    tags: ['Habit', 'Must'],
    completed: false,
    icon: 'money',
  },
  {
    id: '4',
    title: 'Walk 10k Step Daily',
    time: '07:00 AM',
    tags: ['Habit', 'Important'],
    completed: false,
    icon: 'walk',
  },{
    id: '12',
    title: 'Design a new habit tracker layout',
    time: '11:00 AM',
    tags: ['Task', 'Creative'],
    completed: false,
    icon: 'design',
  },
  {
    id: '13',
    title: 'Brainstorm app feature improvements',
    time: '03:30 PM',
    tags: ['Task', 'Work'],
    completed: false,
    icon: 'brainstorm',
  },
  {
    id: '14',
    title: 'Capture sunrise photography',
    time: '06:15 AM',
    tags: ['Habit', 'Hobby'],
    completed: false,
    icon: 'camera',
  },
  {
    id: '15',
    title: 'Write a poem about nature',
    time: '08:45 PM',
    tags: ['Creative', 'Relax'],
    completed: false,
    icon: 'poem',
  }
];

const tasks2025_07_09: Task[] = [
  {
    id: '5',
    title: 'Buy Sunflower for Mumma',
    time: '01:00 PM',
    tags: ['Task', 'Important'],
    completed: false,
    icon: 'flower',
  },
  {
    id: '6',
    title: 'Make Mandala and Colour Daily',
    time: '07:30 PM',
    tags: ['Task', 'Important'],
    completed: false,
    icon: 'art',
  },
  {
    id: '16',
    title: 'Learn 10 new Spanish words',
    time: '07:20 AM',
    tags: ['Habit', 'Learning'],
    completed: false,
    icon: 'language',
  },
  {
    id: '17',
    title: 'Sketch a daily mood mandala',
    time: '05:30 PM',
    tags: ['Habit', 'Art'],
    completed: false,
    icon: 'sketch',
  },
  {
    id: '18',
    title: 'Build a mini React Native component',
    time: '02:00 PM',
    tags: ['Task', 'Code'],
    completed: false,
    icon: 'code',
  },
  {
    id: '19',
    title: 'Compose a short melody on piano',
    time: '09:15 PM',
    tags: ['Creative', 'Music'],
    completed: false,
    icon: 'piano',
  },
  {
    id: '20',
    title: 'Plan a themed journal entry',
    time: '10:00 AM',
    tags: ['Creative', 'Organize'],
    completed: false,
    icon: 'journal',
  },
  {
    id: '21',
    title: 'Host a 5-minute meditation session',
    time: '12:30 PM',
    tags: ['Habit', 'Wellness'],
    completed: false,
    icon: 'meditate',
  }
];

const tasksByDate: Record<string, Task[]> = {
  '2025-07-07': tasks2025_07_07,
  '2025-07-08': tasks2025_07_08,
  '2025-07-09': tasks2025_07_09,
};

export default tasksByDate;
