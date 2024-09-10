import { useState } from "react";
const CandidateSignUp = () => {
        const [formData, setFormData] = useState({
            fullName: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
            functionalArea: '',
            currentCity: '',
            resume: null,
          });
        
          const handleChange = (e) => {
            const { name, value, files } = e.target;
            setFormData({
              ...formData,
              [name]: files ? files[0] : value, // Handle file upload separately
            });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
            // Form submission logic
            console.log('Form Data:', formData);
          };
        
          return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Registration Using Resume</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
        
                  {/* Email Address */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
        
                  {/* Mobile Number */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="mobile">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your mobile number"
                    />
                  </div>
        
                  {/* Password */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your password"
                    />
                  </div>
        
                  {/* Confirm Password */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="confirmPassword">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Confirm your password"
                    />
                  </div>
        
                  {/* Functional Area */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="functionalArea">
                      Functional Area
                    </label>
                    <select
                      id="functionalArea"
                      name="functionalArea"
                      value={formData.functionalArea}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="" disabled>Select functional area</option>
                      <option value="IT">IT</option>
                      <option value="Marketing">Marketing</option>
                      <option value="HR">HR</option>
                      <option value="Finance">Finance</option>
                      <option value="Operations">Operations</option>
                    </select>
                  </div>
        
                  {/* Current City */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="currentCity">
                      Current City
                    </label>
                    <input
                      type="text"
                      id="currentCity"
                      name="currentCity"
                      value={formData.currentCity}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your current city"
                    />
                  </div>
        
                  {/* Resume Upload */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="resume">
                      Resume Upload
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
        
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    Register
                  </button>
                </form>
        
                {/* Link to Login */}
                <p className="mt-4 text-center text-gray-600">
                  Already have an account?{' '}
                  <a href="/login" className="text-blue-500 hover:underline">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          );
}
export default CandidateSignUp;