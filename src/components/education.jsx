import "../styles/education.css";

export default function Education({
  education,
  educationChange,
  addEducation,
  removeEducation,
  addBullet,
  removeBullet,
}) {
  return (
    <div className="container-education">
      {education.map((degree, index) => (
        <Degree
          key={index}
          degree={degree}
          index={index}
          educationChange={educationChange}
          removeEducation={removeEducation}
          addBullet={addBullet}
          removeBullet={removeBullet}
        />
      ))}
      <button className="add-degree" onClick={() => addEducation()}>
        Add another Degree
      </button>
    </div>
  );
}

function Degree({
  degree,
  index,
  educationChange,
  removeEducation,
  addBullet,
  removeBullet,
}) {
  return (
    <div className="container-experience">
      <h2>Degree {index + 1}</h2>
      <div className="container-input-fields">
        <label htmlFor="university" className="degree-label">
          University
          <input
            type="text"
            id="university"
            placeholder="UCLA"
            className="degree-input"
            value={degree.university}
            onChange={(e) =>
              educationChange(index, "university", e.target.value)
            }
          />
        </label>
        <label htmlFor="degree" className="degree-label">
          Degree
          <input
            type="text"
            id="degree"
            placeholder="Bachelor of Agriculture"
            className="degree-input"
            value={degree.degree}
            onChange={(e) => educationChange(index, "degree", e.target.value)}
          />
        </label>
      </div>

      <div className="container-input-fields">
        <label htmlFor="duration" className="degree-label">
          Graduation
          <input
            type="text"
            id="duration"
            placeholder="DD/MM/YYYY"
            className="degree-input"
            value={degree.graduation}
            onChange={(e) =>
              educationChange(index, "graduation", e.target.value)
            }
          />
        </label>
        <label htmlFor="address" className="degree-label">
          <p>
            Address <span className="optional">optional</span>
          </p>
          <input
            type="text"
            id="address"
            placeholder="City, Street, Country"
            className="degree-input"
            value={degree.address}
            onChange={(e) => educationChange(index, "address", e.target.value)}
          />
        </label>
      </div>
      <label htmlFor="bullet" className="job-label">
        Bullet Points
      </label>
      {degree.bullets.map((bullet, bulletIndex) => (
        <BulletPoint
          key={bulletIndex}
          bullet={bullet}
          bulletIndex={bulletIndex}
          removeBullet={removeBullet}
          educationChange={educationChange}
          degreeIndex={index}
        />
      ))}
      <button className="add-bullet-btn" onClick={() => addBullet(index)}>
        Add bullet
      </button>
      <button
        className="remove-experience"
        onClick={() => removeEducation(index)}
      >
        Remove Degree
      </button>
      <hr />
    </div>
  );
}

function BulletPoint({
  bullet,
  bulletIndex,
  removeBullet,
  educationChange,
  degreeIndex,
}) {
  return (
    <div className="container-input-fields">
      <input
        type="text"
        id="bullet"
        placeholder="List honors & achievements"
        className="degree-input"
        value={bullet}
        onChange={(e) =>
          educationChange(degreeIndex, "bullets", e.target.value, bulletIndex)
        }
      />
      <button
        className="remove-bullet-btn"
        onClick={() => removeBullet(degreeIndex, bulletIndex)}
      >
        -
      </button>
    </div>
  );
}
