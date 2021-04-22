import {Provider} from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import store from './store/store';
// Components
import Home from "./components/Home/Home";
import List from "./components/List/List";
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
                        <Route exact path='/home'>
                            <List/>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
