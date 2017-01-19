import React, { Component } from 'react'
import { Link } from 'react-router';
import {getData} from "../index"

class Menu extends Component {
  render(){
    return (
          <div className="page-links-block ">
	          { (() => {
	             let links = []; 
	              for (let i = 1; i <= 10; i++) {
		             links.push(
		             	<div 
		             		key={i}
		             		onClick={ () => {
		             			getData(i)
		             		}} 
		             		 className="page-links"
		             	>
		                	<Link to={"/"+i} key={i}>{i}</Link>
		                </div>
		              )
	             	}
	              return links
	            })()
	          }
          </div>
    )
  }
}


export default Menu;
