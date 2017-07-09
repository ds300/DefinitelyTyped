import * as React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { Button, Text, Badge, Avatar } from "react-native-elements";

class AvatarTest extends React.Component {
  render() {
    return (
      <View>
        <Avatar
          small
          rounded
          icon={{ name: "user" }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
        />
        <Avatar
          medium
          overlayContainerStyle={{ backgroundColor: "blue" }}
          icon={{ name: "meetup", color: "red" }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{ flex: 3, marginTop: 100 }}
        />
        <Avatar
          large
          icon={{ name: "rocket", color: "orange" }}
          overlayContainerStyle={{ backgroundColor: "white" }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{ flex: 4, marginTop: 75 }}
        />
        <Avatar
          xlarge
          rounded
          icon={{ name: "home" }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{ flex: 5, marginRight: 60 }}
          component={class Test extends React.Component {}}
          width={403}
          height={230}
          onLongPress={() => console.log("works")}
          source={""}
          avatarStyle={{ padding: 30 }}
          title="Avatar!"
          titleStyle={{ marginHorizontal: 32 }}
          overlayContainerStyle={{ flex: 2 }}
          iconStyle={{ paddingLeft: 9 }}
        />
      </View>
    );
  }
}

class TextTest extends React.Component<any, any> {
  render() {
    return (
      <View>
        <Text h1>Heading 1</Text>
        <Text h2>Heading 2</Text>
        <Text h3>Heading 3</Text>
        <Text h4>Heading 4</Text>
      </View>
    );
  }
}

class BadgeTest extends React.Component<any, any> {
  render() {
    return (
      <View>
        <Badge value={3} textStyle={{ color: "orange" }} />

        <Badge containerStyle={{ backgroundColor: "violet" }}>
          <Text>User 1</Text>
        </Badge>

        <Badge onPress={() => console.log("pressed")} value="5" />

        <Badge component={TouchableNativeFeedback} value={10} />
      </View>
    );
  }
}

class ButtonTest extends React.Component<any, any> {
  handleButtonPress() {
    console.log("I got pressed");
  }

  render() {
    return (
      <View>
        <Button title="BUTTON" onPress={() => this.handleButtonPress()} />

        <Button
          raised
          icon={{ name: "cached" }}
          title="BUTTON WITH ICON"
          onPress={() => this.handleButtonPress()}
        />

        <Button
          large
          iconRight
          icon={{ name: "code" }}
          title="LARGE WITH RIGHT ICON"
          onPress={() => this.handleButtonPress()}
        />

        <Button
          large
          icon={{ name: "envira", type: "font-awesome" }}
          title="LARGE WITH RIGHT ICON"
          onPress={() => this.handleButtonPress()}
        />

        <Button
          large
          icon={{
            name: "squirrel",
            type: "octicon",
            buttonStyle: styles.someButtonStyle
          }}
          title="OCTICON"
          onPress={() => this.handleButtonPress()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  someButtonStyle: {
    color: "pink"
  }
});
