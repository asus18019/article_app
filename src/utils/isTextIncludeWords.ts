/**
	Function isTextIncludeWords checks if text includes any word from the second parameter
 */

export const isTextIncludeWords = (text: string, searchedWords: string): boolean => {
	let res = false;
	text.split(' ').forEach(word => {
		if(searchedWords.split(' ').includes(word)) {
			res = true;
		}
	});
	return res;
};