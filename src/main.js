import React from "react";

export class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/ilike" component={iLike} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}
