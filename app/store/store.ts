import { configureStore } from "@reduxjs/toolkit";
import { surveyReducer } from "./survey/survey.slice";


export const store = configureStore({
    reducer: {
        survey: surveyReducer,
    }
})
export type TypeRootState = ReturnType<typeof store.getState>

