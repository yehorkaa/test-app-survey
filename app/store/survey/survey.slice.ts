import { createSlice } from '@reduxjs/toolkit'

import { surveyState, addAnswerPayloadType } from './survey.interface'

const initialState: surveyState = {
	gender: '',
	relationship_status: '',
	flow_choice: '',
	parent: '',
	parent_single: '',
	in_a_rrelationship_problem: '',
	single_problem: '',
	traits_tend_to_overthink: '',
	partner_introvert_or_extrovert: '',
	what_is: '',
	partner_gender: '',
	partner_priority: '',
	traits_most_important: '',
	traits_emotional_control: '',
	think_about_relationship_goals: '',
	relationship_about_us: '',
}

const surveySlice = createSlice({
	name: 'survey',
	initialState,
	reducers: {
		addAnswer: (
			state: surveyState,
			action: addAnswerPayloadType,
		) => {
			const { slug, answer } = action.payload
			return { ...state, [slug]: answer }
		},
	},
})

export const { reducer: surveyReducer, actions: surveyActions } = surveySlice
