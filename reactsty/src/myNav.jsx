import React from 'react';

export default class MyNav extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.nav.map((element,index) => {
                            return (
                                <li key = {index}>{ element }</li>
                            )
                        })
                    }
                </ul>
            </div>
    )}
}