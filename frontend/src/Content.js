import React from 'react';
import './css/index.css';
import './css/fonts.css';


function Content() {
  return (
    <div className="Content">
       <main>
    <h2>Video Tutorial</h2>
    <section className="tutorial-video-section">
        <div className="tutorial-video-container">
            <img src="https://via.placeholder.com/340x200" alt=""/>
            </div>
    </section>
    <section className="main-content-section">
        <h3>Configure Webpack and Babel to build a React application</h3>
        <h4><em>by Rocco Panacci</em></h4>
        <div className="main-content-container">
            <div className="main-content-image-container"><img src="https://via.placeholder.com/75" alt=""/></div>
            <div className="main-content-image-container"><img src="https://via.placeholder.com/75" alt=""/></div>
            <div className="main-content-image-container"><img src="https://via.placeholder.com/75" alt=""/></div>
        </div>
        <div>
            <h4>Tags</h4>
            <div className="main-content-tags-container">
                <div className="main-content-tags-image-container"><img src="https://via.placeholder.com/50x25" alt=""/></div>
                <div className="main-content-tags-image-container"><img src="https://via.placeholder.com/50x25" alt=""/></div>
                <div className="main-content-tags-image-container"><img src="https://via.placeholder.com/50x25" alt=""/></div>
                <div className="main-content-tags-image-container"><img src="https://via.placeholder.com/50x25" alt=""/></div>
            </div>
        </div>
    </section>
    <section className="comments-section">
        <article className="comments-container">
            <p className="comments-heading">Straight to the point</p>
            <p className="comments-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil assumenda reprehenderit beatae placeat asperiores! Nulla non iste repudiandae, quas debitis eveniet? Similique in hic eos distinctio fugit commodi nam vitae.</p>
            <p className="comments-owner">by Brendan</p>
            <div>
                <img className="rating" src="https://i.imgur.com/HwWxMTY.png" alt="star rating"/>
            </div>
        </article>
        <article className="comments-container">
            <p className="comments-heading">Straight to the point</p>
            <p className="comments-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil assumenda reprehenderit beatae placeat asperiores! Nulla non iste repudiandae, quas debitis eveniet? Similique in hic eos distinctio fugit commodi nam vitae.</p>
            <p className="comments-owner">by Brendan</p>
            <div>
                <img className="rating" src="https://i.imgur.com/HwWxMTY.png" alt="star rating"/>
            </div>
        </article>
        <article className="comments-container">
            <p className="comments-heading">Straight to the point</p>
            <p className="comments-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil assumenda reprehenderit beatae placeat asperiores! Nulla non iste repudiandae, quas debitis eveniet? Similique in hic eos distinctio fugit commodi nam vitae.</p>
            <p className="comments-owner">by Brendan</p>
            <div className="main-content-star-rating-container">
                <img className="rating" src="https://i.imgur.com/XEVrIFI.png" alt="star rating"/>
            </div>
        </article>
    </section>
</main>
    </div>
  );
}



export default Content;