import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './common/history';
import AddTodo from './container/AddTodo';
import AllTodo  from './container/AllTodo';

function App() {
  return (
    <Router history={history}>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/todo/add">
            <AddTodo />
          </Route>
          <Route path="/todo/edit">
            <AddTodo />
          </Route>
          <Route path="/">
            <AllTodo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
