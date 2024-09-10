import { useState } from "react";
const CompanySignUp = () => {
        const [formData, setFormData] = useState({
            companyName: '',
            email: '',
            mobile: '',
            contactPerson: '',
            industryType: '',
            gstin: '',
          });
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form Submitted:', formData);
            // Handle form submission logic
          };
        
          return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 gap-x-10">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Register</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Company Name */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="companyName">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your company name"
                    />
                  </div>
        
                  {/* Official Email Address */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
                      Official Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your official email"
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
        
                  {/* Contact Person Name */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="contactPerson">
                      Contact Person Name
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter contact person name"
                    />
                  </div>
        
                  {/* Industry Type */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="industryType">
                      Industry Type
                    </label>
                    <select
                      id="industryType"
                      name="industryType"
                      value={formData.industryType}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="" disabled>Select industry type</option>
                      <option value="IT">IT</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Retail">Retail</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                    </select>
                  </div>
        
                  {/* GSTIN (Optional) */}
                  <div>
                    <label className="block text-gray-600 font-medium mb-2" htmlFor="gstin">
                      GSTIN (Optional)
                    </label>
                    <input
                      type="text"
                      id="gstin"
                      name="gstin"
                      value={formData.gstin}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your GSTIN"
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
export default CompanySignUp;