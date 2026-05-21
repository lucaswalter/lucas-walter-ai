// Source of truth for the landing page. Mirrors CONTENT.md — edit both together.

export const meta = {
	title: 'Lucas Walter | AI Automation & AI Agent Builder',
	description:
		'Lucas Walter builds AI agents and n8n automations that run real businesses, and teaches you to do the same. Free automation downloads, community, and tutorials.'
};

export const profile = {
	name: 'Lucas Walter',
	bio: [
		"Hi 👋 I'm Lucas. I build AI agents & n8n automations that run real businesses, including CoinLedger (800k users), Klint AI, and Spokane Pulse.",
		'Follow along on socials, join 28k+ builders in my free community, or grab the courses below.'
	],
	avatar: '/lucas_walter_profile.png'
};

export type Social = {
	platform: 'instagram' | 'tiktok' | 'youtube' | 'linkedin' | 'x';
	label: string;
	url: string;
};

export const socials: Social[] = [
	{ platform: 'instagram', label: 'lucas.walter.ai', url: 'https://instagram.com/lucas.walter.ai' },
	{ platform: 'tiktok', label: '@lucas.walter.ai', url: 'https://www.tiktok.com/@lucas.walter.ai' },
	{ platform: 'youtube', label: '@lucaswalterai', url: 'https://www.youtube.com/@lucaswalterai' },
	{
		platform: 'linkedin',
		label: 'lucas-walter',
		url: 'https://www.linkedin.com/in/lucas-walter-339ba83b0/'
	},
	{ platform: 'x', label: '@lucas_fabric', url: 'https://x.com/lucas_fabric' }
];

export type Link = {
	title: string;
	description: string;
	cta: string;
	url: string;
	primary?: boolean;
};

export const links: Link[] = [
	{
		title: 'The 6-Figure AI Side Biz 📈',
		description: 'Build a local newsletter business powered by AI agents that runs itself.',
		cta: 'Start building',
		url: 'https://lucaswalter.ai/zero-person-local-newsletter-course/',
		primary: true
	},
	{
		title: 'Snag My AI Automations',
		description: 'Download all of my n8n automations + AI agent builds for free.',
		cta: 'Get them for free',
		url: 'https://www.skool.com/ai-automation-mastery-group'
	},
	{
		title: 'Join My Community',
		description: 'AI Automation Mastery: learn to build, scale, and sell AI agents + automations.',
		cta: 'Join for free',
		url: 'https://www.skool.com/ai-automation-mastery-group/'
	}
];

export type Video = {
	title: string;
	url: string;
	id: string;
};

export const videos: Video[] = [
	{
		title: 'I Built a Team of AI Agents That Runs Itself',
		url: 'https://www.youtube.com/watch?v=0MGtLce7cFE',
		id: '0MGtLce7cFE'
	},
	{
		title: '$24K/Year from this AI Dentist Voice Agent',
		url: 'https://www.youtube.com/watch?v=vQ5Z8-f-xw4',
		id: 'vQ5Z8-f-xw4'
	}
];
