import React, { Component, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/home/index';
import FetchData from './pages/fetch-data/index';
import Counter from './pages/counter/index';

import './globals.css';

export default class App extends Component {
  static displayName = App.name;
  render() {
    const ReloadPrompt = lazy(() => import('./components/ReloadPrompt/index'));
    const renderLoader = () => <p>Loading</p>;
    return (
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/fetch-data" element={<FetchData />} />
        </Routes>
        <Suspense fallback={renderLoader()}>
          <ReloadPrompt />
        </Suspense>
      </Layout>
    );
  }
}
