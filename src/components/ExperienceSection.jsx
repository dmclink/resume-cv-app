import { formatDates, buildDescription } from '../utils.jsx';

function ExperienceSection({ data }) {
	const work = data.jobs.map((entry) => {
		return (
			<article className="work-entry">
				<header className="work-header">
					<h4 className="work-employer-name">{entry.workEmployerName}</h4>
					<p className="work-title">{entry.workTitle}</p>
					<p className="work-date">{formatDates(entry.workFrom, entry.workTo)}</p>
				</header>
				<div className="work-description">{buildDescription(entry.workResponsibilities)}</div>
			</article>
		);
	});

	return (
		<section className="work-section">
			{(data.jobs[0].workTitle || data.jobs[0].workEmployerName) && (
				<h3 className="work-section-heading">Work Experience</h3>
			)}
			<div className="work-entries">{work}</div>
		</section>
	);
}

export default ExperienceSection;
