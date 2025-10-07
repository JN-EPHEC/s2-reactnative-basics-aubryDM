import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function CounterScreen() {
      // Initialize state for the counter with an initial value of 0.
      const [count, setCount] = useState(0);
    
      // Function to increment the count.
      const incrementCount = () => {
            setCount(count + 1);
        }

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title={"Count: " + count} onPress={incrementCount}/>
        </View>

    );
}
//test