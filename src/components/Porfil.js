import React from "react";
class Profil extends React.Component{
    constructor(){
        super()
        this.state={
            Person : {
                fullName : "Leonardo Dicaprio",
                bio : "Actor",
                imgSrc  : "https://th.bing.com/th/id/R.d39f28d45fe35c76d2512bc2541f1195?rik=q6FcP4RhkpLRdQ&pid=ImgRaw&r=0",
                profession : "MOdel"
            },
            count : 0
        }
    }

    componentDidMount(){
        setInterval(()=> this.setState({count : this.state.count + 1}), 1000);
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <h2>Profil</h2>
                <h3>{this.state.Person.fullName}</h3>
                <h4>{this.state.Person.bio}</h4>
                {
                    this.state.count>0 &&  <img className="img" src={this.state.Person.imgSrc} alt='Not Found'/>
                }
                
                <h5>{this.state.Person.profession}</h5>
            </div>
        )
    }
}

export default Profil