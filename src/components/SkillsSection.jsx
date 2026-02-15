import { buildDescription } from '../utils.jsx';

function SkillsSection({ data }) {
	return (
		<section className="skills-section">
			{data && <h3 className="skills-section-heading">Skills</h3>}
			<p className="skills=description">{buildDescription(data)}</p>
		</section>
	);
}

export default SkillsSection;
