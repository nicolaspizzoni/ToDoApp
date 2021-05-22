import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';


interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  darkMode: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, darkMode }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={
              item.done ? 
              [
                styles.taskButtonDone,
                {backgroundColor: darkMode ? '#222222' : 'rgba(25, 61, 223, 0.1)'}
              ] 
              : styles.taskButton
            }
          >
            <View 
              testID={`marker-${index}`}
              style={
                item.done ? 
                [
                  styles.taskMarkerDone,
                  {backgroundColor: darkMode ? '#12A952' : '#273FAD'}
                ] 
                : [
                    styles.taskMarker,
                    {borderColor: darkMode ? '#12A952' : '#273FAD'}
                  ]
              }
            />
            <Text 
              style={
                item.done ? 
                [styles.taskTextDone, {color: darkMode ? '#E1E1E6' : '#A09CB1'}] : 
                {color: darkMode ? '#E1E1E6' : '#3D3D4D'}}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <Text style={[styles.header, {color: darkMode ? '#BF4AD4' : '#3D3D4D'}]}>
          Minhas tasks
        </Text>
      }
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10
  },
  taskTextDone: {
    textDecorationLine: 'line-through'
  }
})