import FormField from './FormField';
function SkillsInputSection({ handleChange }) {
	return (
		<>
			<form className="skills-form" id="skills-form">
				<FormField
					label="Skills:"
					name="skills"
					id="skills"
					onChange={handleChange}
					type="textarea"
				></FormField>
			</form>
		</>
	);
}

export default SkillsInputSection;
