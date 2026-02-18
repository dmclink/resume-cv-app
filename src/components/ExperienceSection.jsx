import { formatDates, buildDescription } from '../utils.jsx';

function ExperienceSection({ data }) {
	let hasEntry = false;
	for (const job of data.jobs) {
		for (const v of Object.values(job)) {
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
			{hasEntry && data.workHeadingText && <h3 className="work-section-heading">{data.workHeadingText}</h3>}
			<div className="work-entries">{work}</div>
		</section>
	);
}

export default ExperienceSection;
