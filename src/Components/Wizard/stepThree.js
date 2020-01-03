import React, {Component} from 'react';
import axios from 'axios'
import store, {HOUSE_RENT, HOUSE_MORTGAGE, ADD_HOUSE}from '../../store.js'
// import {HashRouter as Router, Link} from 'react-router-dom'

export default class Container extends Component {
    constructor() {
      super();
      this.state = {
        mortgage: null,
        rent: null,
      };

    }

    addWholeHouse(){
        store.dispatch({
            type:ADD_HOUSE,
            
        })
    }
    setStateStepThree() {
        // Send data to Redux state
        store.dispatch({
          type: HOUSE_RENT,
          payload: this.state.rent
        });
        store.dispatch({
            type: HOUSE_MORTGAGE,
            payload: this.state.mortgage
          });
      }

      componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState();
            
          })
    }

    render() { 
        return (
               <div> <div>
                <div className="WizardApp">
                    <h2> This step Three!</h2>
                </div>
                
                </div>
          <input
            name="mortgageInput"
            className="form-control"
            id="mortgageInput"
            placeholder="Mortgage"
            onChange={e => this.setState({ mortgage: e.target.value })}
          ></input>
          <input
            name="rentInput"
            className="form-control"
            id= "rentInput"
            placeholder="Rent"
            onChange={e => this.setState({ rent: e.target.value })}
          ></input>

         <button onClick={() => {
            console.log("Pushing house to DB",)
            const reduxState = store.getState();
            axios.post('/api/houses', {
              house_name: reduxState.name,
              house_address: reduxState.address,
              city: reduxState.city,
              house_state: reduxState.house_state,
              zip: reduxState.zipcode,
              img: reduxState.img,
              mortgage: this.state.mortgage,
              rent: this.state.rent
            }
            
            )
            .catch(err => {
              console.log(err);
            });
          
            
          }
          }>Complete and save to DB!</button>
                
            {/* <button onClick={() => {
                console.log("Pushing house to DB",)
                this.setStateStepThree()
                this.addWholeHouse()
                const reduxState = store.getState();
                axios.post('/api/houses', {
                    house_name: reduxState.house.name,
                    house_address: reduxState.house.address,
                    city: reduxState.house.city,
                    house_state: reduxState.house.house_state,
                    zip: reduxState.house.zipcode,
                    img: reduxState.house.img,
                    mortgage: reduxState.house.mortgage,
                    rent: reduxState.house.rent
                }
                
                )
                .catch(err => {
                  console.log(err);
                });
              
                
              }
              }>2Complete and save to DB2!</button>
                 */}
         </div>
                  
    )}}