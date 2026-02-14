function PersonalInfoSection({ data }) {
	const personalInfo = [];
	data.location && personalInfo.push({ info: data.location, isLink: false });
	data.email && personalInfo.push({ info: data.email, isLink: true, isMail: true });
	data.github && personalInfo.push({ info: data.github, isLink: true });
	data.linkedin && personalInfo.push({ info: data.linkedin, isLink: true });
	data.phone && personalInfo.push({ info: data.phone, isLink: false });

	return (
		<section className="personal-info-section">
			<h1 className="full-name">{data.name}</h1>
			<div className="personal-info">
				{personalInfo.map((entry, idx) => {
					const pipe = idx < personalInfo.length - 1 ? ' | ' : '';
					if (entry.isLink) {
						return (
							<p>
								<a href={entry.isMail ? 'mailto:' + entry.info : entry.info}>{entry.info}</a>
								{pipe}
							</p>
						);
					}
					return <p>{entry.info + pipe}</p>;
				})}
			</div>
		</section>
	);
}

export default PersonalInfoSection;
