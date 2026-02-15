import { useState } from 'react';
import '../styles/App.css';
import FormField from './FormField.jsx';
import InfoInputSection from './InfoInputSection.jsx';
import EducationInputSection from './EducationInputSection.jsx';
import ExperienceInputSection from './ExperienceInputSection.jsx';
import ResumePreview from './ResumePreview.jsx';
import SkillsInputSection from './SkillsInputSection.jsx';
import ProfessionalSummaryInputSection from './ProfessionalSummaryInputSection.jsx';

function App() {
	const [professionalSummary, setProfessionalSummary] = useState('');
	const [educationData, setEducationData] = useState({
		schools: [
			{
				schoolName: '',
				schoolDegreeName: '',
				schoolDegreeHonors: '',
				schoolFrom: '',
				schoolTo: '',
				schoolDescription: '',
			},
		],
	});
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

	const [skillsData, setSkillsData] = useState('');

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

	function handleWorkExperienceAdd() {
		setWorkData((prevData) => {
			const newData = structuredClone(prevData);
			newData.jobs.push({});

			return newData;
		});
	}

	function handleEducationChange(e) {
		const name = e.target.name;
		const v = e.target.value;
		const idx = Number(e.target.getAttribute('idx'));

		setEducationData((prevData) => {
			const newData = structuredClone(prevData);
			newData.schools[idx][name] = v;
			return newData;
		});
	}

	function handleEducationRemove() {
		setEducationData((prevData) => {
			const newData = structuredClone(prevData);
			newData.schools.pop();

			return newData;
		});
	}

	function handleEducationAdd() {
		setEducationData((prevData) => {
			const newData = structuredClone(prevData);
			newData.schools.push({});

			return newData;
		});
	}

	function handleSkillsChange(e) {
		const v = e.target.value;

		setSkillsData(v);
	}
	function handleProfessionalSummaryChange(e) {
		const v = e.target.value;
		console.log(v);

		setProfessionalSummary(v);
	}

	// TODO: make each section wrapped with a form element and id to access with new FormData() when updating
	return (
		<>
			<h1>Resume Builder</h1>
			<InfoInputSection handlePersonalInfoChange={handlePersonalInfoChange} />
			<ProfessionalSummaryInputSection handleChange={handleProfessionalSummaryChange} />
			<ExperienceInputSection
				handleAdd={handleWorkExperienceAdd}
				handleRemove={handleWorkExperienceRemove}
				handleChange={handleWorkExperienceChange}
			/>
			<EducationInputSection
				handleAdd={handleEducationAdd}
				handleRemove={handleEducationRemove}
				handleChange={handleEducationChange}
			/>
			<SkillsInputSection handleChange={handleSkillsChange} />
			<h2>Preview</h2>
			<ResumePreview
				educationData={educationData}
				personalInfoData={personalInfoData}
				workData={workData}
				skillsData={skillsData}
				professionalSummaryData={professionalSummary}
				className="resume-preview"
			/>
		</>
	);
}

export default App;
