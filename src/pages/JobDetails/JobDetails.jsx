import {
    FaArrowRight,
    FaBookmark,
    FaBriefcase,
    FaBuilding,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaRegClock
} from "react-icons/fa";
import { useLoaderData } from "react-router";
const JobDetails = () => {
  const job = useLoaderData();
  const {
    _id,
    title,
    category,
    location,
    jobType,
    applicationDeadline,
    description,
    company,
    salaryRange,
    company_logo,
    requirements,
  } = job;
  // Format deadline date
  const formattedDeadline = new Date(
    applicationDeadline
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="px-6 py-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center">
              {company_logo && (
                <img
                  className="h-16 w-16 object-contain mr-4"
                  src={company_logo}
                  alt={`${company} logo`}
                  onError={(e) => {
                    e.target.style.display = "none"; // Hide if image fails to load
                  }}
                />
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {title}
                </h1>
                <p className="text-lg text-gray-600 flex items-center">
                  <FaBuilding className="mr-2 text-gray-400" /> {company}
                </p>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {category}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="px-6 py-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Column - Job Details */}
              <div className="md:col-span-2">
                {/* Meta Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{location}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBriefcase className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{jobType}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMoneyBillWave className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">Salary:{salaryRange.min}-{salaryRange.max}</span>
                  </div>
                  <div className="flex items-center">
                    <FaRegClock className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">
                      Apply by {formattedDeadline}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Job Description
                  </h2>
                  <div className="prose max-w-none text-gray-600">
                    {job.description.split("\n").map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Requirements
                  </h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Apply/Company Info */}
              <div className="space-y-6">
                {/* Apply Card */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Apply for this position
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Applications will be accepted until {formattedDeadline}
                  </p>
                  <button
                    type="button"
                    className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Apply Now <FaArrowRight className="ml-2" />
                  </button>
                </div>

                {/* Company Card */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    About {company}
                  </h3>
                  <div className="flex items-center mb-4">
                    {company_logo && (
                      <img
                        className="h-12 w-12 object-contain mr-3"
                        src={company_logo}
                        alt={`${company} logo`}
                        onError={(e) => {
                          e.target.style.display = "none"; // Hide if image fails to load
                        }}
                      />
                    )}
                    <h4 className="text-md font-medium text-gray-900">
                      {company}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with Apply Button */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Apply for this job <FaArrowRight className="ml-2" />
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              <FaBookmark className="mr-2" /> Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobDetails;
