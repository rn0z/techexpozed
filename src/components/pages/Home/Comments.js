import React from 'react';
import Block from "../../HOC/Block";
import { commentData } from "./data";
import { restartAnimation, enterAnimation, exitAnimation } from "../../resusable/Animations";
class Comments extends React.Component {
  state={
    comments: [],
    comment: {},
    numberOfSections: 0
  }
  componentDidMount() {
    // Add comments from comment data file into comments array
    this.setState({ 
      comments: commentData,
      comment: commentData[0],
      numberOfSections: commentData.length
    })

  }
  next = () => { // Next comment function
    var commentElement = document.getElementById("commentElement");
    enterAnimation(commentElement);
    restartAnimation(commentElement); // Fade out comment

    setTimeout(() => {
      exitAnimation(commentElement);
      let newIndex = this.state.comment.index + 1;
      if(newIndex > (this.state.numberOfSections - 1)) {
        newIndex = 0;
      }
      restartAnimation(commentElement); // Fade in the next comment
      this.setState({ comment: this.state.comments[newIndex] });
    }, 1000);

    setTimeout(() => {
      commentElement.style.opacity = "1";
    }, 2000);

  }

  getCommentByIndex = (i) => {
    var commentElement = document.getElementById("commentElement");
    enterAnimation(commentElement);
    restartAnimation(commentElement); // Fade out comment

    setTimeout(() => {
      exitAnimation(commentElement);
      restartAnimation(commentElement); // Fade in the next comment
      this.setState({ comment: this.state.comments[i] });
    }, 1000);

    setTimeout(() => {
      commentElement.style.opacity = "1";
    }, 2000);
  }

  prev = () => { // Previous comment function
    var commentElement = document.getElementById("commentElement");
    enterAnimation(commentElement);
    restartAnimation(commentElement); // Fade out comment

    setTimeout(() => {
      exitAnimation(commentElement);
      let newIndex = this.state.comment.index - 1;
      if (newIndex < 0) {
        newIndex = this.state.numberOfSections - 1;
      }
      restartAnimation(commentElement); // Fade in the previous comment
      this.setState({ comment: this.state.comments[newIndex] });
    }, 1000);
    setTimeout(() => {
      commentElement.style.opacity = "1";
    }, 2000);
  }
  onDotClick = (i) => {
    if (i === this.state.comment.index) { // If already on same index
      return;
    }
    this.getCommentByIndex(i);
  }
  render(){
    const comments = !this.state.comments ? '' : this.state.comments;
    return (
      <Block classes="block__wrapper">
        <div className="home__comments container re-order" >
          <h1 className="heading-large">
            <span className="alternate-heading-color">They talk about us</span>
          </h1>
          <div className="row" >
            <div className="col-xs-10 col-md-8 text first" >
              <figure id="commentElement" className="comments" >
                <blockquote className="quote">
                  <p>{this.state.comment.comment}</p>
                </blockquote>
                <figcaption><b className="heading-small alternate-heading-color large-font-130">{this.state.comment.name},</b><br/> {this.state.comment.position}</figcaption> 
              </figure><br/>
              <div className="dot dot-comment" >
                {
                  comments.map((comment, i) => (
                    <button 
                    className={`dot__button ${this.state.comment.index===i ? 'active':'' }`} key={i} 
                    onClick={() => this.onDotClick(comment.index)} aria-label={"Comment by " + comment.name} title={"Comment by " + comment.name}>&nbsp;</button>
                  ))
                }
              </div>
            </div>
            <div className="col-xs-2 col-md-4 image second" >
              <img className="round-img" src={this.state.comment.picture} alt={"Image of " + this.state.comment.name} />
            </div>
            <div className="col-md-8 col-md-offset-4 first text-align-center">
              <button onClick={this.prev} aria-label="Previous comment" title="Previous comment" className="left-chevron-button"></button>
              <button onClick={this.next} aria-label="Next comment" title="Next comment" className="right-chevron-button margin-left-50"></button>
            </div>
          </div>
        </div>
      </Block>
    )
  }
}
export default Comments;
