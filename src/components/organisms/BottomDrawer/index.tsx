import React, { useEffect } from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  Animated,
  Dimensions,
} from 'react-native';
import Icon from '../../atoms/Icon';

const { height: screenHeight } = Dimensions.get('window');

interface DrawerOption {
  id: string;
  title: string;
  icon: string;
}

interface BottomDrawerProps {
  visible: boolean;
  onClose: () => void;
  onOptionSelect: (optionId: string) => void;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({ visible, onClose, onOptionSelect }) => {
  const slideAnim = new Animated.Value(screenHeight);
  const backdropAnim = new Animated.Value(0);

  const options: DrawerOption[] = [
    { id: 'habit', title: 'Habit', icon: 'habit' },
    { id: 'recurring', title: 'Recurring Task', icon: 'recurring' },
    { id: 'task', title: 'Task', icon: 'task' },
    { id: 'goal', title: 'Goal of the Day', icon: 'goal' },
  ];

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(backdropAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: screenHeight,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(backdropAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible]);

  const handleOptionPress = (optionId: string) => {
    onOptionSelect(optionId);
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="none">
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Animated.View
            style={[
              styles.backdrop,
              {
                opacity: backdropAnim,
              },
            ]}
          />
        </TouchableWithoutFeedback>
        
        <Animated.View
          style={[
            styles.drawer,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <View style={styles.handle} />
          
          <View style={styles.content}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={option.id}
                style={styles.option}
                onPress={() => handleOptionPress(option.id)}
                activeOpacity={0.7}
              >
                <View style={styles.optionIcon}>
                  <Icon name={option.icon} size={24} color="#007AFF" />
                </View>
                <Text style={styles.optionTitle}>{option.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 34,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#C7C7CC',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 24,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  optionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});

export default BottomDrawer;
