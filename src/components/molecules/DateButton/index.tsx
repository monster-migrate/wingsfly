import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface DateButtonProps {
  date: Date;
  isSelected: boolean;
  onPress: (date: Date) => void;
}

const DateButton: React.FC<DateButtonProps> = ({ date, isSelected, onPress }) => {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dayName = dayNames[date.getDay()];
  const dayNumber = date.getDate();

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selected]}
      onPress={() => onPress(date)}
      activeOpacity={0.7}
    >
      <Text style={[styles.dayName, isSelected && styles.selectedText]}>{dayName}</Text>
      <Text style={[styles.dayNumber, isSelected && styles.selectedText]}>{dayNumber}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    borderRadius: 12,
    backgroundColor: '#F2F2F7',
    minWidth: 60,
  },
  selected: {
    backgroundColor: '#007AFF',
  },
  dayName: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  selectedText: {
    color: '#FFFFFF',
  },
});

export default DateButton;
