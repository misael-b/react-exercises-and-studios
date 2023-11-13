import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://joyfoodsunshine.com/about-laura/";
    let authorPhoto = "https://joyfoodsunshine.com/wp-content/uploads/2023/10/Laura_Headshot.jpeg";
    let authorName = "Laura"
    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Picture of Laura" className={styles.imageUpdates} height={200}/>
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Joy Food Sunshine: About Laura</a>
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
                    <p>A simple, straightforward, amazingly delicious recipe for chocolate chip cookies</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    };
};

export default RecipeDescription;