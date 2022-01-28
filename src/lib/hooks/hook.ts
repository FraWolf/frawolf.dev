import { projects, tags } from '../../../static/data.json';

export function generateTags(projectTags: string[]) {
	return projectTags.map((item) => {
		return tags[item] !== undefined ? tags[item] : { name: item };
	});
}
