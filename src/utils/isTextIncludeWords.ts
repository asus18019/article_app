/**
	Function isTextIncludeWords checks if text from the first parameter includes any word from the second parameter
 */

export const isTextIncludeWords = (text: string, searchedWords: string): boolean => {
	let res = false;
	text.split(' ').forEach(word => {
		if(searchedWords.split(' ').map(searchedWord => searchedWord.toLowerCase()).includes(word.toLowerCase())) {
			res = true;
		}
	});
	return res;
};