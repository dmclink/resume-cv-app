import FormField from './FormField';

function ExperienceInputFields({ i, handleChange }) {
	return (
		<>
			<h3>Work Experience {i}</h3>
			<FormField
				onChange={handleChange}
				idx={i - 1}
				label="Employer Name:"
				name={'workEmployerName'}
				id={'work-employer-name' + i}
			/>
			<FormField onChange={handleChange} idx={i - 1} label="Job Title" name={'workTitle'} id={'work-title' + i} />
			<FormField
				onChange={handleChange}
				idx={i - 1}
				label="From:"
				name={'workFrom'}
				id={'work-from' + i}
				type="date"
			/>
			<FormField onChange={handleChange} idx={i - 1} label="To:" name={'workTo'} id={'work-to' + i} type="date" />
			<FormField
				onChange={handleChange}
				idx={i - 1}
				label="Description and Achievements:"
				name={'workDescription'}
				id={'work-description' + i}
				type="textarea"
			/>
		</>
	);
}

export default ExperienceInputFields;
