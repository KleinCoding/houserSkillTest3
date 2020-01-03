import React from 'react';

export default function Header(props){
    return (
        <div>
        <div className="HeaderApp">
            <h2> This is the Header Page</h2>
        </div>
        {props.children}
        </div>
    )
}