import { Link } from "react-router-dom";
const Button = () => {
    return (<>
    <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-400"><Link to="/sign-up">Login / Sign Up</Link></button></>);
}

export default Button;