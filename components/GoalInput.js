import react from "react";
import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
    const [userGoal, setUserGoal] = useState('');

    const userTextChange = (changedText) => {
        setUserGoal(changedText);
    }

    const userClickCancel = () => {
      setUserGoal("");
      props.onUserCancel();
    }

    const userClickAdd = () => {
      props.onUserSubmit(userGoal);
      setUserGoal("");
    }

    return (
      <Modal visible={props.showModal} animationType='slide'>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Enter Goal Here" 
            style={styles.textInput}
            onChangeText={userTextChange}/>
          <View style={styles.buttonContainer}>
            <View style={{ width:70 }}><Button title="ADD" onPress={userClickAdd}/></View>
            <View style={{ width:70 }}><Button title="CANCEL" color={'red'} onPress={userClickCancel}/></View>
          </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create(
    {
        buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '80%'
        },
        inputContainer: {
          flex: 0.8,
          justifyContent:"center",
          alignItems:"center",
        },
        textInput: {
          margin:10,
          borderBottomColor:'lightgrey',
          borderBottomWidth:1,
          width: '80%',
          marginBottom: 20
        },
    }
);

export default GoalInput;