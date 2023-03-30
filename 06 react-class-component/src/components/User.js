import { Component } from "react";

import classes from "./User.module.css";

class User extends Component {
  componentWillMount() {
    console.log("User will unmount!");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
export default User;
