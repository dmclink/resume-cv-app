import FormField from './FormField';

function ExperienceInputFields({ i }) {
	return (
		<>
			<h3>Work Experience {i}</h3>
			<FormField label="Employer Name:" id={'work-employer-name' + i} />
			<FormField label="Job Title" id={'work-title' + i} />
			<FormField label="From:" id={'work-from' + i} type="date" />
			<FormField label="To:" id={'work-to' + i} type="date" />
			<FormField label="Responsibilites:" id="work-responsibilities" />
		</>
	);
}

export default ExperienceInputFields;
