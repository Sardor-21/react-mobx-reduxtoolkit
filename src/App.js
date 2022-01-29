import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home"
import Counter from "./Components/Counter/counter";
import Users from "./Components/Users/users";
import Header from "./Components/Header/header";
import Posts from "./Components/Posts/posts";
import UserInfo from "./Components/Users/user-info";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className="container mx-auto">
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/counter'} element={<Counter/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>
                    <Route path={'/user-info'} element={<UserInfo/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
