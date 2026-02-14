import '../styles/ResumePreview.css';
import { useState } from 'react';
import PersonalInfoSection from './PersonalInfoSection.jsx';
import ExperienceSection from './ExperienceSection.jsx';

function ResumePreview({ educationData, personalInfoData, workData }) {
	return (
		<div className="page">
			<PersonalInfoSection data={personalInfoData} />
			<ExperienceSection data={workData} />
		</div>
	);
}

export default ResumePreview;
