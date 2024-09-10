import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import RecurCards from './components/RecurCards'
import Main from './components/Main';
import Card from './components/Card'
import CompanySignUp from "./components/CompanySignUp";
import CandidateSignUp from "./components/CandidateSignUp";
import ThirdPage from "./components/ThirdPage";
import SecondPage from "./components/SecondPage";
import ResumeBuilder from "./components/ResumeBuilder";
import SecPart2 from "./components/SecPart2";
import ChatBot from "./components/ChatBot";
import SignIn from "./components/SignIn";
function App() {
  return (<>
    <NavBar/>
    <ChatBot/>
    <Main/>
    <RecurCards/>
    <SecondPage/>
    <Card/>
    <SecPart2/>
    <ThirdPage/>
    <Footer/> 
  </>
  ) 
}

export default App;