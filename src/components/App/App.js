import {Provider} from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import store from '../../store/store';
// Components
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// Style
import './App.scss';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <PrivateRoute path='/dashboard'>
                            <Dashboard/>
                        </PrivateRoute>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
