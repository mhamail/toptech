"use client"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { PropsWithChildren } from 'react';

const GraphqlProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://flyby-router-.herokuapp.com/"
  });
  return <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
}
export default GraphqlProvider
