import { buildDescription } from '../utils';

function ProfessionalSummarySection({ data }) {
	if (!data.professionalSummary) {
		return <></>;
	}

	return (
		<section className="professional-summary-section">
			{data.professionalSummaryHeadingText && (
				<h3 className="professional-summary-heading">{data.professionalSummaryHeadingText}</h3>
			)}
			<article>{buildDescription(data.professionalSummary)}</article>
		</section>
	);
}

export default ProfessionalSummarySection;
