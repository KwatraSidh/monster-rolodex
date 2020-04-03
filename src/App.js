import React, { Component } from 'react';
import './App.css';
import CardList from "./components /card-list/card-list.component"
import {SearchBox} from "./components /search/search.component"


class App extends Component {
  constructor()
  { super();
    this.state ={
      monsters :[],
      searchField:""
    }
    
}
 componentDidMount()
 {
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(Response=>Response.json())
   .then(posts=>this.setState({monsters:posts}))
 }   

 handleChange =(e) =>{this.setState({searchField:e.target.value})}


  render () {
    const {monsters,searchField} = this.state;
    const filterMonster = monsters.filter(monster=>{ return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())});

    return (
    <div className="App">
    <h1>Monster Rolodex</h1>
    <SearchBox placeholder ="search box" handleChange = {this.handleChange}/>
    <CardList monsters={filterMonster}/>
    </div>
    )
    
  }
}

export default App;
