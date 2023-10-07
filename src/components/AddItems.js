import React, { Component } from "react";

class Additems extends Component {
    state = {
        name: '',
        age: ''
    }

    handelChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })        
    }

    handelsubmit=(e)=>{
        e.preventDefault();
        if(e.target.name.value ===''){
            return false
        }else{
            this.props.additem(this.state)
        this.setState({
            name:'',
            age:''
        })
        }
    }

    render() {
        return (
            <div >
                <form onSubmit={this.handelsubmit}>
                    <input type="text" placeholder="Enter your Name..." id="name" onChange={this.handelChange} value={this.state.name}/>
                    <input type="number" placeholder="Enter your Age..." id="age" onChange={this.handelChange} value={this.state.age}/>
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default Additems