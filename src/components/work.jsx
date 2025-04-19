import "../styles/work.css";

export default function WorkExperience({
  experience,
  experienceChange,
  addExperience,
  removeExperience,
  addBullet,
  removeBullet,
}) {
  return (
    <div className="container-work-experience">
      {experience.map((job, index) => (
        <Job
          key={index}
          job={job}
          index={index}
          experienceChange={experienceChange}
          addBullet={addBullet}
          removeExperience={removeExperience}
          removeBullet={removeBullet}
        />
      ))}
      <button className="add-work-experience" onClick={() => addExperience()}>
        Add another Work Experience
      </button>
    </div>
  );
}

function Job({
  job,
  index,
  experienceChange,
  addBullet,
  removeExperience,
  removeBullet,
}) {
  return (
    <div className="container-experience">
      <h2>
        Experience {index + 1}{" "}
        {index === 0 && <span className="recent">Most recent first</span>}
      </h2>
      <div className="container-input-fields">
        <label htmlFor="company" className="job-label">
          Company
          <input
            type="text"
            id="company"
            placeholder="E-Corp"
            className="job-input"
            value={job.company}
            onChange={(e) => experienceChange(index, "company", e.target.value)}
          />
        </label>
        <label htmlFor="job-title" className="job-label">
          Job Title
          <input
            type="text"
            id="job-title"
            placeholder="Software Developer"
            className="job-input"
            value={job.title}
            onChange={(e) => experienceChange(index, "title", e.target.value)}
          />
        </label>
      </div>

      <div className="container-input-fields">
        <label htmlFor="duration" className="job-label">
          Duration
          <input
            type="text"
            id="duration"
            placeholder="MM / YY - MM / YY"
            className="job-input"
            value={job.duration}
            onChange={(e) =>
              experienceChange(index, "duration", e.target.value)
            }
          />
        </label>
        <label htmlFor="address" className="job-label">
          <p>
            Address <span className="optional">optional</span>
          </p>
          <input
            type="text"
            id="address"
            placeholder="City, Street, Country"
            className="job-input"
            value={job.address}
            onChange={(e) => experienceChange(index, "address", e.target.value)}
          />
        </label>
      </div>
      <label htmlFor="bullet" className="job-label">
        Bullet Points
      </label>
      {job.bullets.map((bullet, bulletIndex) => (
        <BulletPoint
          key={bulletIndex}
          bullet={bullet}
          bulletIndex={bulletIndex}
          removeBullet={removeBullet}
          experienceChange={experienceChange}
          jobIndex={index}
        />
      ))}
      <button className="add-bullet-btn" onClick={() => addBullet(index)}>
        Add bullet
      </button>
      <button
        className="remove-experience"
        onClick={() => removeExperience(index)}
      >
        Remove Experience
      </button>
      <hr />
    </div>
  );
}

function BulletPoint({
  bullet,
  bulletIndex,
  removeBullet,
  experienceChange,
  jobIndex,
}) {
  return (
    <div className="container-input-fields">
      <input
        type="text"
        id="bullet"
        placeholder="Short info about tasks"
        className="job-input"
        value={bullet}
        onChange={(e) =>
          experienceChange(jobIndex, "bullets", e.target.value, bulletIndex)
        }
      />
      <button
        className="remove-bullet-btn"
        onClick={() => removeBullet(jobIndex, bulletIndex)}
      >
        -
      </button>
    </div>
  );
}
