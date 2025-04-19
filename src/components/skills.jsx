import "../styles/skills.css";

export default function Skills({ skills, onChange, addSkill, removeSkill }) {
  return (
    <div className="container-form">
      <div className="container-skillset languages">
        <h3>Languages</h3>
        <hr />
        {skills.languages.map((language, index) => (
          <SkillInput
            key={index}
            value={language}
            skill={"languages"}
            index={index}
            onChange={onChange}
            removeSkill={removeSkill}
          />
        ))}
        <ButtonAddSkill addSkill={addSkill} skill={"languages"} />
      </div>

      <div className="container-skillset tools">
        <h3>Tools & Technologies</h3>
        <hr />
        {skills.tools.map((tool, index) => (
          <SkillInput
            key={index}
            value={tool}
            skill={"tools"}
            index={index}
            onChange={onChange}
            removeSkill={removeSkill}
          />
        ))}
        <ButtonAddSkill addSkill={addSkill} skill={"tools"} />
      </div>

      <div className="container-skillset other">
        <h3>Other Relevant Skills</h3>
        <hr />
        {skills.other.map((other, index) => (
          <SkillInput
            key={index}
            value={other}
            skill={"other"}
            index={index}
            onChange={onChange}
            removeSkill={removeSkill}
          />
        ))}
        <ButtonAddSkill addSkill={addSkill} skill={"other"} />
      </div>
    </div>
  );
}

function SkillInput({ value, skill, index, onChange, removeSkill }) {
  return (
    <div className="container-skill-input">
      <input
        type="text"
        placeholder="Enter Skill"
        className="enter-skill-input"
        value={value}
        onChange={(e) => onChange(skill, index, e.target.value)}
      />
      <button
        className="remove-skill-btn"
        onClick={() => removeSkill(skill, index)}
      >
        Remove
      </button>
    </div>
  );
}

function ButtonAddSkill({ addSkill, skill }) {
  return (
    <button className="btn-add-skill" onClick={() => addSkill(skill)}>
      Add another Skill
    </button>
  );
}
