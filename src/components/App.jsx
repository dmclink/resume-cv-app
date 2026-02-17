import { useState } from 'react';
import { setStateFn, setStateNestedArrayFn, setStateNestedArrayAdd, setStateNestedArrayRemove } from '../utils.jsx';
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
	const [professionalSummary, setProfessionalSummary] = useState({
		professionalSummaryHeadingText: 'Professional Summary',
		professionalSummary: '',
	});
	const [projectData, setProjectData] = useState({
		projectsHeadingText: 'Projects',
		projects: [{ projectName: '', projectLink: '', projectDescription: '' }],
	});
	const [educationData, setEducationData] = useState({
		educationHeadingText: 'Education',
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
		workHeadingText: 'Work Experience',
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
	const [skillsData, setSkillsData] = useState({
		skillsHeadingText: 'Skills',
		skills: '',
	});

	const handlePersonalInfoChange = setStateFn(setPersonalInfoData);
	const handleProfessionalSummaryChange = setStateFn(setProfessionalSummary);

	const handleWorkExperienceChange = setStateNestedArrayFn(setWorkData, 'jobs');
	const handleWorkExperienceRemove = setStateNestedArrayRemove(setWorkData, 'jobs');
	const handleWorkExperienceAdd = setStateNestedArrayAdd(setWorkData, 'jobs');

	const handleProjectChange = setStateNestedArrayFn(setProjectData, 'projects');
	const handleProjectRemove = setStateNestedArrayRemove(setProjectData, 'projects');
	const handleProjectAdd = setStateNestedArrayAdd(setProjectData, 'projects');

	const handleEducationChange = setStateNestedArrayFn(setEducationData, 'schools');
	const handleEducationRemove = setStateNestedArrayRemove(setEducationData, 'schools');
	const handleEducationAdd = setStateNestedArrayAdd(setEducationData, 'schools');

	const handleSkillsChange = setStateFn(setSkillsData);

	return (
		<div className="app">
			<h1 className="title">Resume Builder</h1>
			<h2 className="input-heading">Personal Information</h2>
			<InfoInputSection handlePersonalInfoChange={handlePersonalInfoChange} />
			<h2 className="input-heading">Professional Summary</h2>
			<ProfessionalSummaryInputSection handleChange={handleProfessionalSummaryChange} />
			<h2 className="input-heading">Personal Projects</h2>
			<ProjectsInput
				handleAdd={handleProjectAdd}
				handleRemove={handleProjectRemove}
				handleChange={handleProjectChange}
			/>
			<h2 className="input-heading">Work Experience</h2>
			<ExperienceInputSection
				handleAdd={handleWorkExperienceAdd}
				handleRemove={handleWorkExperienceRemove}
				handleChange={handleWorkExperienceChange}
			/>
			<h2 className="input-heading">Education Information</h2>
			<EducationInputSection
				handleAdd={handleEducationAdd}
				handleRemove={handleEducationRemove}
				handleChange={handleEducationChange}
			/>
			<h2 className="input-heading">Skills</h2>
			<SkillsInputSection handleChange={handleSkillsChange} />
			<h2 className="input-heading">Preview</h2>
			<ResumePreview
				educationData={educationData}
				personalInfoData={personalInfoData}
				workData={workData}
				skillsData={skillsData}
				professionalSummaryData={professionalSummary}
				projectData={projectData}
				className="resume-preview"
			/>
		</div>
	);
}

export default App;
