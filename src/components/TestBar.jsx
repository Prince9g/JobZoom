import { Link } from "react-router-dom";
const TestBar = () => {
  return (
    <>
      <div className="flex bg-blue-500 justify-center">
        <div className="p-4 text-white text-3xl font-semibold">
          Build your career with Us.
        </div>
          <Link to="/take-test"><button className="bg-red-500 mt-4 rounded-full p-1.5 px-3 text-lg hover:bg-green-600 hover:text-white">Take Test</button></Link>
      </div>
    </>
  );
};

export default TestBar;
