import React from 'react';
import './css/index.css';
import './css/fonts.css';


function App() {
  return (
    <div className="App">
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
            <img className="profile-image flex-item"src="https://via.placeholder.com/50" alt="Profile"/>
    </nav>       
  </header>
  <main>
    <h2>Hello, <strong>Username</strong></h2>
    <section className="homepage-favorites-section">
        <h3>Favorites</h3>
        <div className="homepage-favorites-container">
            <img className="favorites-image" src="https://via.placeholder.com/300x200" alt=""/>
        </div>
    </section>
     <section className="recent-section">
         <h3>Recent</h3>
        <div className="recent-container">
            <div className="recent-image-container"><img src="https://via.placeholder.com/100" alt=""/></div>
            <div className="recent-image-container"><img src="https://via.placeholder.com/100" alt=""/></div>
            <div className="recent-image-container"><img src="https://via.placeholder.com/100" alt=""/></div>
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



export default App;
