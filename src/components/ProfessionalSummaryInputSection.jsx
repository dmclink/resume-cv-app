import FormField from './FormField.jsx';
function ProfessionalSummaryInputSection({ handleChange }) {
	return (
		<>
			<form id="professional-summary-form" className="professional-summary-form">
				<FormField
					label="Professional Summary:"
					type="textarea"
					onChange={handleChange}
					name="professional-summary"
					id="professional-summary"
				/>
			</form>
		</>
	);
}

export default ProfessionalSummaryInputSection;
