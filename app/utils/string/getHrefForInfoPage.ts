import { ParsedUrlQuery } from 'querystring'

export const getHrefForInfoPage = (query: ParsedUrlQuery) => {
    if (query && 'status' in query && typeof query.status === 'string') {
        const overthink = query.status.toLowerCase()
        if (overthink === 'yes') {
            return '/traits_most_important'
        } else if (overthink === 'no') {
            return '/traits_emotional_control'
        }
        return '/traits_emotional_control'
    }
    return '/'
}