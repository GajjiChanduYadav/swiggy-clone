import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)
        console.log(props)

        this.state={
            count:0,
            
        };
    }

    

    render() {

        const {count} = this.state;
        return(
             
            <div className="user-card">
                <h1>Count={count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>
                    Increase Count
                </button>

                <h2>{this.props.name}</h2>
                <h3>Location: Srikalahasthi</h3>
                <h4>contact: chanduyadav7980@gmail.com</h4>
            </div>
            
        );
    }
}

export default UserClass;

