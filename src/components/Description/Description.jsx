import css from "./Description.module.css";

export default function ({title, description}) {
    return (
        <div className={css.container}>
            <h1 className={css.title}>{title}</h1>
            <p className={css.text}>{description}</p>
        </div>
    )
}