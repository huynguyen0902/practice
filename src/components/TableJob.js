import React, {Component} from 'react';
class TableJob extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterName: "",
            filterStatus: -1
        }
    }
    onChange = (event) =>{
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.filter(
            name === "filterName" ? value: this.state.filterName, 
            name === "filterStatus" ? value: this.state.filterStatus
        );
        this.setState({
            [name]: value
        })
        
    }
    render(){
        let tasks = this.props.tasks;
        let element = tasks.map((item, index) =>{
            return <tr key={index}>
                        <td>{item.STT}</td>
                        <td>{item.Name}</td>
                        <td onClick={this.onClick}> 
                            <span className={item.Status === true? "label label-success" : "label label-danger"}>{item.Status === true? "Active" : "None"}</span>
                        </td>
                        <td>
                            
                            <button type="button" className="btn btn-success">Update</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                            
                        </td>
                        
                    </tr>
        })
        return(
            <div>
                <div className="panel panel-default">
                <div className="panel-heading">
                </div>
                    <div className="panel-body">
                       
                       <table className="table table-hover table-bordered">
                           <thead>
                               <tr>
                                   <th>STT</th>
                                   <th>Name</th>
                                   <th>Status</th>
                                   <th>Action</th>
                               </tr>
                           </thead>
                           <tbody>
                               <tr>
                                   <td></td>
                                   <td>
                                       <div className="input-group">
                                           <input 
                                                type="text"
                                                name="filterName" 
                                                className="form-control"
                                                value={this.state.filterName}
                                                onChange={this.onChange}
                                            />
                                       </div>
                                   </td>
                                   <td>
                                    <select 
                                        name="filterStatus"
                                        className="form-control"
                                        value={this.state.filterStatus}
                                        onChange={this.onChange}
                                    >
                                        <option value="">All</option>
                                        <option value={true}>Active</option>
                                        <option value={false}>None</option>
                                    </select>
                                    
                                   </td>
                               </tr>
                               {element}
                           </tbody>
                       </table>
                       
                    </div>
                </div>
                
                
            </div>
        );
    }
}
export default TableJob;