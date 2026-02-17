import { formatDates, buildDescription } from '../utils.jsx';

function EducationSection({ data }) {
	const education = data.schools.map((entry) => {
		return (
			<article className="education-entry">
				<header className="education-header">
					<h4 className="education-school-name">{entry.schoolName}</h4>
					<p className="education-degree">
						{entry.schoolDegreeName}
						<span className="education-honors">{entry.schoolGPA && ', ' + entry.schoolGPA}</span>
					</p>
					<p className="education-date">{formatDates(entry.schoolFrom, entry.schoolTo)}</p>
				</header>
				<div className="education-description">{buildDescription(entry.schoolDescription)}</div>
			</article>
		);
	});
	return (
		<section className="education-section">
			{data.schools[0].schoolName && data.educationHeadingText && (
				<h3 className="education-section-heading">{data.educationHeadingText}</h3>
			)}
			<div className="education-entries">{education}</div>
		</section>
	);
}

export default EducationSection;
