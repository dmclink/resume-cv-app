import FormField from './FormField';

function EducationInputFields({ handleChange, i }) {
	return (
		<div className="education-input-field">
			<h3>Education {i}</h3>
			<FormField
				idx={i - 1}
				onChange={handleChange}
				label="School Name:"
				name="schoolName"
				id={'school-name' + i}
			/>
			<FormField
				idx={i - 1}
				onChange={handleChange}
				label="Degree or Certificate Name:"
				name="schoolDegreeName"
				id={'school-degree-name' + i}
			/>
			<FormField
				idx={i - 1}
				onChange={handleChange}
				label="GPA or Honors:"
				name="schoolGPA"
				id={'school-gpa' + i}
			/>
			<FormField
				idx={i - 1}
				onChange={handleChange}
				label="From:"
				name="schoolFrom"
				id={'school-from' + i}
				type="date"
			/>
			<FormField
				idx={i - 1}
				onChange={handleChange}
				label="To:"
				name="schoolTo"
				id={'school-to' + i}
				type="date"
			/>
			<FormField
				idx={i - 1}
				onChange={handleChange}
				label="Description or Achievements:"
				name="schoolDescription"
				id={'school-description' + i}
				type="textarea"
			/>
		</div>
	);
}

export default EducationInputFields;
