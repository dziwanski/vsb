import {Provider} from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import store from './store/store';
// Components
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
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
                        <Route path='/dashboard'>
                            <Dashboard/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
