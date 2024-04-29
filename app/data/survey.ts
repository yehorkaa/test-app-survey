export interface IAnswer {
	title: string
	nextSlug: string
	query: Record<string, string>
}
export type page_types = 'survey' | 'landing'

export interface QuestionProps {
	title: string
	description: string
	page_type: page_types
	answers: IAnswer[]
}

export interface SurveyDataProps {
	[key: string]: QuestionProps
}

export type SurveyNamesType = keyof SurveyDataProps;

export const SurveyData: SurveyDataProps = {
	flow_choice: {
		title:
			'So we can get to know you better, tell us about your relationship status.',
		description: '',
		page_type: 'survey',

		answers: [
			{
				title: 'Single',
				nextSlug: 'parent_single',
				query: {},
			},
			{
				title: 'In a relationship',
				nextSlug: 'parent',
				query: {},
			},
		],
	},
	parent_single: {
		title: 'Are you a single parent?',
		page_type: 'survey',
		description: '',

		answers: [
			{
				title: 'Yes',
				nextSlug: 'in_a_rrelationship_problem',
				query: {},
			},
			{
				title: 'No',
				nextSlug: 'in_a_rrelationship_problem',
				query: {},
			},
		],
	},
	parent: {
		title: 'Are you a parent?',
		page_type: 'survey',
		description: '',

		answers: [
			{
				title: 'Yes',
				nextSlug: 'single_problem',
				query: {},
			},
			{
				title: 'No',
				nextSlug: 'single_problem',
				query: {},
			},
		],
	},
	in_a_rrelationship_problem: {
		title:
			'{Gender} {who have children (if have children)} need a slightly different approach to improve their relationship. Which statement best describes you?',
		description: '',
		page_type: 'survey',
		answers: [
			{
				title: 'I’m very unhappy with how things are going in my relationship',
				nextSlug: 'traits_tend_to_overthink',
				query: {},
			},
			{
				title:
					'I’m unhappy with parts of my relationship, but some things are working well',
				nextSlug: 'traits_tend_to_overthink',
				query: {},
			},
			{
				title: 'I’m generally happy in my relationship',
				nextSlug: 'traits_tend_to_overthink',
				query: {},
			},
		],
	},
	single_problem: {
		title:
			'Single {gender} {who have children (if have children)} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
		page_type: 'survey',
		description: '',

		answers: [
			{
				title: 'I was unhappy with low things were going in my relationship',
				nextSlug: 'partner_introvert_or_extrovert',
				query: {},
			},
			{
				title:
					'I was unhappy with parts of my relationship, but some thing were working',
				nextSlug: 'partner_introvert_or_extrovert',
				query: {},
			},
			{
				title: 'I was generally happy with my relationship',
				nextSlug: 'partner_introvert_or_extrovert',
				query: {},
			},
			{
				title: 'I’ve never been in a relationship',
				nextSlug: 'partner_introvert_or_extrovert',
				query: {},
			},
		],
	},
	traits_tend_to_overthink: {
		title: 'Do you tend to overthink?',
		description: '',
		page_type: 'survey',
		answers: [
			{
				title: 'Yes',
				nextSlug: 'what_is',
				query: { status: 'yes' },
			},
			{
				title: 'No',
				nextSlug: 'what_is',
				query: { status: 'no' },
			},
		],
	},
	partner_introvert_or_extrovert: {
		title: 'Is your partner an introvert or extrovert?',
		description: '',
		page_type: 'survey',

		answers: [
			{
				title: 'Introvert',
				nextSlug: 'partner_gender',
				query: {},
			},
			{
				title: 'Extrovert',
				nextSlug: 'partner_gender',
				query: {},
			},
			{
				title: 'A bit of both',
				nextSlug: 'partner_gender',
				query: {},
			},
		],
	},
	what_is: {
		title: 'So how does it work?',
		description:
			'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
		page_type: 'landing',

		answers: [
			{
				title: 'Next',
				nextSlug: 'traits_most_important',
				query: {},
			},
		],
	},
	partner_gender: {
		title: 'What is your partner’s gender?',
		description: '',
		page_type: 'survey',

		answers: [
			{
				title: 'Male',
				nextSlug: 'partner_priority',
				query: {},
			},
			{
				title: 'Female',
				nextSlug: 'partner_priority',
				query: {},
			},
		],
	},
	partner_priority: {
		title: 'Do you agree with the statement below?',
		description: '“My partner and I make sex a priority in our relationship”',
		page_type: 'survey',
		answers: [
			{
				title: 'Strongly agree',
				nextSlug: 'think_about_relationship_goals',
				query: {},
			},
			{
				title: 'Agree',
				nextSlug: 'think_about_relationship_goals',
				query: {},
			},
			{
				title: 'Neutral',
				nextSlug: 'think_about_relationship_goals',
				query: {},
			},
			{
				title: 'Disagee',
				nextSlug: 'think_about_relationship_goals',
				query: {},
			},
			{
				title: 'Strongly disagree',
				nextSlug: 'think_about_relationship_goals',
				query: {},
			},
		],
	},
	traits_most_important: {
		title: 'What is most important to you?',
		description: '',
		page_type: 'survey',

		answers: [
			{
				title: 'Success',
				nextSlug: 'relationship_about_us',
				query: {},
			},
			{
				title: 'Romance',
				nextSlug: 'relationship_about_us',
				query: {},
			},
			{
				title: 'Stability',
				nextSlug: 'relationship_about_us',
				query: {},
			},
			{
				title: 'Freedom',
				nextSlug: 'relationship_about_us',
				query: {},
			},
		],
	},
	traits_emotional_control: {
		title: 'Is emotional control tricky for you?',
		description: '',
		page_type: 'survey',

		answers: [
			{
				title: 'Yes',
				nextSlug: 'relationship_about_us',
				query: {},
			},
			{
				title: 'Sometimes',
				nextSlug: 'relationship_about_us',
				query: {},
			},
			{
				title: 'Rarely',
				nextSlug: 'relationship_about_us',
				query: {},
			},
			{
				title: 'Not at all',
				nextSlug: 'relationship_about_us',
				query: {},
			},
		],
	},
	think_about_relationship_goals: {
		title: 'When you think about your relationship goals, you feel...?',
		description: '',
		page_type: 'survey',

		answers: [
			{
				title: 'Optimistic! They are totally doable, with some guidance.',
				nextSlug: 'relationship_about_us',
				query: {},
			},
			{
				title: 'Cautious. I’ve struggled before, but I’m hopeful.',
				nextSlug: 'relationship_about_us',
				query: {},
			},
			{
				title: 'I’m feeling a little anxious, honestly.',
				nextSlug: 'relationship_about_us',
				query: {},
			},
		],
	},
	relationship_about_us: {
		title: 'Where did you hear about us?',
		description: '',
		page_type: 'survey',

		answers: [
			{
				title: 'Poster or Billboard',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Friend or Family',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Instagram',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Direct Mail or Package Insert',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Online TV or Streaming TV',
				nextSlug: '',
				query: {},
			},
			{
				title: 'TV',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Radio',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Search Engine (Google, Bing, etc.)',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Newspaper or Magazine',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Facebook',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Blog Post or Website Review',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Podcast',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Influencer',
				nextSlug: '',
				query: {},
			},
			{
				title: 'YouTube',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Pinterest',
				nextSlug: '',
				query: {},
			},
			{
				title: 'Other',
				nextSlug: '',
				query: {},
			},
		],
	},
}
