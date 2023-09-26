import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={AddTask} />
            <Route exact path="/edit/:id" component={EditTask} />
            <Route exact path="/tasklist" component={TaskList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
