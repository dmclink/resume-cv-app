function FormField({ name, idx, onChange, label = '', id = '', type = '' }) {
	let t = 'text';

	switch (type) {
		case 'date':
			t = 'date';
			break;
		case 'textarea':
			t = 'textarea';
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
				{t === 'textarea' ? (
					<textarea rows="5" idx={idx} onChange={onChange} name={name} id={id}></textarea>
				) : (
					<input idx={idx} onChange={onChange} name={name} id={id} type={t} />
				)}
			</label>
		</>
	);
}

export default FormField;
