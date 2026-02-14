import { useState } from 'react';
import ExperienceInputFields from './ExperienceInputFields.jsx';

function ExperienceInputSection({ handleChange }) {
	const [count, setCount] = useState(1);
	const experienceFields = [];

	function increment() {
		setCount(count + 1);
	}
	function decrement() {
		setCount(count - 1);
	}

	for (let i = 0; i < count; i++) {
		experienceFields.push(<ExperienceInputFields i={i + 1} onChange={handleChange} />);
	}

	return (
		<>
			<h2>Work Experience</h2>
			<form className="work-experience-form" id="work-experience-form">
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
