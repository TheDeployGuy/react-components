import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import components here

export default () => (
    <main>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
      </Switch>
    </main>
  );