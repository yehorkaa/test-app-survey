import Link from 'next/link'
import React, { FC, memo } from 'react'
import { getButtonStyles } from '@/components/ui/button/Button'
import { getHrefForInfoPage } from '@/utils/string/getHrefForInfoPage'
import { InfoAnswersListProps } from './Landing.interface'


const InfoAnswersList: FC<InfoAnswersListProps> = ({ answers, query }) => {
	return (
		<ul className="space-y-4 w-full">
			{answers.map(({ title }) => (
				<li key={title}>
					<Link href={getHrefForInfoPage(query)}>
						<a
							className={getButtonStyles({
								variant: 'primary',
								size: 'lg',
								className: 'block',
							})}
						>
							{title}
						</a>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default memo(InfoAnswersList)
