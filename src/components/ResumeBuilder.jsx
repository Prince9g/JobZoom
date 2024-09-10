import React, { useState } from 'react';
import { useRef } from 'react';
import { PDFExport } from "@progress/kendo-react-pdf";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: [{ degree: '', institution: '', year: '' }],
    experience: [{ title: '', company: '', duration: '' }],
    skills: '',
    projects: [{ title: '', description: '' }],
  });

  const pdfExportComponent = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (index, e, field, section) => {
    const updatedSection = formData[section].map((item, i) => {
      if (i === index) {
        return { ...item, [field]: e.target.value };
      }
      return item;
    });
    setFormData({ ...formData, [section]: updatedSection });
  };

  const handleAddMore = (section) => {
    setFormData({
      ...formData,
      [section]: [...formData[section], {}],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const exportPDF = () => {
    pdfExportComponent.current.save();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Resume Builder</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded"
              placeholder="johndoe@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full p-2 border rounded"
              placeholder="123-456-7890"
            />
          </div>

          {/* Education */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            {formData.education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleArrayChange(index, e, 'degree', 'education')}
                  placeholder="Degree"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="institution"
                  value={edu.institution}
                  onChange={(e) => handleArrayChange(index, e, 'institution', 'education')}
                  placeholder="Institution"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="year"
                  value={edu.year}
                  onChange={(e) => handleArrayChange(index, e, 'year', 'education')}
                  placeholder="Year of Graduation"
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddMore('education')}
              className="mt-2 text-blue-500 hover:underline"
            >
              + Add More Education
            </button>
          </div>

          {/* Experience */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
            {formData.experience.map((exp, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  name="title"
                  value={exp.title}
                  onChange={(e) => handleArrayChange(index, e, 'title', 'experience')}
                  placeholder="Job Title"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleArrayChange(index, e, 'company', 'experience')}
                  placeholder="Company"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  name="duration"
                  value={exp.duration}
                  onChange={(e) => handleArrayChange(index, e, 'duration', 'experience')}
                  placeholder="Duration"
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddMore('experience')}
              className="mt-2 text-blue-500 hover:underline"
            >
              + Add More Experience
            </button>
          </div>

          {/* Skills */}
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2">Skills</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Skills (e.g. JavaScript, React, CSS)"
            />
          </div>

          {/* Projects */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Projects</h3>
            {formData.projects.map((project, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  name="title"
                  value={project.title}
                  onChange={(e) => handleArrayChange(index, e, 'title', 'projects')}
                  placeholder="Project Title"
                  className="w-full p-2 border rounded"
                />
                <textarea
                  name="description"
                  value={project.description}
                  onChange={(e) => handleArrayChange(index, e, 'description', 'projects')}
                  placeholder="Project Description"
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddMore('projects')}
              className="mt-2 text-blue-500 hover:underline"
            >
              + Add More Projects
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Preview Resume
          </button>
        </form>

        {/* PDF Export Button */}
        <div className="mt-6">
          <button
            onClick={exportPDF}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Download as PDF
          </button>
        </div>

        {/* Resume Preview */}
        <PDFExport ref={pdfExportComponent} paperSize="A4">
          <div className="p-4 mt-6 border bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold text-center mb-4">{formData.fullName}</h2>
            <p className="text-center">{formData.email} | {formData.phone}</p>
            <hr className="my-4" />

            {/* Education */}
            <h3 className="text-lg font-semibold">Education</h3>
            {formData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <p>{edu.degree} at {edu.institution} ({edu.year})</p>
              </div>
            ))}

            {/* Experience */}
            <h3 className="text-lg font-semibold">Experience</h3>
            {formData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <p>{exp.title} at {exp.company} ({exp.duration})</p>
              </div>
            ))}

            {/* Skills */}
            <h3 className="text-lg font-semibold">Skills</h3>
            <p>{formData.skills}</p>

            {/* Projects */}
            <h3 className="text-lg font-semibold">Projects</h3>
            {formData.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <p><strong>{project.title}</strong></p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </PDFExport>
      </div>
    </div>
  );
};

export default ResumeBuilder;
