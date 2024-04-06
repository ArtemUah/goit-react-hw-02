import css from "./Options.module.css";

export default function ({totalFeedback, updateGood, updateNeutral, updateBad, resetFeedback}) {
    return (<div>
        <button onClick={updateGood} className={css.btn}>Good</button>
        <button onClick={updateNeutral} className={css.btn}>Neutral</button>
        <button onClick={updateBad} className={css.btn}>Bad</button>
        {totalFeedback > 0 && (<button onClick={resetFeedback} className={css.btn}>Reset</button>
)}
    </div>)
}