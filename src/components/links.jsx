import "../styles/links.css"

export default function Links() {
    return (
        <div className="container-form">
            <h2>Relevant Links</h2>
            <div className="container-links">
                <div className="container-headers">
                    <h3>Platform</h3>
                    <h3>URL</h3>
                    <h3>Text</h3>
                </div>
                <hr />
                <div className="row">
                    <span>Website</span>
                    <input type="url" className="links-input long" />
                    <input type="text" className="links-input short"/>
                </div>
                <div className="row">
                    <span>Linkedin</span>
                    <input type="url" className="links-input long" />
                    <input type="text" className="links-input short"/>
                </div>
                <div className="row">
                    <span>GitHub</span>
                    <input type="url" className="links-input long" />
                    <input type="text" className="links-input short"/>
                </div>
            </div>

        </div>
    )
}