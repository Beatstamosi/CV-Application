import "../styles/personal.css"

export default function Personal({ personalDetails, onChange }) {
    return (
        <div className="container-personal-form">
            <h2>Personal Details</h2>
            <div className="container-input">
                <label htmlFor="fullName" className="personal-label">
                    Full Name
                    <input
                        type="text"
                        autoComplete="name"
                        id="fullName"
                        placeholder="John Doe"
                        className="personal-input"
                        value={personalDetails.fullName}
                        onChange={(e) => onChange({...personalDetails, fullName: e.target.value})}    
                    />
                </label>
                <label htmlFor="job-title" className="personal-label">
                    <p>Job Title</p>
                    <input type="text"
                        id="job-title"
                        placeholder="Software Developer"
                        className="personal-input"
                        value={personalDetails.jobTitle}
                        onChange={(e) => onChange({...personalDetails, jobTitle: e.target.value})} 
                    />
                </label>
            </div>
            <div className="container-input">
                <label htmlFor="email" className="personal-label">
                    <p>E-Mail <span className="optional">optional</span></p>
                    <input
                        type="email"
                        id="email"
                        placeholder="john.doe@example.com"
                        className="personal-input"
                        value={personalDetails.email}
                        onChange={(e) => onChange({...personalDetails, email: e.target.value})}
                    />
                </label>
                <label htmlFor="phone" className="personal-label">
                    <p>Phone <span className="optional">optional</span></p>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="+1 1324253698"
                        className="personal-input"
                        value={personalDetails.phone}
                        onChange={(e) => onChange({...personalDetails, phone: e.target.value})}
                    />
                </label>
            </div>
            <div className="container-input">
                <label htmlFor="address" className="personal-label">
                    <p>Address <span className="optional">optional</span></p>
                    <input
                        type="text"
                        id="address"
                        placeholder="Example Road 35"
                        className=" personal-input"
                        value={personalDetails.address}
                        onChange={(e) => onChange({...personalDetails, address: e.target.value})}
                    />
                </label>
            </div>
            <div className="container-input">
                <label htmlFor="about" className="personal-label">
                    <p>About you <span className="optional">optional</span></p>
                    <textarea
                        name="about"
                        id="about"
                        placeholder="Introduce yourself"
                        className=" personal-input big high"
                        value={personalDetails.about}
                        onChange={(e) => onChange({...personalDetails, about: e.target.value})}
                    ></textarea>
                </label>
            </div>
        </div>
    )
}