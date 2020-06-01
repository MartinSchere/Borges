import React from "react";
import "./App.css";
import Routes from "./Routes";
// APOLLO
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
//
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql/",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
