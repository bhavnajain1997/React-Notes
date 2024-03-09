const User = (props) => {
    return(
        <div className="user-card">
            <h3>Name: {props.name}</h3>
            <h4>Location: Delhi</h4>
            <h4>Contact: bhavnajain1997@gmail.com</h4>
        </div>
    )
}
export default User;