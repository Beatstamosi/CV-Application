import "../styles/preview.css"

export default function Preview({ personalDetails, links, skills }) {
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
        </div>
        
    );
}