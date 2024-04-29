import { useRouter } from 'next/router'
import React, { FC } from 'react'

import ArrowLeft from '@/assets/arrow_left'
import Logo from '@/assets/logo_white'

import { Meta } from '@/utils/meta/Meta'

import LandingAnswersList from './LandingAnswersList'
import { QuestionProps } from '@/data/survey'

const Info: FC<QuestionProps> = ({ answers, title, description }) => {

	const { back, query } = useRouter()

	return (
		<Meta title={`${title} page`} description="Here you can start your journey">
			<section className="bg-purple-400 screen-section-base">
				<header className="flex items-center w-full justify-between px-8 pb-3">
					<div className="cursor-pointer" onClick={back}>
						<ArrowLeft fill="#e0e0e0" />
					</div>
					<div>
						<Logo />
					</div>
					<div />
				</header>
				<main className="flex flex-col items-center w-full max-w-[330px] text-center gap-3">
					<h1 className="text-white-300 mb-3 font-bold text-2xl">{title}</h1>
					<p className="text-sm text-white-300">{description}</p>
					<LandingAnswersList answers={answers} query={query} />
				</main>
			</section>
		</Meta>
	)
}

export default Info
