import { IAnswer } from "@/data/survey"
import { ParsedUrlQuery } from "querystring"

export interface InfoAnswersListProps {
	answers: IAnswer[]
	query: ParsedUrlQuery
}
