import { buildDescription } from '../utils.jsx';

function SkillsSection({ data }) {
	if (!data.skills) {
		return <></>;
	}

	return (
		<section className="skills-section">
			{data.skillsHeadingText && <h3 className="skills-section-heading">{data.skillsHeadingText}</h3>}
			<div className="skills=description">{buildDescription(data.skills)}</div>
		</section>
	);
}

export default SkillsSection;
