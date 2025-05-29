import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";
const JobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    description,
    company,
    salaryRange,
    company_logo,
    requirements,
  } = job;
  return (
    <div className="card bg-base-100  shadow-md">
      <div className="flex gap-2 pl-3 items-center">
        <figure>
          <img className="w-16 h-16" src={company_logo} alt="company_logo" />
        </figure>
        <div>
          <h3 className="text-3xl">{company}</h3>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-lg font-medium">
          Salary:{salaryRange.min}-{salaryRange.max}
        </p>
        <p className="my-1 text-justify">{description}</p>
        <div className="card-actions ">
          {requirements.map((skill, idx) => (
            <div className="badge badge-outline" key={idx}>
              {skill}
            </div>
          ))}
        </div>
        <div className=" my-3">
        <Link to={`jobs/${_id}`}>
          <button className="btn w-full btn-info text-white">Show Details</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
