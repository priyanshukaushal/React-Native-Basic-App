import react from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
    return (
            <TouchableOpacity onPress={props.onPressDelete.bind(this, props.id)}>
                <Text style={styles.listItem}>{props.title}</Text>
            </TouchableOpacity>
        );
}

const styles = StyleSheet.create(
    {
        listItem: {
            marginHorizontal: 40,
            marginVertical: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            borderColor: 'black',
            borderWidth: 1,
            backgroundColor: 'lightgrey'
          },
    }
);

export default GoalItem;