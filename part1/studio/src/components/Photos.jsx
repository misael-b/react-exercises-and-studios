import styles from './Description.module.css';

export default function RecipePhoto() {
    return (
        <img src="https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg"
            alt="chocolate chip cookies"
            className={styles.imageUpdates}
        height={200}/>
    )
}