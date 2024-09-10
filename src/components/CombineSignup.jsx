import { Link } from "react-router-dom";
const CombineSignup = () => {
    return (
        <>
            <div className="grid place-content-center h-screen ">
            <button type="button" className="btn btn-outline-primary m-2"><Link to="/sign-up-recruiter" >SignUp as Recruiter</Link></button>
            <button type="button" className="btn btn-outline-primary m-2"><Link to="#" >SignUp as Candidate</Link></button>
            <div>
                <span>Already have account? </span><span className="text-sky-600"><Link to="/sign-in">Sign In</Link></span>
            </div>
            </div>
        </>
    );
}
export default CombineSignup;