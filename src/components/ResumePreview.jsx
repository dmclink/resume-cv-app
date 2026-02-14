import '../styles/ResumePreview.css';
import PersonalInfoSection from './PersonalInfoSection.jsx';
import ExperienceSection from './ExperienceSection.jsx';
import EducationSection from './EducationSection.jsx';

function ResumePreview({ educationData, personalInfoData, workData }) {
	return (
		<div className="page">
			<PersonalInfoSection data={personalInfoData} />
			<ExperienceSection data={workData} />
			<EducationSection data={educationData} />
		</div>
	);
}

export default ResumePreview;
