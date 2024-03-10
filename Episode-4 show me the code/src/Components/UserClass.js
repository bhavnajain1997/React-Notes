import React from "react";
import User from "./User";

class UserClass extends React.Component {
    constructor (props){
        super(props);
       // console.log(props);
    //    console.log(this.props.name + "Children Constructor");
        this.state = {
            userInfo : {
                name : "Dummy",
                location : "Default",
            },
        } ;
    }
    async componentDidMount (){
        //console.log(this.props.name + "Child Component Did Mount")
        //API Calls Here
        const data = await fetch("https://api.github.com/users/bhavnajain1997");
        const json = await data.json(" ");
        this.setState({
            userInfo : json
        }    
        )
        console.log(json);
        
    }
    render(){
        // console.log("Children Render");
        const {avatar_url,name, location,company} = this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h3>Name: {name}</h3>
                <h4>Location: {location}</h4>
                <h4>Contact: {company}</h4>
            </div>
        )
    }
};

export default UserClass;