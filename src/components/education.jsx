import "../styles/education.css"

export default function Education() {
    return (
        <div className="container-education">
            {/* TODO: Map through education to display */}
            <Degree />
            {/* TODO: Make button render another Degree */}
            <button className="add-degree">Add another Degree</button>
        </div>
    )
}

// TODO: Add number to degree based on index, if degree 1 add "Most recent first";
function Degree() {
    return(
        <div className="container-experience">
            <h2>Degree </h2>
            <div className="container-input-fields">
                <label htmlFor="university" className="degree-label">
                    University
                    <input type="text" id="university" placeholder="UCLA" className="degree-input"/>
                </label>
                <label htmlFor="degree" className="degree-label">
                    Degree
                    <input type="text" id="degree" placeholder="Bachelor of Agriculture" className="degree-input"/>
                </label>
            </div>

            <div className="container-input-fields">
                <label htmlFor="duration" className="degree-label">
                    Graduation
                    <input type="text" id="duration" placeholder="DD/MM/YYYY" className="degree-input"/>
                </label>
                <label htmlFor="address" className="degree-label">
                    <p>Address <span className="optional">optional</span></p>
                    <input type="text" id="address" placeholder="City, Street, Country" className="degree-input"/>
                </label>
            </div>
            <BulletPoint />
            <button className="add-bullet-btn">Add bullet</button>
            <button className="remove-experience">Remove Degree</button>
            <hr />
        </div>
    )
}

function BulletPoint() {
    return (
        <div className="container-input-fields">
            <label htmlFor="bullet" className="degree-label">
                Bullet Point
                <input type="text" id="bullet" placeholder="List honors & achievements" className="degree-input"/>
            </label>
            <button className="remove-bullet-btn">-</button>
        </div>
    )
}