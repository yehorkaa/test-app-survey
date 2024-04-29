import { getButtonStyles } from '@/components/ui/button/Button'
import { useSurveyActions } from '@/hooks/useSurveyActions'
import Link from 'next/link'
import React, { FC } from 'react'
import { SurveyAnswersListProps } from './Survey.interface'


const SurveyAnswersList: FC<SurveyAnswersListProps> = ({ answers, slug }) => {

	const { addAnswer } = useSurveyActions()

	return (
		<ul className="space-y-4 w-full">
			{answers.map(({ title, nextSlug, query }) => (
				<li key={title}>
					<Link
						href={
							nextSlug
								? {
										href: `/${nextSlug}`,
										query: { slug: nextSlug, ...query },
								  }
								: '/'
						}
					>
						<a
							className={getButtonStyles({
								variant: 'primary',
								size: 'lg',
								className: 'block',
							})}
							onClick={() => addAnswer({ slug, answer: title })}
						>
							{title}
						</a>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default SurveyAnswersList
