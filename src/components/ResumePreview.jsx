import '../styles/ResumePreview.css';
import { useState, useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';

import PersonalInfoSection from './PersonalInfoSection.jsx';
import ExperienceSection from './ExperienceSection.jsx';
import EducationSection from './EducationSection.jsx';
import SkillsSection from './SkillsSection.jsx';
import ProfessionalSummarySection from './ProfessionalSummarySection.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import PreviewControls from './PreviewControls.jsx';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PAGE_HEIGHT = 1222;
const TOP_MARGIN_HEIGHT = 48;
const MAX_CONTENT_HEIGHT = PAGE_HEIGHT - TOP_MARGIN_HEIGHT * 2;

function newPage() {
	const page = document.createElement('div');
	page.classList.add('page');

	const content = document.createElement('div');
	content.classList.add('page-content');

	page.appendChild(content);

	return page;
}

function ResumePreview({
	educationData,
	personalInfoData,
	workData,
	skillsData,
	professionalSummaryData,
	projectData,
}) {
	const [previewConfig, setPreviewConfig] = useState({
		fontSize: '12px',
		headingFontSize: '12px',
		fontFamily: 'Arial, Helvetica, sans-serif',
		headingFontFamily: 'Arial, Helvetica, sans-serif',
		lineHeight: '1.1',
	});

	function handleControlsChange(e) {
		const v = e.target.value;
		const name = e.target.name;

		setPreviewConfig((prevData) => {
			const newData = structuredClone(prevData);
			newData[name] = v;

			return newData;
		});
	}

	const contentRef = useRef(null);
	const reactToPrintFn = useReactToPrint({ contentRef });

	// creates new pages dynamically after rendering based on the size of the preview content
	// if the content overflows it creates a new page and appends all overflowing children to it
	useEffect(() => {
		if (contentRef.current) {
			const pagesContainer = document.getElementById('preview-pages');
			const pages = Array.from(document.querySelectorAll('.page'));

			for (let idx = 0; idx < pages.length; idx++) {
				const page = pages[idx];
				const prevPageContent = page.querySelector('.page-content');

				if (page.scrollHeight > page.clientHeight) {
					const nextPage = newPage();
					const nextPageContent = nextPage.querySelector('.page-content');
					pagesContainer.appendChild(nextPage);

					// pushes all overflowing sections to the next page
					while (page.scrollHeight > page.clientHeight) {
						const pageSections = Array.from(page.querySelectorAll('section'));

						const poppedSection = pageSections.pop();
						nextPageContent.prepend(poppedSection);
					}

					// try splitting the last section on the first page by articles over both pages
					const nextPageSection = nextPageContent.querySelector('section');
					const articles = Array.from(nextPageSection.querySelectorAll('article'));
					if (articles.length > 1) {
						articles.forEach((article) => {
							nextPageSection.removeChild(article);
						});
						const prevPageSection = nextPageSection.cloneNode(nextPageSection);
						prevPageContent.appendChild(prevPageSection);
						prevPageSection.appendChild(articles[0]);

						// edge case where not even one article fits from section we dont split so
						// we dont have an extra floating heading for nothing
						if (page.scrollHeight > page.clientHeight) {
							prevPageContent.removeChild(prevPageSection);
							articles.forEach((article) => {
								nextPageSection.appendChild(article);
							});
							break;
						}

						let targetPrevPage = true;

						for (let i = 1; i < articles.length; i++) {
							const article = articles[i];
							if (targetPrevPage) {
								prevPageSection.appendChild(article);
								if (page.scrollHeight > page.clientHeight) {
									nextPageSection.appendChild(article);
									targetPrevPage = false;
								}
							} else {
								nextPageSection.appendChild(article);
							}
						}

						const heading = nextPageSection.querySelector('h3');
						const headingText = heading.innerText;
						heading.innerHTML = `${headingText} <span class="heading-continued">cont.</span>`;
					}
				}
			}
		}
	});

	return (
		<>
			<Accordion className="Accordion">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon className="ExpandMoreIcon" />}
					aria-controls="panel6-content"
					id="panel6-header"
				>
					<h2 className="input-heading">Preview Style Adjustments</h2>
				</AccordionSummary>
				<AccordionDetails>
					<PreviewControls handleChange={handleControlsChange} />
				</AccordionDetails>
			</Accordion>

			<button onClick={reactToPrintFn}>Print</button>
			<div
				className="preview-pages"
				id="preview-pages"
				ref={contentRef}
				style={{
					'--font-size': previewConfig.fontSize,
					'--heading-font-size': previewConfig.headingFontSize,
					'--font-family': previewConfig.fontFamily,
					'--heading-font-family': previewConfig.headingFontFamily,
					'lineHeight': previewConfig.lineHeight,
				}}
			>
				<div className="page">
					<div className="page-content">
						<PersonalInfoSection data={personalInfoData} />
						<ProfessionalSummarySection data={professionalSummaryData} />
						<ProjectsSection data={projectData} />
						<ExperienceSection data={workData} />
						<EducationSection data={educationData} />
						<SkillsSection data={skillsData} />
					</div>
				</div>
			</div>
		</>
	);
}

export default ResumePreview;
