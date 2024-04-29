import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { onlyText } from '../string/clearText'

interface ISeo {
	title: string
	description?: string
}

export const Meta: FC<ISeo> = ({
	title,
	description,
	children,
}) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			{description ? (
				<Head>
					<title itemProp="headline">{'Nebula Test App'}</title>
					<meta
						itemProp="description"
						name="description"
						content={onlyText(description, 152)}
					/>
					<link rel="canonical" href={currentUrl} />
					<meta property="og:locale" content="en" />
					{/*og это все для соц сетей*/}
					<meta property="og:title" content={'Nebula Test App'} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:site_name" content={'Nebula Test App'} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
				</Head>
			) : (
				<meta title={title} />
			)}
			{children}
		</>
	)
}
