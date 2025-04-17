import "../styles/skills.css"

export default function Skills() {
    return (
        <div className="container-form">
            <div className="container-skillset languages">
                <h3>Languages</h3>
                <hr />
                {/* TODO: Render Input via states.map */}
                <SkillInput />
                <ButtonAddSkill />
            </div>

            <div className="container-skillset tools">
                <h3>Tools & Technologies</h3>
                <hr />
                {/* TODO: Render Input via states.map */}
                <SkillInput />
                <ButtonAddSkill />
            </div>

            <div className="container-skillset other">
                <h3>Other Relevant Skills</h3>
                <hr />
                {/* TODO: Render Input via states.map */}
                <SkillInput />
                <ButtonAddSkill />
            </div>
        </div>
    )
}

// TODO: Add Functionality
function SkillInput() {
    return (
        <div className="container-skill-input">
            <input type="text" placeholder="Enter Skill" className="enter-skill-input"/>
            <button className="remove-skill-btn">Remove</button>
        </div>
    )
}

// TODO: Add Functionality
function ButtonAddSkill() {
    return (
        <>
        <button className="btn-add-skill">Add another Skill</button>
        </>
    )
}