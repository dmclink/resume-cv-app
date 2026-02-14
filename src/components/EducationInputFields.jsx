import FormField from './FormField';

function EducationInputFields({ i }) {
	return (
		<div className="education-input-field" key={crypto.randomUUID()}>
			<h3>Education {i}</h3>
			<FormField label="School Name:" id={'school-name' + i} />
			<FormField label="Degree or Certificate Name:" id={'school-degree-name' + i} />
			<FormField label="From:" id={'school-from' + i} type="date" />
			<FormField label="To:" id={'school-to' + i} type="date" />
		</div>
	);
}

export default EducationInputFields;
