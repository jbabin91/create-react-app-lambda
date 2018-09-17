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
              dogPhotoUrl
            }
          `}
        >
          {({ data }) => (
            <div>
              A greeting from the server: {data.hello} <br />
              <img src={data.dogPhotoUrl} alt="A picture of a dog." />
            </div>
          )}
        </Query>
      </ApolloProvider>
    );
  }
}

export default LambdaDemo;
