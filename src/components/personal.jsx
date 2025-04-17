import "../styles/personal.css"

export default function Personal() {
    return (
        <div className="container-form">
            <h2>Personal Details</h2>
            <div className="container-input-fields">
                <label htmlFor="fullName" className="personal-label">
                    Full Name
                    <input type="text" id="fullName" placeholder="John Doe" className="personal-input"/>
                </label>
                <label htmlFor="job-title" className="personal-label">
                    <p>Job Title</p>
                    <input type="text" id="job-title" placeholder="Software Developer" className="personal-input"/>
                </label>
            </div>
            <div className="container-input-fields">
                <label htmlFor="email" className="personal-label">
                    <p>E-Mail <span className="optional">optional</span></p>
                    <input type="email" id="email" placeholder="john.doe@example.com" className="personal-input"/>
                </label>
                <label htmlFor="phone" className="personal-label">
                    <p>Phone <span className="optional">optional</span></p>
                    <input type="tel" id="phone" placeholder="+1 1324253698" className="personal-input"/>
                </label>
            </div>
            <div className="container-input-fields">
                <label htmlFor="address" className="personal-label">
                    <p>Address <span className="optional">optional</span></p>
                    <input type="text" id="email" placeholder="Example Road 35" className=" personal-input big"/>
                </label>
            </div>
            <div className="container-input-fields">
                <label htmlFor="about" className="personal-label">
                    <p>About you <span className="optional">optional</span></p>
                    <textarea name="about" id="about" placeholder="Introduce yourself" className=" personal-input big high"></textarea>
                </label>
            </div>
        </div>
    )
}