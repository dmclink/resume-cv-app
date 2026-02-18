import { buildDescription } from '../utils';

function ProjectsSection({ data }) {
	const projects = [];
	for (let i = 0; i < data.projects.length; i++) {
		const project = data.projects[i];
		if (!project.projectName) {
			continue;
		}

		projects.push(
			<article className="project-entry">
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
		return <></>;
	}

	return (
		<section id="projects-section" className="projects-section">
			{data.projectsHeadingText && <h3 className="projects-section-heading">{data.projectsHeadingText}</h3>}
			{projects}
		</section>
	);
}

export default ProjectsSection;
