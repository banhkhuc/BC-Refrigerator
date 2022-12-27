import React from 'react';
import { Header } from 'app/containers/Header';
import { HomePage } from 'app/pages/HomePage';
import { Route, Switch } from 'react-router-dom';
import Footer from 'app/containers/Footer';
import { FactoryManagementPage } from 'app/pages/FactoryManagementPage';
import { InsuranceManagementPage } from 'app/pages/InsuranceManagementPage';

const HomeLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/production" component={FactoryManagementPage} />
        <Route path="/insurance" component={InsuranceManagementPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default HomeLayout;
