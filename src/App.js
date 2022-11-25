import './App.css';
import Header from "./components/Header";
import logo from './assets/logo-red.png'
import About from "./pages/About";
import {Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";


function App() {
    return (
        <div>
            <Header
                projectOne="Doppergang"
                projectTwo="Fietsenmaker"
                projectThree="Nakwatch"
                projectFour="Higo"
                projectFive="de Puta"
                logo={logo}
            />

            <Routes>

                <Route path="/" exact element={
                    <Projects/>
                }/>


                <Route path="/about" exact element={
                    <About
                        title="Bureau van Breukelen"
                        descOne="Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Quisque id mi. Ut tincidunt tincidunt erat. Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue."
                        descTwo="Ut tincidunt tincidunt erat. Etiam feugiat lorem non metus. Vestibulum dapibus nunc ac augue."
                    />
                }/>


            </Routes>

        </div>
    );
}

export default App;
