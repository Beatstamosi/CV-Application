import "../styles/links.css";

export default function Links({ links, onChange }) {
  return (
    <div className="container-form">
      <h2>Relevant Links</h2>
      <div className="container-links">
        <div className="container-headers">
          <h3>Platform</h3>
          <h3>URL</h3>
        </div>
        <hr />
        <div className="row">
          <span>Website</span>
          <input
            type="url"
            className="links-input long"
            value={links.website}
            onChange={(e) => onChange({ ...links, website: e.target.value })}
          />
        </div>
        <div className="row">
          <span>Linkedin</span>
          <input
            type="url"
            className="links-input long"
            value={links.linkedin}
            onChange={(e) => onChange({ ...links, linkedin: e.target.value })}
          />
        </div>
        <div className="row">
          <span>GitHub</span>
          <input
            type="url"
            className="links-input long"
            value={links.github}
            onChange={(e) => onChange({ ...links, github: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
