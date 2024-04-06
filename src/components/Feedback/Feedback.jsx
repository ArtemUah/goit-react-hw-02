import css from "./Feedback.module.css";

export default function ({totalFeedback, positiveFeedback, feedbackTypes}) {
    return (
    <ul className={css.itemList}>
            <li>Good: {feedbackTypes.good}</li>
            <li>Neutral: {feedbackTypes.neutral}</li>
            <li>Bad: {feedbackTypes.bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positiveFeedback}%</li>
        </ul>) 
}