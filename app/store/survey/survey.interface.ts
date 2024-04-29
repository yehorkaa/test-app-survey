


export interface surveyState {
    [key: string]: string;
}

export interface addAnswerPayloadType {
    payload: {
        slug: string;
        answer: string
    }
}