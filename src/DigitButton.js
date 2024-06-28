import { ACTIONS } from "./App";

export default function DigitButton({ dispatch, digit }) {
    return(
    <button
        onClick={() => dispatch({ type: ACTIONS.ADDING_DIGIT, payload: { digit } })}
    >
        {digit}
    </button>
    )
}