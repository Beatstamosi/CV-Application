import "../styles/preview.css";
import { FaGlobe, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Preview({ personalDetails, links, skills, experience, education, certificates, interests }) {
    return (
        <div className="preview-container">
            {/* === Header === */}
            <header className="preview-header">
                <h1>{personalDetails.fullName || "Your Name"}</h1>
                <h2>{personalDetails.jobTitle || "Job Title"}</h2>
            </header>

            {/* === Contact & About === */}
            <section className="preview-section contact-about">
                <div className="contact">
                    <p><strong>Email:</strong> {personalDetails.email}</p>
                    <p><strong>Phone:</strong> {personalDetails.phone}</p>
                    <p><strong>Address:</strong> {personalDetails.address}</p>
                    <div className="links">
                        {links.website && (
                            <a href={links.website} target="_blank" rel="noopener noreferrer">
                                <FaGlobe className="icon" />
                            </a>
                        )}
                        {links.linkedin && (
                            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="icon" />
                            </a>
                        )}
                        {links.github && (
                            <a href={links.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub className="icon" />
                            </a>
                        )}
                    </div>
                </div>
                <div className="about">
                    <h3>About Me</h3>
                    <p>{personalDetails.about}</p>
                </div>
            </section>

            {/* === Skills === */}
            <section className="preview-section">
                <h3>Skills</h3>
                <div className="skills">
                    <div>
                        <strong>Languages:</strong>
                        <ul>
                            {skills.languages.filter(Boolean).map((lang, i) => <li key={i}>{lang}</li>)}
                        </ul>
                    </div>
                    <div>
                        <strong>Tools & Technologies:</strong>
                        <ul>
                            {skills.tools.filter(Boolean).map((tool, i) => <li key={i}>{tool}</li>)}
                        </ul>
                    </div>
                    <div>
                        <strong>Other:</strong>
                        <ul>
                            {skills.other.filter(Boolean).map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            {/* === Work Experience === */}
            <section className="preview-section">
                <h3>Work Experience</h3>
                {experience.map((job, i) => (
                    <div key={i} className="experience-entry">
                        <h4>{job.title} at {job.company}</h4>
                        <p><em>{job.duration}</em> — {job.address}</p>
                        <ul>
                            {job.bullets.filter(Boolean).map((bullet, j) => (
                                <li key={j}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* === Education === */}
            <section className="preview-section">
                <h3>Education</h3>
                {education.map((edu, i) => (
                    <div key={i} className="education-entry">
                        <h4>{edu.degree} at {edu.university}</h4>
                        <p><em>{edu.graduation}</em> — {edu.address}</p>
                        <ul>
                            {edu.bullets.filter(Boolean).map((bullet, j) => (
                                <li key={j}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* === Certificates & Interests === */}
            {(certificates || interests) && (
                <section className="preview-section">
                    {certificates && (
                        <div>
                            <h3>Certificates</h3>
                            <p>{certificates}</p>
                        </div>
                    )}
                    {interests && (
                        <div className="container-interests">
                            <h3>Interests</h3>
                            <p>{interests}</p>
                        </div>
                    )}
                </section>
            )}
        </div>
    );
}
