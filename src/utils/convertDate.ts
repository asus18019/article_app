export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

/**
	Function convertDate converts and returns date from 'yyyy-MM-dd'T'HH:mm:ss.SSS'Z' format to 'Month D, Yr'
*/
export const convertDate = (date: string): string => {
	const monthNumber: number = formatNumber(date, 5, 7);
	const day: number = formatNumber(date, 8, 10);
	const year: number = Number(date.slice(0, 4));
	return `${ months[monthNumber - 1] } ${ day }${ day === 1 ? 'st' : 'th' }, ${ year }`;
};

/**
	Function formatNumber takes a date parameter in 'yyyy-MM-dd'T'HH:mm:ss.SSS'Z' format,
    extracts the number between two indexes removing the first '0' if it exists
*/
const formatNumber = (date: string, firstIndex: number, lastIndex: number): number => {
	if(Number(date.slice(firstIndex, lastIndex)[0]) === 0) {
		return Number(date.slice(firstIndex + 1, lastIndex));
	}
	return Number(date.slice(firstIndex, lastIndex));
};