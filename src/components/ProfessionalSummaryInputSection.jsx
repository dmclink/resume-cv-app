import FormField from './FormField.jsx';
function ProfessionalSummaryInputSection({ handleChange }) {
	return (
		<>
			<form id="professional-summary-form" className="professional-summary-form">
				<FormField
					label="Heading Text:"
					name="professionalSummaryHeadingText"
					onChange={handleChange}
					defaultValue="Professional Summary"
				/>
				<FormField
					label="Professional Summary:"
					type="textarea"
					onChange={handleChange}
					name="professionalSummary"
					id="professional-summary"
				/>
			</form>
		</>
	);
}

export default ProfessionalSummaryInputSection;
