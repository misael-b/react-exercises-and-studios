import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://joyfoodsunshine.com/about-laura/";
    let authorPhoto = "https://joyfoodsunshine.com/wp-content/uploads/2023/10/Laura_Headshot.jpeg";
    let authorName = "Laura"
    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>
    );
};

class RecipeDescription extends React.Component {
    render() {
        return (
        <div>
            <div>
                <h1>Chocolate Chip Cookies</h1>
                <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
        </div>)
        
     }
}

export default RecipeDescription;