import React, { Component } from "react";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";
import { connect } from "react-redux";
// Style
import styles from "./styles";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

import * as actionCreatores from "../../store /actions/coffeeActions";
class HomePage extends Component {
  componentDidMount() {
    this.props.getcoffeeshops;
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeCart />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getcoffeeshops: () => dispatch(actionCreatores.getCoffeeShops())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
