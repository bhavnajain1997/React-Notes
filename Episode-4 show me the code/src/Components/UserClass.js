import React from "react";
import User from "./User";

class UserClass extends React.Component {
    constructor (props){
        super(props);
       // console.log(props);
       console.log(this.props.name + "Children Constructor");
        this.state = {
           count : 0,
           countdecrease : 0,
           reset : 0
        } 
    }
    componentDidMount (){
        console.log(this.props.name + "Child Component Did Mount")
        //API Calls Here
        
    }
    render(){
        console.log("Children Render");
        const {name, location} = this.props;
        const {count} = this.state;
        return(
            <div className="user-card">
                <h1>Count : {count}</h1>
                <button onClick={() => {
                  //NEver update state variable directly to 
                  this.setState({
                    count : this.state.count + 1
                })
                   console.log(this.state.count)
                }}>Count Increase</button>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count - 1
                    })
                }}>Count Decrease</button>
                <button onClick={() => {
                    this.setState({
                        count : 0
                    }

                    )
                }}>Reset</button>
                <h3>Name: {name}</h3>
                <h4>Location: {location}</h4>
                <h4>Contact: bhavnajain1997@gmail.com</h4>
            </div>
        )
    }
};

export default UserClass;