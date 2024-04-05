import css from "./Options.module.css";

export default function ({update,fbType}) {
    return (<button onClick={update} className={css.btn}>{fbType}</button>)
}