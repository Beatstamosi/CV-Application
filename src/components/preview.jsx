import "../styles/preview.css"

export default function Preview({ personalDetails, links, skills, experience, education, certificates, interests }) {
    return (
        <div className="container-preview">
            <div>
                {Object.entries(personalDetails).map(([key, value], i) => <p key={i}>{key}: {value}</p>) }
            </div>
            <div>
                {Object.entries(links).map(([key, value], i) => <p key={i}>{key}: {value}</p>) }
            </div>
            <div>
                {Object.entries(skills).map(([key, value], i) => <p key={i}>{key}: {value.map((element, index) => <p key={index}>{element}</p>)}</p>) }
            </div>
            <div>
                {experience.map((item, i) => (
                    <div key={i}>
                    {Object.entries(item).map(([key, value], j) => (
                        <div key={j}>
                        {Array.isArray(value) ? (
                            <div>
                            <p>{key}:</p>
                            {value.map((element, k) => (
                                <p key={k} style={{ marginLeft: '1rem' }}>- {element}</p>
                            ))}
                            </div>
                        ) : (
                            <p>{key}: {value}</p>
                        )}
                        </div>
                    ))}
                    </div>
                ))}
            </div>
            <div>
                {education.map((item, i) => (
                    <div key={i}>
                    {Object.entries(item).map(([key, value], j) => (
                        <div key={j}>
                        {Array.isArray(value) ? (
                            <div>
                            <p>{key}:</p>
                            {value.map((element, k) => (
                                <p key={k} style={{ marginLeft: '1rem' }}>- {element}</p>
                            ))}
                            </div>
                        ) : (
                            <p>{key}: {value}</p>
                        )}
                        </div>
                    ))}
                    </div>
                ))}
            </div>
            <div>
                <p>Certificates: {certificates}</p>
            </div>
            <div>
                <p>Interests: {interests}</p>
            </div>
        </div>
    );
}