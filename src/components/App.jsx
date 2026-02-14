import { useState } from 'react';
import '../styles/App.css';
import FormField from './FormField.jsx';
import InfoInputSection from './InfoInputSection.jsx';
import EducationInputSection from './EducationInputSection.jsx';
import ExperienceInputSection from './ExperienceInputSection.jsx';
import ResumePreview from './ResumePreview.jsx';

function App() {
	const [educationData, setEducationData] = useState({});
	const [workData, setWorkData] = useState({
		jobs: [
			{
				workEmployerName: '',
				workTitle: '',
				workFrom: '',
				workTo: '',
				workDescription: '',
			},
		],
	});
	const [personalInfoData, setPersonalInfoData] = useState({
		location: '',
		email: '',
		github: '',
		linkedin: '',
		phone: '',
	});

	function handlePersonalInfoChange(e) {
		const v = e.target.value;
		const name = e.target.name;

		setPersonalInfoData((prevData) => ({ ...prevData, [name]: v }));
	}

	function handleWorkExperienceChange(e) {
		const v = e.target.value;
		const name = e.target.name;
		const i = Number(e.target.getAttribute('idx'));

		setWorkData((prevData) => {
			const newData = structuredClone(prevData);
			newData.jobs[i] = { ...newData.jobs[i], [name]: v };
			return newData;
		});
	}

	function handleWorkExperienceRemove() {
		setWorkData((prevData) => {
			const newData = structuredClone(prevData);
			newData.jobs.pop();

			return newData;
		});
	}

	// TODO: make each section wrapped with a form element and id to access with new FormData() when updating
	return (
		<>
			<h1>Resume Builder</h1>
			<InfoInputSection handlePersonalInfoChange={handlePersonalInfoChange} />
			<ExperienceInputSection
				handleRemove={handleWorkExperienceRemove}
				handleChange={handleWorkExperienceChange}
			/>
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
