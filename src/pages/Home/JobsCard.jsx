import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";
const JobsCard = ({ job }) => {
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
  return (
    <div className="card bg-base-100  shadow-md">
      <div className="flex gap-2 pl-3">
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
        <p className="text-lg">
          Salary:{salaryRange.min}-{salaryRange.max}
        </p>
        <p>{description}</p>
        <div className="card-actions ">
          {requirements.map((skill, idx) => (
            <div className="badge badge-outline" key={idx}>
              {skill}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end">
        <Link to={`jobs/${_id}`}>
          <button className="btn btn-primary">Apply Now</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
