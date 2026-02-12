import { useState } from 'react';
import ExperienceInputFields from './ExperienceInputFields.jsx';

function ExperienceInputSection() {
	const [count, setCount] = useState(1);
	const experienceFields = [];

	function increment() {
		setCount(count + 1);
	}
	function decrement() {
		setCount(count - 1);
	}

	for (let i = 0; i < count; i++) {
		experienceFields.push(<ExperienceInputFields i={i + 1} />);
	}

	return (
		<>
			<h2>Work Experience</h2>
			<div className="experience-fields" id="experience-fields">
				{experienceFields}
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

export default ExperienceInputSection;
