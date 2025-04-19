import { Tooltip } from 'react-tooltip'
import { FaUser, FaLink, FaBrain, FaBriefcase, FaGraduationCap, FaAward, FaEye, FaTrash, FaFileDownload } from "react-icons/fa";
import "../styles/sidebar.css"

export default function Sidebar({ activeView, onclick, downloadPdf, clearCV }) {
    return (
        <div className="sidebar">
            <div className="sidebar-block">
                <button
                    data-tooltip-id="personal"
                    data-tooltip-content="Personal Information"
                    data-tooltip-place="right"
                    onClick={() => onclick("personal")}
                    className={activeView === "personal" ? "active" : ""}
                >
                    <FaUser className="iconStyle"/>
                </button>
                <Tooltip id="personal" className="tooltip"/>
                <button
                    data-tooltip-id="links"
                    data-tooltip-content="Links"
                    data-tooltip-place="right"
                    onClick={() => onclick("links")}
                    className={activeView === "links" ? "active" : ""}
                >
                    <FaLink className="iconStyle"/>
                </button>
                <Tooltip id="links" className="tooltip"/>
                <button
                    data-tooltip-id="skills"
                    data-tooltip-content="Skills"
                    data-tooltip-place="right"
                    onClick={() => onclick("skills")}
                    className={activeView === "skills" ? "active" : ""}
                >
                    <FaBrain className="iconStyle"/>
                </button>
                <Tooltip id="skills" className="tooltip"/>
                <button
                    data-tooltip-id="work"
                    data-tooltip-content="Work Experience"
                    data-tooltip-place="right"
                    onClick={() => onclick("work")}
                    className={activeView === "work" ? "active" : ""}
                >
                    <FaBriefcase className="iconStyle"/>
                </button>
                <Tooltip id="work" className="tooltip"/>
                <button
                    data-tooltip-id="education"
                    data-tooltip-content="Education"
                    data-tooltip-place="right"
                    onClick={() => onclick("education")}
                    className={activeView === "education" ? "active" : ""}
                >
                    <FaGraduationCap className="iconStyle"/>
                </button>
                <Tooltip id="education" className="tooltip"/>
                <button
                    data-tooltip-id="certificates"
                    data-tooltip-content="Certificates & Interest"
                    data-tooltip-place="right"
                    onClick={() => onclick("certificates")}
                    className={activeView === "certificates" ? "active" : ""}
                >
                    <FaAward className="iconStyle"/>
                </button>
                <Tooltip id="certificates" className="tooltip"/>
            </div>

            <div className="sidebar-block">
                <button
                    data-tooltip-id="preview"
                    data-tooltip-content="Live Preview"
                    data-tooltip-place="right"
                    onClick={() => onclick("preview")}
                    className={activeView === "preview" ? "active" : ""}
                >
                    <FaEye className="iconStyle"/>
                </button>
                <Tooltip id="preview" className="tooltip"/>
                <button
                    data-tooltip-id="download"
                    data-tooltip-content="Download as PDF"
                    data-tooltip-place="right"
                    onClick={(e) => {
                        onclick("preview");
                        setTimeout(() => {
                            downloadPdf();
                        }, 300) // set timeout to wait for preview to load so that previewRef is accessible
                        e.currentTarget.blur();
                    }}
                >
                    <FaFileDownload className="iconStyle"/>
                </button>
                <Tooltip id="download" className="tooltip"/>
            </div>
            
            <div className="sidebar-block">
                <button
                    data-tooltip-id="reset"
                    data-tooltip-content="Reset CV"
                    data-tooltip-place="right"
                    onClick={(e) => {
                        clearCV();
                        e.currentTarget.blur();
                     }}
                >
                    <FaTrash className="iconStyle"/>
                </button>
                <Tooltip id="reset" className="tooltip"/>
            </div>
        </div>
    )
}