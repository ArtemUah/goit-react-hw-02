import css from "./Feedback.module.css";

export default function ({totalFeedback, fbTypes, good, neutral, bad, total, positive}) {
    return (
        <>
        {totalFeedback ? (<ul className={css.itemList}>
            <li>{good}: {fbTypes.good}</li>
            <li>{neutral}: {fbTypes.neutral}</li>
            <li>{bad}: {fbTypes.bad}</li>
            <li>{total}: {totalFeedback}</li>
            <li>{positive}: {Math.round((fbTypes.good / totalFeedback) * 100)}%</li>
        </ul>) : 
        (<p className={css.text}>No feedback yet</p>)}</>
    )
}