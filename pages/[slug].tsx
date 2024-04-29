import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Survey from '@/components/screens/Survey/Survey'
import { SurveyData, QuestionProps } from '@/data/survey'
import Landing from '@/components/screens/Landing/Landing';
import NotFound from './404'


const PageList = {
	survey: (props: QuestionProps) => <Survey {...props} />,
	landing: (props: QuestionProps) => <Landing {...props} />,
}

const QuestionPage: NextPage<QuestionProps> = (props) => {
	const page_type = props.page_type;
	if (page_type && PageList.hasOwnProperty(page_type)) {
		return <>{PageList[page_type](props)}</>
	}

	return <NotFound/>
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const questions = Object.keys(SurveyData)
		const paths = questions.map((path) => ({
			params: { slug: path },
		}))
		return {
			paths,
			fallback: 'blocking',
		}
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const slug = params?.slug
		if (typeof slug === 'string' && SurveyData.hasOwnProperty(slug)) {
			const data = SurveyData[slug]
			return {
				props: {
					answers: data.answers,
					title: data.title,
					description: data.description,
					page_type: data.page_type,
				},
			}
		}
		return {
			props: {},
		}
	} catch (e) {
		return {
			props: {},
		}
	}
}

export default QuestionPage
