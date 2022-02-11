import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [userGoalList, addUserListGoal] = useState([]);
  const [showModal, setShowModal] = useState(false);


  const userClickAddButton = () => {
    setShowModal(true);
  }

  const userPressSubmit = (goalTitle) => {
    if(goalTitle.length == 0) return;
    addUserListGoal(prevUserGoalList => [...prevUserGoalList, {key: Math.random().toString(), value: goalTitle}]);
    setShowModal(false);
  }

  const userPressCancel = () => {
    setShowModal(false);
  }

  const onPressDelete = (goalKey) => {
    addUserListGoal((prevUserGoalList) => {
      return prevUserGoalList.filter((goal) => goal.key !== goalKey);
    } );
  }

  return (
      <View style={{ marginTop: 90 }}>
        <View style={{ marginHorizontal: 40, marginBottom: 20 }}>
          <Button title="Add New Goal" onPress={userClickAddButton}/>
        </View>
        <GoalInput onUserCancel={userPressCancel} showModal={showModal} onUserSubmit={userPressSubmit}/>
        <View style={{paddingBottom: 220}}>
            <FlatList
            data={userGoalList}
            renderItem={(listItem => <GoalItem id={listItem.item.key} onPressDelete={onPressDelete} title={listItem.item.value}/>)}/>
        </View>
      </View>
  );
}

