import { useState } from 'react';
import EducationInputFields from './EducationInputFields.jsx';
import FormField from './FormField.jsx';

function EducationInputSection({ handleAdd, handleRemove, handleChange }) {
	const [count, setCount] = useState(1);
	const educationFields = [];

	function increment() {
		setCount(count + 1);
		handleAdd();
	}
	function decrement() {
		setCount(count - 1);
		handleRemove();
	}

	for (let i = 0; i < count; i++) {
		educationFields.push(<EducationInputFields key={i} handleChange={handleChange} i={i + 1} />);
	}

	return (
		<>
			<form className="education-form" id="education-form">
				<FormField
					label="Education Heading Text"
					defaultValue="Education"
					onChange={handleChange}
					name="educationHeadingText"
				/>
				{educationFields}
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

export default EducationInputSection;
