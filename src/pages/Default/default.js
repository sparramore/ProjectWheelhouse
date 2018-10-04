import React, { Component } from "react";
import "./default.css";
import Dashboard from "../../components/Dashboard/Dashboard"
import KnowledgeBubble from "../../components/KnowledgeList/KnowledgeBubble"
import KnowledgeList from "../../components/KnowledgeList/KnowledgeList"

class Default extends Component{
    render() {
        return (
            <div>
                <div class="pageHeader"></div>
                <Dashboard></Dashboard>
                <KnowledgeBubble></KnowledgeBubble>
            </div>
        )
    }
}

export default Default;