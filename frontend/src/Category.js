import React from 'react';
import './css/index.css';
import './css/fonts.css';


function Category() {
  return (
    <div className="Category">
    <header>
        <nav role="navigation" className="nav-bar">
            <div id="menuToggle" className="flex-item">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <li><a href="./">Home</a></li>
                <li><a href="./category.html">Category</a></li>
                <li><a href="./favorites.html">Favorites</a></li>
              </ul>
            </div>
            <h2 className="flex-item browse">Browse</h2>                
                <img className="profile-image flex-item"src="https://via.placeholder.com/50" alt="profile picture"/>
        </nav>       
</header>
<main>
    <h2>JavaScript Tutorials</h2>
    <section className="category-section">
        <h3>ES6</h3>
        <div className="category-container">
            <div className="category-image-container"><img src="https://via.placeholder.com/200" alt=""/></div>
            <div className="category-image-container"><img src="https://via.placeholder.com/200" alt=""/></div>
        </div>
    </section>
    <section className="category-section">
        <h3>OOJS</h3>
        <div className="category-container">
            <div className="category-image-container"><img src="https://via.placeholder.com/200" alt=""/></div>
            <div className="category-image-container"><img src="https://via.placeholder.com/200" alt=""/></div>
        </div>
    </section>
    <section className="search-section">
        <div className="search-container">
            <input className="search-bar" type="text" placeholder="Search.." name="search"/>
        </div>
    </section>
</main>
    </div>
  );
}



export default Category;
