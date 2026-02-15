import { buildDescription } from '../utils';

function ProfessionalSummarySection({ data }) {
	return (
		<section className="professional-summary-section">
			{data && <h3 className="professional-summary-heading">Professional Summary</h3>}
			<div>{buildDescription(data)}</div>
		</section>
	);
}

export default ProfessionalSummarySection;
