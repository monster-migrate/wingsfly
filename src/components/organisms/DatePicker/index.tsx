import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import DateButton from '../../molecules/DateButton';

interface DatePickerProps {
  onDateSelect: (date: Date) => void;
  selectedDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({ onDateSelect, selectedDate }) => {
  const [dates, setDates] = useState<Date[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    generateDates();
  }, []);

  const generateDates = () => {
    const today = new Date();
    const dateArray: Date[] = [];
    
    for (let i = -3; i <= 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dateArray.push(date);
    }
    
    setDates(dateArray);
  };

  const handleDatePress = (date: Date) => {
    onDateSelect(date);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {dates.map((date, index) => (
          <DateButton
            key={index}
            date={date}
            isSelected={selectedDate?.toDateString() === date.toDateString()}
            onPress={handleDatePress}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
});

export default DatePicker;
