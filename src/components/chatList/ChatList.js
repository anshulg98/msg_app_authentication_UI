import React, { Component,setState,useState } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
 
export default class ChatList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      allChats: [],
      FilteredResults:[]
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/api/auth/chatlist")
        .then((res) => res.json())
        .then((json) => {
          let lst=(Object.entries(json)[0][1])
          // console.log(lst)
          this.setState({
                allChats:lst,       
                FilteredResults: lst        
            });
        })
}
  
  render() {

    const searchItems = (searchValue) => {
      console.log(searchValue)
      if (searchValue !== '') {
          const filteredData = this.state.allChats.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
          })
          this.setState({FilteredResults:filteredData})
      }
      else{
          this.setState({FilteredResults:this.state.allChats})
      }
  }
    
    return (
      <div className="main__chatlist">
        
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" onChange={(e) => searchItems(e.target.value)} required/>
            <button className="search-btn" >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.FilteredResults.map((item, index) => {
            return (
              <ChatListItems
                name={item.username}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.flag ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }

}
