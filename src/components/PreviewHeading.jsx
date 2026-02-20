function PreviewHeading({ text, ref, continued, className }) {
	return (
		<h3 ref={ref} className={className ? ' ' + className : 'preview-heading'}>
			{text}
			{continued && ' '}
			{continued && <span className="heading-continued">cont.</span>}
		</h3>
	);
}

export default PreviewHeading;
