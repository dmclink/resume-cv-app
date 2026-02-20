import { formatDates, buildDescription } from '../utils.jsx';

function EducationSection({ data }) {
	let hasEntry = false;
	for (const school of data.schools) {
		for (const v of Object.values(school)) {
			if (v) {
				hasEntry = true;
				break;
			}
		}
		if (hasEntry) {
			break;
		}
	}

	if (!hasEntry) {
		return <></>;
	}
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
			{education}
		</section>
	);
}

export default EducationSection;
