import { View, Text, Button } from "native-base";
import React from "react";
export const WelcomeScreen = () => {
  return (
    <View>
      <Text color={"black"} fontSize={"lg"} bold>
        Welcome Back!
      </Text>
      <Text
        flex={1}
        bg={"red.300"}
        m={"auto"}
        paddingX={"8"}
        bold
        fontSize={"5xl"}
      >
        MARI
      </Text>
      <Button onPress={() => console.log("Hello")}>SayHello</Button>
    </View>
  );
};
export default WelcomeScreen;
