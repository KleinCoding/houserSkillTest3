import React from 'react';

export default function House(props){

    const houseDisplay = props.housesArr.map((element, index) => {
        return (
      
          <div className="product-container" key={index}>
            <h2>{element.house_name}</h2>
            <img src={element.img} alt="" />
            <h2>{element.address}</h2>
            <h3>{"$" + element.rent + ".00"}</h3>
            <h4>{"State:" + element.state}</h4>
            <button onClick={() => props.deleteHouse(element)}>Delete This House!</button>
          </div>
        )
         
      })

    return (
        <div>
        <div className="HouseApp">
            <h2> {houseDisplay}}</h2>
        </div>
        {props.children}
        </div>
    )
}