import React from "react"
import { element } from "prop-types";

export default class Record extends React.Component {
    constructor(){
        super();
        this.state = {
            userinfo: [
                {   name: "cris",
                    total: 1
                },
                {   name: "cris",
                    total: 1
                },  {   name: "cris",
                    total: 1
                }
            ]}
    }

    render(){
        return(
            <div>
                <li>
                    { this.state.userinfo.map((element,index) => {
                        element.name
                    })}
                </li>
            </div>
        )
    }
}