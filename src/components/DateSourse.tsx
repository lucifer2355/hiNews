import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DateSourseProps {
  dateSourses: string[];
}

const DateSource = ({ dateSourses }: DateSourseProps) => {
  return (
    <View style={styles.container}>
      {dateSourses.map((dateSourse) => {
        return (
          <View key={dateSourse} style={styles.dateSourseView}>
            <Text style={styles.dateSourseText}>{dateSourse}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 4,
  },
  dateSourseView: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#ccc',
    marginRight: 4,
    marginBottom: 4,
  },
  dateSourseText: {
    fontSize: 9,
    opacity: 0.4,
  },
});

export default DateSource;
