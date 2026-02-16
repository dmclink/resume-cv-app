import '../styles/ResumePreview.css';
import PersonalInfoSection from './PersonalInfoSection.jsx';
import ExperienceSection from './ExperienceSection.jsx';
import EducationSection from './EducationSection.jsx';
import SkillsSection from './SkillsSection.jsx';
import ProfessionalSummarySection from './ProfessionalSummarySection.jsx';
import ProjectsSection from './ProjectsSection.jsx';

function ResumePreview({
	educationData,
	personalInfoData,
	workData,
	skillsData,
	professionalSummaryData,
	projectData,
}) {
	return (
		<div className="page">
			<PersonalInfoSection data={personalInfoData} />
			<ProfessionalSummarySection data={professionalSummaryData} />
			<ProjectsSection data={projectData} />
			<ExperienceSection data={workData} />
			<EducationSection data={educationData} />
			<SkillsSection data={skillsData} />
		</div>
	);
}

export default ResumePreview;
