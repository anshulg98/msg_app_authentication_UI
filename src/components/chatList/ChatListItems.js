import React, { Component } from "react";
import ChatContent from "../chatContent/ChatContent";
import Avatar from "./Avatar";



export default class ChatListItems extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentTarget:[
        {name: this.props.name,
        isOnline:this.props.isOnline,
        image:this.props.image ? this.props.image : "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png"}
      ]
    }
  }
  selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
      var lst=[
        {name: this.props.name},
        {isOnline:this.props.isOnline},
        {image:this.props.image ? this.props.image : "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png"}
    ]
    this.setState({currentTarget:lst})    
  };
  

  render() {
    
    return (
      
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={
         this.selectChat
        }
        className={`chatlist__item ${
          this.props.active ? this.props.active : ""
        } `}
      >

        <Avatar
          image={
            this.props.image ? this.props.image : "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_960_720.png"
          }
          isOnline={this.props.isOnline}
        />

        
<div className="userMeta">
          <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}