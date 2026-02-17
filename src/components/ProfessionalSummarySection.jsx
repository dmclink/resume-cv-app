import { buildDescription } from '../utils';

function ProfessionalSummarySection({ data }) {
	return (
		<section className="professional-summary-section">
			{data.professionalSummary && data.professionalSummaryHeadingText && (
				<h3 className="professional-summary-heading">{data.professionalSummaryHeadingText}</h3>
			)}
			<div>{buildDescription(data.professionalSummary)}</div>
		</section>
	);
}

export default ProfessionalSummarySection;
