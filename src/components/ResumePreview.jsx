import '../styles/ResumePreview.css';
import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import PersonalInfoSection from './PersonalInfoSection.jsx';
import ExperienceSection from './ExperienceSection.jsx';
import EducationSection from './EducationSection.jsx';
import SkillsSection from './SkillsSection.jsx';
import ProfessionalSummarySection from './ProfessionalSummarySection.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import PreviewControls from './PreviewControls.jsx';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ResumePreview({
	educationData,
	personalInfoData,
	workData,
	skillsData,
	professionalSummaryData,
	projectData,
}) {
	const [previewConfig, setPreviewConfig] = useState({
		fontSize: '12px',
		headingFontSize: '12px',
		fontFamily: 'Arial, Helvetica, sans-serif',
		headingFontFamily: 'Arial, Helvetica, sans-serif',
		lineHeight: '1.1',
	});

	function handleControlsChange(e) {
		const v = e.target.value;
		const name = e.target.name;

		setPreviewConfig((prevData) => {
			const newData = structuredClone(prevData);
			newData[name] = v;

			return newData;
		});
	}

	const contentRef = useRef(null);
	const reactToPrintFn = useReactToPrint({ contentRef });

	return (
		<>
			<Accordion className="Accordion">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon className="ExpandMoreIcon" />}
					aria-controls="panel6-content"
					id="panel6-header"
				>
					<h2 className="input-heading">Preview Style Adjustments</h2>
				</AccordionSummary>
				<AccordionDetails>
					<PreviewControls handleChange={handleControlsChange} />
				</AccordionDetails>
			</Accordion>

			<button onClick={reactToPrintFn}>Print</button>
			<div
				ref={contentRef}
				className="page"
				style={{
					'--font-size': previewConfig.fontSize,
					'--heading-font-size': previewConfig.headingFontSize,
					'--font-family': previewConfig.fontFamily,
					'--heading-font-family': previewConfig.headingFontFamily,
					'lineHeight': previewConfig.lineHeight,
				}}
			>
				<PersonalInfoSection data={personalInfoData} />
				<ProfessionalSummarySection data={professionalSummaryData} />
				<ProjectsSection data={projectData} />
				<ExperienceSection data={workData} />
				<EducationSection data={educationData} />
				<SkillsSection data={skillsData} />
			</div>
		</>
	);
}

export default ResumePreview;
