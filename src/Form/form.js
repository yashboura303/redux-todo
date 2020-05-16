import React from 'react';

class Form extends React.Component{
    state={
        content:""
    }
    handleChange = (e) =>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.content);
    }
    render(){
    return(
        <div>
        <form  className = "container" onSubmit={this.handleSubmit}>
  <div className ="form-group"> 
    <label >Content</label>
    <input type="text" className="form-control" id="inputContent" onChange={this.handleChange} value={this.state.content} placeholder="todo task"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    )
}
}

export default Form;