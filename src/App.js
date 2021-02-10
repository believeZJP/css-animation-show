import './App.css';
import {
    BrowserRouter as Router
} from "react-router-dom";
import Routes from './components/RouterList'
import LeftNav from './components/LeftNav'

function App() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <Router>
                <div className="outer-con">
                    <div className="side-bar">
                        <LeftNav/>
                    </div>
                    <div className="right-con">
                        <Routes/>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;
