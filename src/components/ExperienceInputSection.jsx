import { useState } from 'react';
import FormField from './FormField.jsx';
import ExperienceInputFields from './ExperienceInputFields.jsx';

function ExperienceInputSection({ handleAdd, handleRemove, handleChange }) {
	const [count, setCount] = useState(1);
	const experienceFields = [];

	function increment() {
		setCount(count + 1);
		handleAdd();
	}
	function decrement() {
		setCount(count - 1);
		handleRemove();
	}

	for (let i = 0; i < count; i++) {
		experienceFields.push(<ExperienceInputFields key={i} i={i + 1} handleChange={handleChange} />);
	}

	return (
		<>
			<form className="work-experience-form" id="work-experience-form">
				<FormField
					label="Work Experience Heading Text:"
					name="workHeadingText"
					onChange={handleChange}
					defaultValue="Work Experience"
				/>
				{experienceFields}
			</form>
			<button type="button" onClick={increment}>
				Add Another
			</button>
			{count > 1 && (
				<button type="button" onClick={decrement}>
					Remove One
				</button>
			)}
		</>
	);
}

export default ExperienceInputSection;
