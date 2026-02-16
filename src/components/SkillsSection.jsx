import { buildDescription } from '../utils.jsx';

function SkillsSection({ data }) {
	return (
		<section className="skills-section">
			{data && <h3 className="skills-section-heading">Skills</h3>}
			<div className="skills=description">{buildDescription(data)}</div>
		</section>
	);
}

export default SkillsSection;
