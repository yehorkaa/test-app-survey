import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { useTypedSelector } from '@/hooks/useTypesSelector'

import ArrowLeft from '@/assets/arrow_left'
import Logo from '@/assets/logo_black'

import { Meta } from '@/utils/meta/Meta'
import { captizalizeFirst } from '@/utils/string/captizalizeFirst'
import { replaceBracketsWithStateValues } from '@/utils/string/replaceBracketsWithValues'

import SurveyAnswersList from './SurveyAnswersList'
import { QuestionProps } from '@/data/survey'

const Survey: FC<QuestionProps> = ({ answers, title, description }) => {
	const state = useTypedSelector((state) => state.survey)
	const {
		query: { slug },
		back,
	} = useRouter()

	return (
		<Meta title={`${title} page`} description="Here you can start your journey">
			<section className="bg-pink-500 screen-section-base">
				<header className="flex items-center w-full justify-between px-8 pb-3">
					<div className="cursor-pointer" onClick={back}>
						<ArrowLeft />
					</div>
					<div>
						<Logo />
					</div>
					<div />
				</header>
				<main className="flex flex-col items-center w-full max-w-[330px] text-center gap-3">
					<h1 className="bolted-h mr-auto mb-3">
						{captizalizeFirst(replaceBracketsWithStateValues(title, state))}
					</h1>
					<p className="bolted-p">{captizalizeFirst(description)}</p>
					<SurveyAnswersList
						answers={answers}
						slug={typeof slug === 'string' ? slug : ''}
					/>
				</main>
			</section>
		</Meta>
	)
}

export default Survey
