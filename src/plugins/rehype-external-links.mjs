import { visit } from 'unist-util-visit';

export default function rehypeExternalLinks() {
	return (tree) => {
		visit(tree, 'element', (node) => {
			if (node.tagName === 'a' && node.properties && typeof node.properties.href === 'string') {
				const href = node.properties.href.trim();
				if (/^https?:\/\//i.test(href) && !href.includes('jichangtuijian.lat')) {
					node.properties.target = '_blank';
					const existingRel = Array.isArray(node.properties.rel)
						? node.properties.rel
						: typeof node.properties.rel === 'string'
							? node.properties.rel.split(/\s+/)
							: [];

					const relSet = new Set(existingRel);
					relSet.add('nofollow');
					relSet.add('sponsored');
					relSet.add('noopener');
					relSet.add('noreferrer');
					node.properties.rel = Array.from(relSet).join(' ');
				}
			}
		});
	};
}
