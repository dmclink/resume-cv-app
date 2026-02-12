import { useState } from 'react';
import '../styles/App.css';
import FormField from './FormField.jsx';
import InfoInputSection from './InfoInputSection.jsx';
import EducationInputSection from './EducationInputSection.jsx';
import ExperienceInputSection from './ExperienceInputSection.jsx';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Resume Builder</h1>
			<InfoInputSection />
			<EducationInputSection />
			<ExperienceInputSection />
		</>
	);
}

export default App;
