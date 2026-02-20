import { useState } from 'react';
import { setStateFn, setStateNestedArrayFn, setStateNestedArrayAdd, setStateNestedArrayRemove } from '../utils.jsx';
import '../styles/App.css';
import InfoInputSection from './InfoInputSection.jsx';
import EducationInputSection from './EducationInputSection.jsx';
import ExperienceInputSection from './ExperienceInputSection.jsx';
import ResumePreview from './ResumePreview.jsx';
import SkillsInputSection from './SkillsInputSection.jsx';
import ProfessionalSummaryInputSection from './ProfessionalSummaryInputSection.jsx';
import ProjectsInput from './ProjectsInput.jsx';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
			<h1 className="title">Resume Generator</h1>

			<div className="layout-grid">
				<div className="input-forms">
					<h2 className="input-heading">Input Forms</h2>
					<Accordion className="Accordion">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon className="ExpandMoreIcon" />}
							aria-controls="panel0-content"
							id="panel0-header"
						>
							<h2 className="input-heading">Personal Information</h2>
						</AccordionSummary>
						<AccordionDetails>
							<InfoInputSection handlePersonalInfoChange={handlePersonalInfoChange} />
						</AccordionDetails>
					</Accordion>

					<Accordion className="Accordion">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon className="ExpandMoreIcon" />}
							aria-controls="panel1-content"
							id="panel1-header"
						>
							<h2 className="input-heading">Professional Summary</h2>
						</AccordionSummary>
						<AccordionDetails>
							<ProfessionalSummaryInputSection handleChange={handleProfessionalSummaryChange} />
						</AccordionDetails>
					</Accordion>

					<Accordion className="Accordion">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon className="ExpandMoreIcon" />}
							aria-controls="panel2-content"
							id="panel2-header"
						>
							<h2 className="input-heading">Personal Projects</h2>
						</AccordionSummary>
						<AccordionDetails>
							<ProjectsInput
								handleAdd={handleProjectAdd}
								handleRemove={handleProjectRemove}
								handleChange={handleProjectChange}
							/>
						</AccordionDetails>
					</Accordion>

					<Accordion className="Accordion">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon className="ExpandMoreIcon" />}
							aria-controls="panel3-content"
							id="panel3-header"
						>
							<h2 className="input-heading">Work Experience</h2>
						</AccordionSummary>
						<AccordionDetails>
							<ExperienceInputSection
								handleAdd={handleWorkExperienceAdd}
								handleRemove={handleWorkExperienceRemove}
								handleChange={handleWorkExperienceChange}
							/>
						</AccordionDetails>
					</Accordion>

					<Accordion className="Accordion">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon className="ExpandMoreIcon" />}
							aria-controls="panel4-content"
							id="panel4-header"
						>
							<h2 className="input-heading">Education Information</h2>
						</AccordionSummary>
						<AccordionDetails>
							<EducationInputSection
								handleAdd={handleEducationAdd}
								handleRemove={handleEducationRemove}
								handleChange={handleEducationChange}
							/>
						</AccordionDetails>
					</Accordion>

					<Accordion className="Accordion">
						<AccordionSummary
							expandIcon={<ExpandMoreIcon className="ExpandMoreIcon" />}
							aria-controls="panel5-content"
							id="panel5-header"
						>
							<h2 className="input-heading">Skills</h2>
						</AccordionSummary>
						<AccordionDetails>
							<SkillsInputSection handleChange={handleSkillsChange} />
						</AccordionDetails>
					</Accordion>
				</div>
				<div className="preview">
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
			</div>
		</div>
	);
}

export default App;
