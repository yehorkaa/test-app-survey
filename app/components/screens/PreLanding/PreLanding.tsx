import Link from 'next/link'
import React from 'react'

import { getButtonStyles } from '@/components/ui/button/Button'

import { useSurveyActions } from '@/hooks/useSurveyActions'

import Logo from '@/assets/logo_black'

import { Meta } from '@/utils/meta/Meta'

const PreLanding = () => {

	const { addAnswer } = useSurveyActions()

	return (
		<Meta
			title="Pre Landing page"
			description="Here you can start your journey"
		>
			<section className="bg-pink-500 screen-section-base">
				<div className="flex flex-col items-center text-start gap-3 w-full py-5 px-8">
					<header className="header-base">
						<div />
						<div>
							<Logo />
						</div>
						<div />
					</header>
					<main className="w-full max-w-[330px] flex flex-col gap-3">
						<h1 className="bolted-h">Select your gender:</h1>
						<Link href="/flow_choice">
							<a
								className={getButtonStyles({ variant: 'primary', size: 'lg' })}
								onClick={() => addAnswer({ slug: 'gender', answer: 'Female' })}
							>
								<span>Female</span>
							</a>
						</Link>
						<Link href="/flow_choice">
							<a
								className={getButtonStyles({ variant: 'primary', size: 'lg' })}
								onClick={() => addAnswer({ slug: 'gender', answer: 'Male' })}
							>
								<span>Male</span>
							</a>
						</Link>
					</main>
				</div>
			</section>
		</Meta>
	)
}

export default PreLanding
