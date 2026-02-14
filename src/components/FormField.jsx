function FormField({ onChange, label = '', id = '', type = '' }) {
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
				<input onChange={onChange} name={id} id={id} type={t} />
			</label>
		</>
	);
}

export default FormField;
