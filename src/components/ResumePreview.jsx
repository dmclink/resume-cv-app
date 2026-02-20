import '../styles/ResumePreview.css';
import { formatDates, buildDescription } from '../utils.jsx';

import PreviewControls from './PreviewControls.jsx';
import PreviewHeading from './PreviewHeading.jsx';

import React, { useState, useRef, useEffect, useLayoutEffect, cloneElement } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PAGE_HEIGHT = 1056;
const TOP_MARGIN_HEIGHT = 48;
const MAX_CONTENT_HEIGHT = PAGE_HEIGHT - TOP_MARGIN_HEIGHT * 2;

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

	// console.log({ sections, sectionHeights, headings, headingHeights, articles, articleHeights });
	function handleControlsChange(e) {
		const v = e.target.value;
		const name = e.target.name;

		setPreviewConfig((prevData) => {
			const newData = structuredClone(prevData);
			newData[name] = v;

			return newData;
		});
	}

	// group sections and articles into pages depending on their height
	// work section by section in a loop and figure out how to break up each
	// there are 3 cases:
	// an entire section fits on the current page
	// - just slap the whole section on current and move onto the next
	// at least one article from a section and the section heading fits on the current page
	// - we'll split the section into two
	// - need to create a new section heading with the text .cont on the duplicate heading
	// - fit all articles we can into the first page
	// - put the rest onto the next page
	// no articles (plus the heading) fits on the current page
	// - we dont want to leave just a dangling heading so we need to check article[0] plus heading heading
	// - move the whole section to the next page
	//

	const contentRef = useRef(null);
	const reactToPrintFn = useReactToPrint({ contentRef });

	const piHdgRef = useRef(null);
	const piArtRef = useRef(null);
	const personalInfoHeading = newPersonalInfoHeading(personalInfoData);
	const personalInfoArticle = newPersonalInfoArticle(personalInfoData);
	const personalInfoHeadingClone = newPersonalInfoHeading(personalInfoData, piHdgRef);
	const personalInfoArticleClone = newPersonalInfoArticle(personalInfoData, piArtRef);

	const psHdgRef = useRef(null);
	const psArtRef = useRef(null);
	const professionalSummaryHeading = newProfessionalSummaryHeading(professionalSummaryData);
	const professionalSummaryArticle = newProfessionalSummaryArticle(professionalSummaryData);
	const professionalSummaryHeadingClone = newProfessionalSummaryHeading(professionalSummaryData, psHdgRef);
	const professionalSummaryArticleClone = newProfessionalSummaryArticle(professionalSummaryData, psArtRef);

	const pjHdgRef = useRef(null);
	const pjArtRefs = useRef([]);
	useEffect(() => {
		pjArtRefs.current = pjArtRefs.current.slice(0, projectData.projects.length);
	}, [projectData]);
	const projectsHeading = newProjectsHeading(projectData);
	const projectsArticles = newProjectsArticles(projectData);
	const projectsHeadingClone = newProjectsHeading(projectData, pjHdgRef);
	const projectsArticlesClone = newProjectsArticles(projectData, pjArtRefs);

	const xpHdgRef = useRef(null);
	const xpArtRefs = useRef([]);
	useEffect(() => {
		xpArtRefs.current = xpArtRefs.current.slice(0, workData.jobs.length);
	}, [workData]);
	const experienceHeading = newExperienceHeading(workData);
	const experienceArticles = newExperienceArticles(workData);
	const experienceHeadingClone = newExperienceHeading(workData, xpHdgRef);
	const experienceArticlesClone = newExperienceArticles(workData, xpArtRefs);

	const edHdgRef = useRef(null);
	const edArtRefs = useRef([]);
	useEffect(() => {
		edArtRefs.current = edArtRefs.current.slice(0, educationData.schools.length);
	}, [educationData]);
	const educationHeading = newEducationHeading(educationData);
	const educationArticles = newEducationArticles(educationData);
	const educationHeadingClone = newEducationHeading(educationData, edHdgRef);
	const educationArticlesClone = newEducationArticles(educationData, edArtRefs);

	const skHdgRef = useRef(null);
	const skArtRef = useRef(null);
	const skillsHeading = newSkillsHeading(skillsData);
	const skillsArticle = newSkillsArticle(skillsData);
	const skillsHeadingClone = newSkillsHeading(skillsData, skHdgRef);
	const skillsArticleClone = newSkillsArticle(skillsData, skArtRef);

	const [heights, setHeights] = useState([]);

	useLayoutEffect(() => {
		const newHeights = [];

		function pushRef(ref) {
			if (ref.current) {
				newHeights.push(ref.current.scrollHeight);
			}
		}
		function pushRefs(refs) {
			if (refs.current) {
				refs.current.forEach((ref) => {
					if (ref) {
						newHeights.push(ref.scrollHeight);
					}
				});
			}
		}

		pushRef(piHdgRef);
		pushRef(piArtRef);

		pushRef(psHdgRef);
		pushRef(psArtRef);

		pushRef(pjHdgRef);
		pushRefs(pjArtRefs);

		pushRef(xpHdgRef);
		pushRefs(xpArtRefs);

		pushRef(edHdgRef);
		pushRefs(edArtRefs);

		pushRef(skHdgRef);
		pushRef(skArtRef);

		setHeights(newHeights);
	}, [educationData, personalInfoData, workData, skillsData, professionalSummaryData, projectData]);

	const pageElements = [];

	personalInfoHeading && pageElements.push(personalInfoHeading);
	personalInfoArticle && pageElements.push(personalInfoArticle);
	professionalSummaryHeading && pageElements.push(professionalSummaryHeading);
	professionalSummaryArticle && pageElements.push(professionalSummaryArticle);
	projectsHeading && pageElements.push(projectsHeading);
	projectsArticles && projectsArticles.length > 0 && pageElements.push(...projectsArticles);
	experienceHeading && pageElements.push(experienceHeading);
	experienceArticles && experienceArticles.length > 0 && pageElements.push(...experienceArticles);
	educationHeading && pageElements.push(educationHeading);
	educationArticles && educationArticles.length > 0 && pageElements.push(...educationArticles);
	skillsHeading && pageElements.push(skillsHeading);
	skillsArticle && pageElements.push(skillsArticle);

	const pages = [[]];
	let currHeight = 0;
	let pageIdx = 0;
	let lastHeading;
	let lastHeadingHeight = 0;
	let lastHeadingIdx = -1;

	// this check to ensure we're not rendering pages before heights have been updated
	if (heights.length === pageElements.length) {
		for (let i = 0; i < pageElements.length; i++) {
			const height = heights[i];
			const el = pageElements[i];
			if (el.type === PreviewHeading) {
				lastHeading = el;
				lastHeadingHeight = height;
				lastHeadingIdx = i;
				continue;
			}

			let page = pages[pageIdx];

			if (i === lastHeadingIdx + 1) {
				// first article after heading
				if (currHeight + height + lastHeadingHeight <= MAX_CONTENT_HEIGHT) {
					page.push(lastHeading);
					page.push(el);
					currHeight += height + lastHeadingHeight;
				} else {
					pages.push([]);
					pageIdx++;
					page = pages[pageIdx];
					page.push(lastHeading);
					page.push(el);
					currHeight = height + lastHeadingHeight;
				}
			} else {
				if (height + currHeight <= MAX_CONTENT_HEIGHT) {
					page.push(el);
					currHeight += height;
				} else {
					pages.push([]);
					pageIdx++;
					page = pages[pageIdx];
					page.push(cloneElement(lastHeading, { continued: true }));
					page.push(el);
					currHeight = height + lastHeadingHeight;
				}
			}
		}
	}

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

			<div className="offscreen page" id="page-clone">
				<div className="page-content">
					{
						<section>
							{personalInfoHeadingClone}
							{personalInfoArticleClone}
						</section>
					}
					{
						<section>
							{professionalSummaryHeadingClone}
							{professionalSummaryArticleClone}
						</section>
					}
					{
						<section>
							{projectsHeadingClone}
							{projectsArticlesClone}
						</section>
					}
					{
						<section>
							{experienceHeadingClone}
							{experienceArticlesClone}
						</section>
					}
					{
						<section>
							{educationHeadingClone}
							{educationArticlesClone}
						</section>
					}
					<section>
						{skillsHeadingClone}
						{skillsArticleClone}
					</section>
				</div>
			</div>

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
				{pages.map((pageContents, idx) => {
					return (
						<div key={idx} className="page">
							<div className="page-content">{pageContents}</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

function newPersonalInfoHeading(data, ref) {
	if (!data.name) {
		return null;
	}
	return <PreviewHeading key={crypto.randomUUID()} ref={ref} className="full-name" text={data.name} />;
}

function newPersonalInfoArticle(data, ref) {
	const personalInfo = [];
	data.location && personalInfo.push({ info: data.location, isLink: false });
	data.email && personalInfo.push({ info: data.email, isLink: true, isMail: true });
	data.github && personalInfo.push({ info: data.github, isLink: true });
	data.linkedin && personalInfo.push({ info: data.linkedin, isLink: true });
	data.phone && personalInfo.push({ info: data.phone, isLink: false });
	const key = crypto.randomUUID();
	return (
		<article key={key} ref={ref} className="personal-info">
			{personalInfo.map((entry, idx) => {
				const pipe = idx < personalInfo.length - 1 ? ' | ' : '';
				if (entry.isLink) {
					return (
						<p key={idx}>
							<a href={entry.isMail ? 'mailto:' + entry.info : entry.info}>{entry.info}</a>
							{pipe}
						</p>
					);
				}
				return <p key={crypto.randomUUID()}>{entry.info + pipe}</p>;
			})}
		</article>
	);
}

function newProfessionalSummaryHeading(data, ref) {
	if (!data.professionalSummary) {
		return null;
	}

	return <PreviewHeading key={crypto.randomUUID()} ref={ref} text={data.professionalSummaryHeadingText} />;
}

function newProfessionalSummaryArticle(data, ref) {
	if (!data.professionalSummary) {
		return null;
	}

	return (
		<article key={crypto.randomUUID()} ref={ref}>
			{buildDescription(data.professionalSummary)}
		</article>
	);
}

function newProjectsHeading(data, ref) {
	if (!data.projectsHeadingText) {
		return null;
	}

	let hasProject = false;
	for (const project of data.projects) {
		if (project.projectName) {
			hasProject = true;
			break;
		}
	}

	if (!hasProject) {
		return null;
	}

	return <PreviewHeading key={crypto.randomUUID()} ref={ref} text={data.projectsHeadingText} />;
}

function newProjectsArticles(data, refs) {
	const projects = [];
	for (let i = 0; i < data.projects.length; i++) {
		const project = data.projects[i];
		if (!project.projectName) {
			continue;
		}

		projects.push(
			<article
				key={crypto.randomUUID()}
				ref={(node) => (refs ? (refs.current[i] = node) : null)}
				className="project-entry"
			>
				<header className="project-header">
					<p className="project-name">
						<span className="project-name-span">{project.projectName}</span>
						{project.projectLink && (
							<span className="project-link-span">
								{' '}
								(<a href={project.projectLink}>{project.projectLink}</a>)
							</span>
						)}
					</p>
				</header>
				<div className="project-description">{buildDescription(project.projectDescription)}</div>
			</article>,
		);
	}

	if (!projects.length) {
		return null;
	}

	return projects;
}

function experienceHasEntry(data) {
	for (const job of data.jobs) {
		for (const v of Object.values(job)) {
			if (v) {
				return true;
			}
		}
	}
	return false;
}

function newExperienceHeading(data, ref) {
	if (!experienceHasEntry(data)) {
		return null;
	}
	return <PreviewHeading key={crypto.randomUUID()} ref={ref} text={data.workHeadingText} />;
}

function newExperienceArticles(data, refs) {
	if (!experienceHasEntry(data)) {
		return null;
	}

	return data.jobs.map((entry, idx) => {
		return (
			<article
				key={crypto.randomUUID()}
				ref={(node) => (refs ? (refs.current[idx] = node) : null)}
				className="work-entry"
			>
				<header className="work-header">
					<h4 className="work-employer-name">{entry.workEmployerName}</h4>
					<p className="work-title">{entry.workTitle}</p>
					<p className="work-date">{formatDates(entry.workFrom, entry.workTo)}</p>
				</header>
				<div className="work-description">{buildDescription(entry.workResponsibilities)}</div>
			</article>
		);
	});
}

function educationHasEntry(data) {
	for (const school of data.schools) {
		for (const v of Object.values(school)) {
			if (v) {
				return true;
			}
		}
	}

	return false;
}

function newEducationHeading(data, ref) {
	if (!educationHasEntry(data)) {
		return null;
	}
	return <PreviewHeading key={crypto.randomUUID()} ref={ref} text={data.educationHeadingText} />;
}

function newEducationArticles(data, refs) {
	if (!educationHasEntry(data)) {
		return null;
	}

	return data.schools.map((entry, idx) => {
		return (
			<article
				key={crypto.randomUUID()}
				ref={refs ? (node) => (refs.current[idx] = node) : null}
				className="education-entry"
			>
				<header className="education-header">
					<h4 className="education-school-name">{entry.schoolName}</h4>
					<p className="education-degree">
						{entry.schoolDegreeName}
						<span className="education-honors">{entry.schoolGPA && ', ' + entry.schoolGPA}</span>
					</p>
					<p className="education-date">{formatDates(entry.schoolFrom, entry.schoolTo)}</p>
				</header>
				<div className="education-description">{buildDescription(entry.schoolDescription)}</div>
			</article>
		);
	});
}

function newSkillsHeading(data, ref) {
	if (!data.skills) {
		return null;
	}
	return <PreviewHeading key={crypto.randomUUID()} text={data.skillsHeadingText} ref={ref} />;
}

function newSkillsArticle(data, ref) {
	if (!data.skills) {
		return null;
	}
	return (
		<article key={crypto.randomUUID()} ref={ref} className="skills-description">
			{buildDescription(data.skills)}
		</article>
	);
}

export default ResumePreview;
