import React, {Component} from 'react';
class AddJobForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            Name: "",
            Status: false
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            Name: "",
            Status: false
        })
    }
    render(){
        return(
            <div>
                <div className="container">
                    <div className="col-xs-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Add new job
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.onSubmit} >
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            name="Name"
                                            value={this.state.Name}
                                            onChange ={this.onChange}
                                         />
                                    </div>
                                    <div className="form-group">
                                        <label>Status</label>
                                        <select 
                                            className="form-control" 
                                            name="Status"
                                            value={this.state.Status}
                                            onChange ={this.onChange}
                                        >
                                            <option value={true}>Active</option>
                                            <option value={false}>None</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-success">SAVE</button>
                                    <button type="submit" className="btn btn-default">CANCLE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
export default AddJobForm;