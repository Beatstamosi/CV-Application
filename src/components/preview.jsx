export default function Preview({ personalDetails }) {
    return (
        <div>
            {Object.entries(personalDetails).map(([key, value], i) => <p key={i}>{key}: {value}</p>) }
        </div>
    );
}