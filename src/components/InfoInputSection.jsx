import FormField from './FormField.jsx';
function InfoInputSection({ handlePersonalInfoChange }) {
	return (
		<>
			<h2>Personal Information</h2>
			<form id="personal-info-form">
				<FormField onChange={handlePersonalInfoChange} label="Name:" id="name" />
				<FormField onChange={handlePersonalInfoChange} label="Location:" id="location" />
				<FormField onChange={handlePersonalInfoChange} label="Email:" id="email" />
				<FormField onChange={handlePersonalInfoChange} label="Github URL:" id="github" />
				<FormField onChange={handlePersonalInfoChange} label="Linkedin URL:" id="linkedin" />
				<FormField onChange={handlePersonalInfoChange} label="Phone:" id="phone" />
			</form>
		</>
	);
}

export default InfoInputSection;
