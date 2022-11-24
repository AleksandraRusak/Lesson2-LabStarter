import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  ProgressViewIOSComponent,
} from "react-native";
import { styles } from "../styles";
const TotalItems = ({ item, counter, counter1, counter2 }) => {
  let totalItem = counter + counter1 + counter2;
  return <Text>Your total amount of items: {totalItem}</Text>;
};

const CartItem = ({ item, counter, setCounter }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text>{item}</Text>
      <Button
        title="-"
        onPress={() => setCounter((prevCounter) => setCounter(counter - 1))}
      />
      <View style={{ flexDirection: "col" }}>
        <Text>{counter}</Text>
      </View>
      <Button
        title="+"
        onPress={() => setCounter((prevCounter) => setCounter(counter + 1))}
      />
    </View>
  );
};

const CartItem1 = ({ item, counter1, setCounter1 }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text>{item}</Text>
      <Button
        title="-"
        onPress={() => setCounter1((prevCounter1) => setCounter1(counter1 - 1))}
      />
      <View style={{ flexDirection: "col" }}>
        <Text>{counter1}</Text>
      </View>
      <Button
        title="+"
        onPress={() => setCounter1((prevCounter1) => setCounter1(counter1 + 1))}
      />
    </View>
  );
};
const CartItem2 = ({ item, counter2, setCounter2 }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text>{item}</Text>
      <Button
        title="-"
        onPress={() => setCounter2((prevCounter2) => setCounter2(counter2 - 1))}
      />
      <View style={{ flexDirection: "col" }}>
        <Text>{counter2}</Text>
      </View>
      <Button
        title="+"
        onPress={() => setCounter2((prevCounter2) => setCounter2(counter2 + 1))}
      />
    </View>
  );
};

export default function CreatingCustomComponents() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  item = { milk: counter, bread: counter1, eggs: counter2 };

  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Creating Custom Components</Text>

        <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Shopping Cart
          </Text>
          {
            /* TODO: ADD THE CART ITEMS BELOW*/

            <View style={styles.container}>
              <Text>Item</Text>
              <CartItem item="milk" counter={counter} setCounter={setCounter} />
              <CartItem1
                item="bread"
                counter1={counter1}
                setCounter1={setCounter1}
              />
              <CartItem2
                item="eggs"
                counter2={counter2}
                setCounter2={setCounter2}
              />
              <TotalItems
                counter={counter}
                counter1={counter1}
                counter2={counter2}
              />
            </View>
          }
        </View>
        <View style={styles.section}>
          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
            {"\n\n"}
            1. Create a custom component called CartItem. It should have a text
            that displays the item name, and the amount of items with a button
            to increase and decrease the amount.
            {"\n\n"}
            2. Create three cart item components, one for Milk, bread and eggs
            with initial values of 0. Take a look at the 'shopping cart items'
            image in the assets folder to see what it should look like in the
            end.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Bonus: </Text>Display the total
            number of items in the cart. Think about how you could use a
            dictionary state variable to do this.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
