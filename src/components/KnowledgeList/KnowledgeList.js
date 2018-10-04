import React, { Component } from "react";
import "./KnowledgeList.css";
import KnowledgeBubble from "./KnowledgeBubble"

/*
pull information for all of the knowledge from the database
loop through the information and make a knowledgebubble for each
pass in whatever information we are going to show in the cards
*/



export default class KnowledgeList extends Component  {
    
    GetKnowledge = () => {
        //getting all of the knowledge out of the database.
        // let knowledgeList = db.Knowledge.findAll();


        // //going through the loop of all of the knowledge items
        // for(var i = 0;i < knowledgeList.length;i++)
        // {
            
        // }

    };

    render (){
        return(
            <div>
            {this.GetKnowledge}
          </div>
        )

    }
  };