import { useState } from 'react';
import FormField from './FormField.jsx';
import ProjectInputFields from './ProjectInputFields.jsx';

function ProjectsInput({ handleChange, handleAdd, handleRemove }) {
	const [count, setCount] = useState(1);
	const projectFields = [];

	function increment() {
		setCount(count + 1);
		handleAdd();
	}
	function decrement() {
		setCount(count - 1);
		handleRemove();
	}

	for (let i = 0; i < count; i++) {
		projectFields.push(<ProjectInputFields handleChange={handleChange} i={i + 1} />);
	}

	return (
		<>
			<form className="projects-form" id="projects-form">
				<FormField
					defaultValue="Projects"
					label="Projects Heading Text:"
					onChange={handleChange}
					name="projectsHeadingText"
				/>
				{projectFields}
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

export default ProjectsInput;
