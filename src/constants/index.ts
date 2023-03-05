import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	mulyamitra,
	clipsal,
	algo,
	swordy,
	trailerzz,
	threejs,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Career',
	},
	{
		id: 'tech',
		title: 'Tech',
	},
	{
		id: 'project',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web HTML/CSS/JS/TS',
		icon: web,
	},
	{
		title: 'Mobile CapacitorJS',
		icon: mobile,
	},
	{
		title: 'Backend Python/Node',
		icon: backend,
	},
	{
		title: 'Solution Architect',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'Software Engineer Jr.',
		company_name: 'MulyaMitra Pvt Ltd',
		icon: mulyamitra,
		iconBg: '#E6DEDD',
		date: 'March 2020 - June 2021',
		points: [
			'Developed PWA & Web app using React & Redux.',
			'Designed REST API using Express JS, NodeJS &  architected application data model with MongoDB.',
			'Built infrastructure with Nginx, AWS EC2 & Lets Encrypt SSL, and automated CI/CD with Github & Webhooks.',
		],
	},
	{
		title: 'Software Engineer',
		company_name: 'Clipsal Solar',
		icon: clipsal,
		iconBg: '#383E56',
		date: 'June 2021 - Feb 2022',
		points: [
			'Developed Android, IOS & Web app on a single code base using React & Typescript  wrapped with Capacitor.',
			'Architected tests with Cypress (Integrated tests), Jest (Unit tests), Percy (Visual Regression) & Sentry (Error Reporting).',
			'Designed REST API endpoints in serverless microservice architecture using python.',
		],
	},
	{
		title: 'Senior Software Engineer',
		company_name: 'Clipsal Solar',
		icon: clipsal,
		iconBg: '#E6DEDD',
		date: 'Feb 2022 - Present',
		points: [
			'Responsible for sprint planning, QA and Release management for web and native apps of a project.',
			'Worked across multiple projects on event-driven architecture with Python, AWS, Terraform and React.',
			'Built various native Android/IOS features such as Deep Links, Share etc. using CapacitorJS.',
		],
	},
];

const projects = [
	{
		name: 'Algo Visualizer',
		description:
			'Web application that allows users to play and learn various path-finding and maze generation algorithms in a board to visualize how they work. ',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'chakra-ui',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
		],
		image: algo,
		source_code_link: 'https://github.com/RioterTrov97/algo-visualizer-react',
	},
	{
		name: 'Swordy - Fighting Game',
		description:
			'Web game that enables two users to fight with each other on a 60 second timer. Players can win early if they defeat the opponent before the timer ends.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'javascript',
				color: 'green-text-gradient',
			},
			{
				name: 'animation',
				color: 'pink-text-gradient',
			},
		],
		image: swordy,
		source_code_link: 'https://github.com/RioterTrov97/swordy-2d-fighting-game',
	},
	{
		name: 'Trailerzz',
		description:
			'A comprehensive site for viewing trailers of movies and tv series with subscription model integrated using PayPal. Users can create their movie list and add their profile.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'firebase',
				color: 'green-text-gradient',
			},
			{
				name: 'TMDB',
				color: 'pink-text-gradient',
			},
		],
		image: trailerzz,
		source_code_link: 'https://github.com/RioterTrov97/netflix-trailer',
	},
];

export { services, technologies, experiences, projects };
