import React from 'react';
import './css/index.css';
import './css/fonts.css';


function NewTutorial() {
  return (
    <div className="New-tutorial">
<section className="tutorial-video-section">
        <div className="tutorial-video-container">
            <img src="https://via.placeholder.com/300x200" alt=""/>
        </div>
    </section>
    <section className="new-tutorial-section">
        <h3>New tutorial</h3>
        <form className="new-content-form"action="">
        <label for="author">Author</label>
        <input type="text" name="author"/>
        <label for="category">Category</label>
        <input type="text" name="category"/>
        <label for="platform">Platform</label>
        <input type="text" name="platform"/>
        <label for="time">Time</label>
        <input type="number" name="time"/>
    </form>
    <form className="description-form"action="">
    <label for="description"><h3>Description</h3></label>
    <textarea name="" id="" cols="30" rows="5"></textarea>
    </form>
</section>
     <section className="tags-section">
         <h3>Tags</h3>
    <form className="tags-form" action="">
        <label for="tag1">1.</label>
        <input type="text" name="tag1"/>
        <label for="tag2">2.</label>
        <input type="text" name="tag2"/>
        <label for="tag3">3.</label>
        <input type="text" name="tag3"/>
    </form>
    </section>
    <section className="send-tutorial-section">
        <div className="send-tutorial-container">
            <h3>SEND TUTORIAL</h3>
            <button className="send-tutorial-button">--</button>
        </div>
    </section>
    </div>
  );
}



export default NewTutorial;