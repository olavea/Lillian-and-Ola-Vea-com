import React from "react";
import Login from "./login";
const base = "base";

class App extends React.Component {
  render() {
    return (
      <div className="cat">
        <div className="menu">Header</div>
        Inventory Ord
      </div>
    );
  }
}

// class Inventory = () => {

state = {
  uid: null,
  owner: null,
};
// A fu pass
authHandler = async (authData) => {
  // 1 Look up the current store in firbase
  const store = await base.fetch(this.props.storeId, { context: this });

  // 2 Claim it if there is no owner
  if (!store.owner) {
    // Save it as our own
    await base.post(`${this.props.storeId}/owner`, {
      data: authData.user.uid,
    });
  }
  // 3. Set the state
  this.setState({
    uid: authData.user.uid,
    owner: store.owner || authData.user.uid,
  });
};

authenticate = (provider) => {
  const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
};
