import { useState } from 'react';
import '../styles/App.css';
import FormField from './FormField.jsx';
import InfoInputSection from './InfoInputSection.jsx';
import EducationInputSection from './EducationInputSection.jsx';
import ExperienceInputSection from './ExperienceInputSection.jsx';
import ResumePreview from './ResumePreview.jsx';
import SkillsInputSection from './SkillsInputSection.jsx';
import ProfessionalSummaryInputSection from './ProfessionalSummaryInputSection.jsx';
import ProjectsInput from './ProjectsInput.jsx';

function App() {
	const [professionalSummary, setProfessionalSummary] = useState('');
	const [projectData, setProjectData] = useState({
		projects: [{ projectName: '', projectLink: '', projectDescription: '' }],
	});
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

	function handleProjectChange(e) {
		const name = e.target.name;
		const v = e.target.value;
		const idx = Number(e.target.getAttribute('idx'));

		setProjectData((prevData) => {
			const newData = structuredClone(prevData);
			newData.projects[idx][name] = v;
			return newData;
		});
	}

	function handleProjectRemove() {
		setProjectData((prevData) => {
			const newData = structuredClone(prevData);
			newData.projects.pop();

			return newData;
		});
	}

	function handleProjectAdd() {
		setProjectData((prevData) => {
			const newData = structuredClone(prevData);
			newData.projects.push({});

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

		setProfessionalSummary(v);
	}

	// TODO: add a projects section similar to work experience but without dates, let add and remove
	return (
		<>
			<h1>Resume Builder</h1>
			<InfoInputSection handlePersonalInfoChange={handlePersonalInfoChange} />
			<ProfessionalSummaryInputSection handleChange={handleProfessionalSummaryChange} />
			<ProjectsInput
				handleAdd={handleProjectAdd}
				handleRemove={handleProjectRemove}
				handleChange={handleProjectChange}
			/>
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
				projectData={projectData}
				className="resume-preview"
			/>
		</>
	);
}

export default App;
