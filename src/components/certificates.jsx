import "../styles/certificates.css";

export default function Certificates({
  certificates,
  setCertificates,
  interests,
  setInterests,
}) {
  return (
    <div className="container-certificates">
      <h2>Certificates & Interests </h2>
      <label htmlFor="certificates" className="certificates-label">
        Certificates
        <textarea
          id="certificates"
          placeholder="List any relevant certificates"
          className="certificates-input"
          value={certificates}
          onChange={(e) => setCertificates(e.target.value)}
        />
      </label>
      <label htmlFor="interests" className="certificates-label">
        Interests
        <textarea
          id="interests"
          placeholder="Traveling, Sports, Reading"
          className="certificates-input"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
      </label>
    </div>
  );
}
