import { useState } from 'react';
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
		experienceFields.push(<ExperienceInputFields i={i + 1} handleChange={handleChange} />);
	}

	return (
		<>
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
