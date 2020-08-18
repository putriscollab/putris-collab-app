import React from 'react';
import './css/index.css';
import './css/fonts.css';


function Favorites() {
  return (
    <div className="Favorites">
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
    <h3>Your Favorites</h3>
    <section className="favorites-section">
        <div className="favorites-container">
            <div className="favorites-image-container"><img src="https://via.placeholder.com/150" alt=""/></div>
            <div className="favorites-image-container"><img src="https://via.placeholder.com/150" alt=""/></div>
            <div className="favorites-image-container"><img src="https://via.placeholder.com/150" alt=""/></div>
        </div>
    </section>
     <section className="playlists-section">
         <h3>Your Playlists</h3>
        <div className="playlists-container">
            <div className="favorites-image-container"><img src="https://via.placeholder.com/150" alt=""/></div>
            <div className="favorites-image-container"><img src="https://via.placeholder.com/150" alt=""/></div>
            <div className="favorites-image-container"><img src="https://via.placeholder.com/150" alt=""/></div>
            <div className="favorites-image-container"><img src="https://via.placeholder.com/150" alt=""/></div>
            <div className="favorites-image-container"><img src="https://via.placeholder.com/150" alt=""/></div>
            <div className="favorites-image-container"><img src="https://via.placeholder.com/150" alt=""/></div>
        </div>
    </section>
    <section className="add-playlist-section">
        <div className="add-playlist-container">
            <h3>ADD A PLAYLIST</h3>
            <button className="add-button">+</button>
        </div>
    </section>
    </div>
  );
}



export default Favorites;