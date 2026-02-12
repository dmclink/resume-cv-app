import { useState } from 'react';
import EducationInputFields from './EducationInputFields.jsx';

function EducationInputSection() {
	const [count, setCount] = useState(1);
	const educationFields = [];

	function increment() {
		setCount(count + 1);
	}
	function decrement() {
		setCount(count - 1);
	}

	for (let i = 0; i < count; i++) {
		educationFields.push(<EducationInputFields i={i + 1} />);
	}

	return (
		<>
			<h2>Education Information</h2>
			<div className="education-fields" id="education-fields">
				{educationFields}
			</div>
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
