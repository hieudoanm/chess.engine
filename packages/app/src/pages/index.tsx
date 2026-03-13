import {
	LandingContent,
	LandingTemplate,
} from '@chess.engine/templates/LandingTemplate';
import { NextPage } from 'next';

const content: LandingContent = {
	navbar: {
		title: 'ChessEngine',
		buttonText: 'Open App',
		buttonHref: '/app',
	},
	hero: {
		title: 'Analyze and Improve Your Chess with AI',
		tagline:
			'Run powerful chess engine evaluations, analyze positions, and get move suggestions instantly in your browser.',
		buttonText: 'Start Analyzing',
		buttonHref: '/app',
	},
	features: {
		title: 'Features',
		items: [
			{
				id: 'position-analysis',
				emoji: '♟️',
				title: 'Position Analysis',
				description:
					'Evaluate any board position with a strong chess engine to find the best moves and tactics.',
			},
			{
				id: 'move-suggestions',
				emoji: '💡',
				title: 'Move Suggestions',
				description:
					'Get top engine-recommended moves for any scenario, from openings to endgames.',
			},
			{
				id: 'game-review',
				emoji: '📜',
				title: 'Game Review',
				description:
					'Analyze full games with detailed move-by-move evaluation and blunder detection.',
			},
			{
				id: 'privacy-first',
				emoji: '🔒',
				title: 'Privacy First',
				description:
					'All engine calculations run locally in your browser. Your games stay private.',
			},
			{
				id: 'multi-device',
				emoji: '📱',
				title: 'Multi-Device Ready',
				description:
					'Access powerful engine analysis from desktops, tablets, or phones with responsive design.',
			},
			{
				id: 'export-analyses',
				emoji: '💾',
				title: 'Export Analyses',
				description:
					'Save your game analyses and engine evaluations as PDFs or PGN files for review or sharing.',
			},
		],
	},
	cta: {
		title: 'Start Analyzing Your Chess Today',
		description:
			'Improve your game with instant engine evaluations, tactical insights, and detailed analyses. No signup required.',
		buttonText: 'Open ChessEngine',
		buttonHref: '/app',
	},
	footer: {
		name: 'ChessEngine',
	},
};

const HomePage: NextPage = () => {
	return <LandingTemplate content={content} />;
};

export default HomePage;
