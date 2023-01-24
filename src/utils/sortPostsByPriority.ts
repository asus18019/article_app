import { Post } from '../redux/post/types';
import { isTextIncludeWords } from './isTextIncludeWords';

/**
	Function sortPostsByPriority filters and sorts posts that have at least one word from the second parameter in their
    title or/and summary.
    Returned array contains posts with the match in the title at the beginning and with the match in the summary at the end
 */

export const sortPostsByPriority = (posts: Post[], searchValue: string): Post[] => {
	let lastTitleIndex = 0;
	const sortedPosts: Post[] = [];
	for(let i = 0; i < posts.length; i++) {
		if(isTextIncludeWords(posts[i].title, searchValue)) {
			sortedPosts.splice(lastTitleIndex, 0, posts[i]);
			lastTitleIndex++;
			continue;
		}
		if(isTextIncludeWords(posts[i].summary, searchValue)) {
			sortedPosts.push(posts[i]);
		}
	}

	return sortedPosts;
};