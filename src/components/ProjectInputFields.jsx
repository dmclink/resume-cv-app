import FormField from './FormField';

function ProjectInputFields({ handleChange, i }) {
	return (
		<div className="education-input-field">
			<FormField
				idx={i - 1}
				onChange={handleChange}
				label="Project Name:"
				name="projectName"
				id={'project-name' + i}
			/>
			<FormField
				idx={i - 1}
				onChange={handleChange}
				label="Project Link:"
				name="projectLink"
				id={'project-link' + i}
			/>
			<FormField
				idx={i - 1}
				onChange={handleChange}
				label="Description:"
				name="projectDescription"
				id={'project-description' + i}
				type="textarea"
			/>
		</div>
	);
}

export default ProjectInputFields;
