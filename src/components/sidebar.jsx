import { Tooltip } from 'react-tooltip'
import { FaUser, FaLink, FaBrain, FaBriefcase, FaGraduationCap, FaAward, FaEye, FaTrash, FaFileDownload } from "react-icons/fa";
import "../styles/sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-block">
                <button
                    data-tooltip-id="personal"
                    data-tooltip-content="Personal Information"
                    data-tooltip-place="right"
                >
                    <FaUser className="iconStyle"/>
                </button>
                <Tooltip id="personal" className="tooltip"/>
                <button
                    data-tooltip-id="links"
                    data-tooltip-content="Links"
                    data-tooltip-place="right"
                >
                    <FaLink className="iconStyle"/>
                </button>
                <Tooltip id="links" className="tooltip"/>
                <button
                    data-tooltip-id="skills"
                    data-tooltip-content="Skills"
                    data-tooltip-place="right"
                >
                    <FaBrain className="iconStyle"/>
                </button>
                <Tooltip id="skills" className="tooltip"/>
                <button
                    data-tooltip-id="work"
                    data-tooltip-content="Work Experience"
                    data-tooltip-place="right"
                >
                    <FaBriefcase className="iconStyle"/>
                </button>
                <Tooltip id="work" className="tooltip"/>
                <button
                    data-tooltip-id="education"
                    data-tooltip-content="Education"
                    data-tooltip-place="right"
                >
                    <FaGraduationCap className="iconStyle"/>
                </button>
                <Tooltip id="education" className="tooltip"/>
                <button
                    data-tooltip-id="certificates"
                    data-tooltip-content="Certificates & Interest"
                    data-tooltip-place="right"
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
                >
                    <FaEye className="iconStyle"/>
                </button>
                <Tooltip id="preview" className="tooltip"/>
                <button
                    data-tooltip-id="download"
                    data-tooltip-content="Download as PDF"
                    data-tooltip-place="right"
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
                >
                    <FaTrash className="iconStyle"/>
                </button>
                <Tooltip id="reset" className="tooltip"/>
            </div>
            
        </div>
    )
}