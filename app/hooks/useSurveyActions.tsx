import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { surveyActions } from '@/store/survey/survey.slice'

export const useSurveyActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(surveyActions, dispatch), [dispatch])
}
