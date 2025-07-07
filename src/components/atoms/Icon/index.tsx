import React from 'react';
import { View, StyleSheet } from 'react-native';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: any;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#000', style }) => {
  const getIconComponent = () => {
    // You can integrate with react-native-vector-icons or create custom icons
    switch (name) {
      case 'plus':
        return <View style={[styles.plus, { width: size, height: size }]} />;
      case 'check':
        return <View style={[styles.check, { width: size, height: size }]} />;
      default:
        return <View style={[styles.default, { width: size, height: size }]} />;
    }
  };

  return (
    <View style={[{ tintColor: color }, style]}>
      {getIconComponent()}
    </View>
  );
};

const styles = StyleSheet.create({
  plus: {
    backgroundColor: 'transparent',
  },
  check: {
    backgroundColor: 'transparent',
  },
  default: {
    backgroundColor: '#ccc',
    borderRadius: 2,
  },
});

export default Icon;
