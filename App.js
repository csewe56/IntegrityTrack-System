import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReportIncident from './pages/ReportIncident';
import IncidentList from './pages/IncidentList';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/report-incident" component={ReportIncident} />
        <Route path="/incident-list" component={IncidentList} />
        <Route path="/user-profile" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;

