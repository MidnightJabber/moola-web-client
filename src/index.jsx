import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader'
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import './base.scss';

const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include'
});

const client = new ApolloClient({
    dataIdFromObject: o => o.id,
    // By default, this client will send queries to the
    //  `/graphql` endpoint on the same host
    link,
    cache: new InMemoryCache()
});

const render = Component => {
  ReactDOM.render(
    <ApolloProvider client={ client }>
        <HashRouter>
            <AppContainer>
                <App />
            </AppContainer>
        </HashRouter>
    </ApolloProvider>,
    document.getElementById('content'),
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}
