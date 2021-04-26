import {Provider} from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import store from '../../store/store';
// Components
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
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
                        <ProtectedRoute
                            path='/dashboard'
                            authenticationPath="/login"
                            component={Dashboard}
                            isAuthenticated={true}
                        />
                            {/*<Dashboard/>*/}
                        {/*</ProtectedRoute>*/}
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
