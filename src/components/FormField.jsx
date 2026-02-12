function FormField({ label = '', id = '', type = '' }) {
	let t = 'text';

	switch (type) {
		case 'date':
			t = 'date';
			break;
		case '':
			break;
		default:
			console.error('unknown type passed to FormField');
	}

	return (
		<>
			<label>
				{label}
				<input name={id} id={id} type={t} />
			</label>
		</>
	);
}

export default FormField;
