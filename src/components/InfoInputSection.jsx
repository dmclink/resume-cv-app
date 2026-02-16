import FormField from './FormField.jsx';
function InfoInputSection({ handlePersonalInfoChange }) {
	return (
		<>
			<form id="personal-info-form">
				<FormField onChange={handlePersonalInfoChange} label="Name:" id="name" name="name" />
				<FormField onChange={handlePersonalInfoChange} label="Location:" id="location" name="location" />
				<FormField onChange={handlePersonalInfoChange} label="Email:" id="email" name="email" />
				<FormField onChange={handlePersonalInfoChange} label="Github URL:" id="github" name="github" />
				<FormField onChange={handlePersonalInfoChange} label="Linkedin URL:" id="linkedin" name="linkedin" />
				<FormField onChange={handlePersonalInfoChange} label="Phone:" id="phone" name="phone" />
			</form>
		</>
	);
}

export default InfoInputSection;
