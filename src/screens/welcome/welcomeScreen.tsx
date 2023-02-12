import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Button, Box, Image, Icon } from "native-base";
import React from "react";

const HEADER_IMAGE = require("../../resources/Asset 17.svg");
export const WelcomeScreen = () => {
  return (
    <View>
      <Box
        p={2}
        bg={"dark.100"}
        flexDir={"row"}
        flex={1}
        justifyContent={"space-between"}
        alignItems={"center"}
        w={400}
        marginX={"auto"}
      >
        {/*Hedaer*/}
        <Box>
          <Text color={"text.100"} fontSize="lg" bold>
            Welcome to
          </Text>
          <Text color={"primary.300"} fontSize="xl">
            invitoo!
          </Text>
        </Box>
        <Image source={HEADER_IMAGE} alt="Alternate Text" size={"xl"} />
      </Box>
      {/* Options */}
      <View>
        <Text fontSize="xs">Text</Text>
        <Icon as={MaterialIcons} name="home" size={"md"} />
      </View>
    </View>
  );
};
export default WelcomeScreen;
