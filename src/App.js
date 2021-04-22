import {Provider} from "react-redux";
import './App.scss';
import Home from "./components/Home/Home";

import store from './store/store';
import List from "./components/List/List";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                {/*<Home />*/}
                <List/>
            </div>
        </Provider>
    );
}

export default App;
