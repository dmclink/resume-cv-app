import FormField from './FormField.jsx';
function ProfessionalSummaryInputSection({ handleChange }) {
	return (
		<>
			<h2>Professional Summary</h2>
			<FormField
				label="Professional Summary:"
				type="textarea"
				onChange={handleChange}
				name="professional-summary"
				id="professional-summary"
			/>
		</>
	);
}

export default ProfessionalSummaryInputSection;
