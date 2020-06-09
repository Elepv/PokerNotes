import React from 'react';

export default class KeyDemo extends React.Component{
    
    constructor(){
        super();
        this.state = {
            userinfo: [
                {
                    name: "cris",
                    age: 20,
                    sex: "male",
                    jobs: ["bar","chef","manger"]
                },
                {
                    name: "annel",
                    age: 18,
                    sex: "female",
                    jobs: ["bar","chef","manger"]
                },
                {
                    name: "steve",
                    age: 23,
                    sex: "male",
                    jobs: ["bar","chef","manger"]
                }
            ]
        }
    }
    
    
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.userinfo.map((element,index) => {
                            return(
                                <li key = { index }>
                                    <span>{ element.name }</span>
                                    <span>{ element.age }</span>
                                    <span>{ element.sex }</span>
                                    <div>
                                        { 
                                            element.jobs.map((job,jobindex) => {
                                                return(
                                                    <li key = { jobindex }> { job } </li>
                                                )
                                            })
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}