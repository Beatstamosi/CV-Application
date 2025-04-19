import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import Sidebar from "./components/sidebar";
import Personal from "./components/personal";
import Links from "./components/links";
import Skills from "./components/skills";
import WorkExperience from "./components/work";
import Education from "./components/education";
import Certificates from "./components/certificates";
import Preview from "./components/preview";
import "./styles/App.css";

function App() {
  // === Active View logic ===
  const [activeView, setActiveView] = useState("personal");

  // === Personal Details logic ===
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    about: "",
  });

  // === Links logic ===
  const [links, setLinks] = useState({
    website: "",
    linkedin: "",
    github: "",
  });

  // === Skills logic ===
  const [skills, setSkills] = useState({
    languages: [""],
    tools: [""],
    other: [""],
  });

  const handleSkillChange = (skill, index, newValue) => {
    const updated = [...skills[skill]];
    updated[index] = newValue;
    setSkills({ ...skills, [skill]: updated });
  };

  const addSkill = (skill) => {
    const updated = [...skills[skill]];
    updated.push("");
    setSkills({ ...skills, [skill]: updated });
  };

  const removeSkill = (skill, index) => {
    const updated = [...skills[skill]];
    updated.splice(index, 1);
    if (updated.length === 0) {
      updated.push("");
    }
    setSkills({ ...skills, [skill]: updated });
  };

  // === Work Experience logic ===
  const [experience, setExperience] = useState([
    {
      company: "",
      title: "",
      duration: "",
      address: "",
      bullets: [""],
    },
  ]);

  const handleExperienceChange = (
    index,
    info,
    newValue,
    bulletIndex = null,
  ) => {
    const updatedExperience = [...experience];
    const updatedJob = { ...experience[index] };

    if (info === "bullets" && bulletIndex !== null) {
      const updatedBullets = [...updatedJob.bullets];
      updatedBullets[bulletIndex] = newValue;
      updatedJob.bullets = updatedBullets;
    } else {
      updatedJob[info] = newValue;
    }

    updatedExperience[index] = updatedJob;
    setExperience(updatedExperience);
  };

  const handleAddExperience = () => {
    const newExperience = {
      company: "",
      title: "",
      duration: "",
      address: "",
      bullets: [""],
    };

    setExperience((prev) => [...prev, newExperience]);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    // make sure always one form is shown
    if (updatedExperience.length === 0) {
      const newExperience = {
        company: "",
        title: "",
        duration: "",
        address: "",
        bullets: [""],
      };
      updatedExperience.push(newExperience);
    }

    setExperience(updatedExperience);
  };

  const handleAddBullet = (index) => {
    const updatedExperience = [...experience];
    const updatedJob = { ...experience[index] };
    updatedJob.bullets.push("");

    updatedExperience[index] = updatedJob;
    setExperience(updatedExperience);
  };

  const handleRemoveBullet = (index, bulletIndex) => {
    const updatedExperience = [...experience];
    const updatedJob = { ...experience[index] };
    const updatedBullets = [...updatedJob.bullets];
    updatedBullets.splice(bulletIndex, 1);
    // make sure always one form is shown
    if (updatedBullets.length === 0) updatedBullets.push("");

    updatedJob.bullets = updatedBullets;
    updatedExperience[index] = updatedJob;
    setExperience(updatedExperience);
  };

  // === Education logic ===
  const [education, setEducation] = useState([
    {
      university: "",
      degree: "",
      graduation: "",
      address: "",
      bullets: [""],
    },
  ]);

  const handleEducationChange = (index, info, newValue, bulletIndex = null) => {
    const updatedEducation = [...education];
    const updatedEntry = { ...education[index] };

    if (info === "bullets" && bulletIndex !== null) {
      const updatedBullets = [...updatedEntry.bullets];
      updatedBullets[bulletIndex] = newValue;
      updatedEntry.bullets = updatedBullets;
    } else {
      updatedEntry[info] = newValue;
    }

    updatedEducation[index] = updatedEntry;
    setEducation(updatedEducation);
  };

  const handleAddEducation = () => {
    const newEducation = {
      university: "",
      degree: "",
      graduation: "",
      address: "",
      bullets: [""],
    };

    setEducation((prev) => [...prev, newEducation]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);

    // Always keep at least one form visible
    if (updatedEducation.length === 0) {
      updatedEducation.push({
        university: "",
        degree: "",
        graduation: "",
        address: "",
        bullets: [""],
      });
    }

    setEducation(updatedEducation);
  };

  const handleAddEducationBullet = (index) => {
    const updatedEducation = [...education];
    const updatedEntry = { ...education[index] };
    updatedEntry.bullets.push("");

    updatedEducation[index] = updatedEntry;
    setEducation(updatedEducation);
  };

  const handleRemoveEducationBullet = (index, bulletIndex) => {
    const updatedEducation = [...education];
    const updatedEntry = { ...education[index] };
    const updatedBullets = [...updatedEntry.bullets];

    updatedBullets.splice(bulletIndex, 1);

    // Always keep at least one bullet point
    if (updatedBullets.length === 0) updatedBullets.push("");

    updatedEntry.bullets = updatedBullets;
    updatedEducation[index] = updatedEntry;
    setEducation(updatedEducation);
  };

  // === Certificates, Interests logic ===
  const [certificates, setCertificates] = useState("");
  const [interests, setInterests] = useState("");

  // === Handle pdf logic ===
  const previewRef = useRef();

  const handleDownloadPDF = () => {
    const element = previewRef.current;

    const options = {
      margin: 0.5,
      filename: `${personalDetails.fullName}_CV.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  };

  // === Handle clear CV logic ===
  const clearCV = () => {
    let text = "Are you sure you want to reset your CV?";
    if (confirm(text) === true) {
      setPersonalDetails({
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        address: "",
        about: "",
      });
      setLinks({
        website: "",
        linkedin: "",
        github: "",
      });
      setSkills({
        languages: [""],
        tools: [""],
        other: [""],
      });
      setExperience([
        {
          company: "",
          title: "",
          duration: "",
          address: "",
          bullets: [""],
        },
      ]);
      setEducation([
        {
          university: "",
          degree: "",
          graduation: "",
          address: "",
          bullets: [""],
        },
      ]);
      setCertificates("");
      setInterests("");
      setActiveView("personal");
    }
  };

  return (
    <div className="app-layout">
      <div className="container-sidebar">
        <Sidebar
          onclick={setActiveView}
          activeView={activeView}
          downloadPdf={handleDownloadPDF}
          clearCV={clearCV}
        />
      </div>
      <div className="main-content">
        {activeView === "personal" && (
          <Personal
            personalDetails={personalDetails}
            onChange={setPersonalDetails}
          />
        )}
        {activeView === "links" && <Links links={links} onChange={setLinks} />}
        {activeView === "skills" && (
          <Skills
            skills={skills}
            onChange={handleSkillChange}
            addSkill={addSkill}
            removeSkill={removeSkill}
          />
        )}
        {activeView === "work" && (
          <WorkExperience
            experience={experience}
            experienceChange={handleExperienceChange}
            addExperience={handleAddExperience}
            removeExperience={handleRemoveExperience}
            addBullet={handleAddBullet}
            removeBullet={handleRemoveBullet}
          />
        )}
        {activeView === "education" && (
          <Education
            education={education}
            educationChange={handleEducationChange}
            addEducation={handleAddEducation}
            removeEducation={handleRemoveEducation}
            addBullet={handleAddEducationBullet}
            removeBullet={handleRemoveEducationBullet}
          />
        )}
        {activeView === "certificates" && (
          <Certificates
            certificates={certificates}
            setCertificates={setCertificates}
            interests={interests}
            setInterests={setInterests}
          />
        )}
        {activeView === "preview" && (
          <Preview
            personalDetails={personalDetails}
            links={links}
            skills={skills}
            experience={experience}
            education={education}
            certificates={certificates}
            interests={interests}
            previewRef={previewRef}
            isVisible={activeView === "preview"}
          />
        )}
      </div>
    </div>
  );
}

export default App;
