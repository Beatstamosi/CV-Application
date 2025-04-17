import "../styles/work.css"

export default function WorkExperience() {
    return (
        <div className="container-work-experience">
            {/* TODO: Map through workexperience to display */}
            <Job />
            {/* TODO: Make button add another Job */}
            <button className="add-work-experience">Add another Work Experience</button>
        </div>
    )
}

// TODO: Add number to job based on index, if job 1 add "Most recent first";
function Job() {
    return(
        <div className="container-experience">
            <h2>Experience </h2>
            <div className="container-input-fields">
                <label htmlFor="company" className="job-label">
                    Company
                    <input type="text" id="company" placeholder="E-Corp" className="job-input"/>
                </label>
                <label htmlFor="job-title" className="job-label">
                    Job Title
                    <input type="text" id="job-title" placeholder="Software Developer" className="job-input"/>
                </label>
            </div>

            <div className="container-input-fields">
                <label htmlFor="duration" className="job-label">
                    Duration
                    <input type="text" id="duration" placeholder="MM / YY - MM / YY" className="job-input"/>
                </label>
                <label htmlFor="address" className="job-label">
                    <p>Address <span className="optional">optional</span></p>
                    <input type="text" id="address" placeholder="City, Street, Country" className="job-input"/>
                </label>
            </div>
            <BulletPoint />
            <button className="add-bullet-btn">Add bullet</button>
            <button className="remove-experience">Remove Experience</button>
            <hr />
        </div>
    )
}

function BulletPoint() {
    return (
        <div className="container-input-fields">
            <label htmlFor="bullet" className="job-label">
                Bullet Point
                <input type="text" id="bullet" placeholder="Short info about tasks" className="job-input"/>
            </label>
            <button className="remove-bullet-btn">-</button>
        </div>
    )
}