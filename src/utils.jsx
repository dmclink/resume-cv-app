function formatDates(dateFrom, dateTo) {
	if (!dateFrom || !dateTo) {
		return '';
	}
	const [yearFrom, monthFrom] = dateFrom.split('-');
	const [yearTo, monthTo] = dateTo.split('-');

	const fromDate = new Date(Number(yearFrom), Number(monthFrom) - 1, 1);
	const toDate = new Date(Number(yearTo), Number(monthTo) - 1, 1);

	const monthFromString = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(fromDate);
	const monthToString = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(toDate);

	return `${monthFromString} ${yearFrom}-${monthToString} ${yearTo}`;
}

function buildDescription(text) {
	if (!text) {
		return '';
	}
	const fields = text.split('\n');

	const result = [];
	let prevIsList = false;
	let list = [];
	for (let i = 0; i < fields.length; i++) {
		const str = fields[i];
		const isLI = str.startsWith('-');

		if (!prevIsList && !isLI) {
			result.push(<p>{str}</p>);
			continue;
		}

		if (!isLI) {
			result.push(<ul>{list}</ul>);
			result.push(<p>{str}</p>);
			prevIsList = false;
			list = [];
		}

		if (isLI) {
			list.push(<li>{str.slice(1).trim()}</li>);
			prevIsList = true;
			continue;
		}
	}
	if (list.length > 0) {
		result.push(<ul>{list}</ul>);
	}

	return result;
}

export { formatDates, buildDescription };
