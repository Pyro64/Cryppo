import style from './Spinner.module.scss'
export default function Spinner() {
    return (
        <div className={style.container}>
            <div className={style.item}>Загрузка</div>
        </div>
    )
}
