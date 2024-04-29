import { IAnswer } from "@/data/survey";



export interface SurveyAnswersListProps {
    answers: IAnswer[];
    slug: string;
}