import FormField from './FormField.jsx';
function InfoInputSection() {
	return (
		<>
			<h2>Personal Information</h2>
			<FormField label="Name:" id="name" />
			<FormField label="Email:" id="email" />
			<FormField label="Github:" id="github" />
			<FormField label="Phone:" id="phone" />
		</>
	);
}

export default InfoInputSection;
