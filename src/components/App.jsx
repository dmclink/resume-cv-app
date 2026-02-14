import { useState } from 'react';
import '../styles/App.css';
import FormField from './FormField.jsx';
import InfoInputSection from './InfoInputSection.jsx';
import EducationInputSection from './EducationInputSection.jsx';
import ExperienceInputSection from './ExperienceInputSection.jsx';
import ResumePreview from './ResumePreview.jsx';

function App() {
	const [educationData, setEducationData] = useState({});
	const [workData, setWorkData] = useState({});
	const [personalInfoData, setPersonalInfoData] = useState({});

	function handlePersonalInfoChange(e) {
		const v = e.target.value;
		const name = e.target.name;
		setPersonalInfoData((prevData) => ({ ...prevData, [name]: v }));
	}

	function handleWorkExperienceChange(e) {
		const v = e.target.value;
		const name = e.target.name;
		setWorkData((prevData) => ({ ...prevData, [name]: v }));
	}

	// TODO: make each section wrapped with a form element and id to access with new FormData() when updating
	return (
		<>
			<h1>Resume Builder</h1>
			<InfoInputSection handlePersonalInfoChange={handlePersonalInfoChange} />
			<ExperienceInputSection handleChange={handleWorkExperienceChange} />
			<EducationInputSection />
			<h2>Preview</h2>
			<ResumePreview
				educationData={educationData}
				personalInfoData={personalInfoData}
				workData={workData}
				className="resume-preview"
			/>
		</>
	);
}

export default App;
