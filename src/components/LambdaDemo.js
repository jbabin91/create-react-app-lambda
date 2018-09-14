import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { client: this.props.client };
  }
  render() {
    return (
      <ApolloProvider client={this.state.client}>
        <Query
          query={gql`
            {
              hello
            }
          `}
        >
          {({ data }) => <div>A greeting from the server: {data.hello}</div>}
        </Query>
      </ApolloProvider>
    );
  }
}

export default LambdaDemo;
