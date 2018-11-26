import React, { Component } from 'react';
import './App.css';
import AddJobForm from './AddJobForm';
import TableJob from './TableJob';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        {
          STT: 1,
          Name: "John",
          Status: true,
          Action: ""
        },
        {
          STT: 2,
          Name: "Marry",
          Status: true,
          Action: ""
        },
        {
          STT: 3,
          Name: "Jack",
          Status: false,
          Action: ""
        },
      ],
      filter: [
        {
          name: "",
          status: -1
        }
      ]
    };
  }
  onSubmit = (data) =>{
    let tasks = this.state.tasks;
    let array = [];
    for(let t in tasks){
      array.push(tasks[t].STT);
    }
    array.sort((a, b) =>{return b - a});
    let task = {
      STT: array[0] + 1,
      Name: data.Name,
      Status: data.Status === "true" ? true:false
    }
    tasks.push(task);
    this.setState({
      tasks: tasks
    })
    
  }
  filter = (filterName, filterStatus) => {
    //console.log(filterName, filterStatus);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })

  }
  render() {
    let tasks = this.state.tasks;
    let filter = this.state.filter;
    console.log("filter", filter);
    if(filter){
      if(filter.name){
        tasks = tasks.filter((task) => {
          return task.Name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if(parseInt(filter.status) === -1){
          return task;
        }
        else{
          console.log("aaaaaa")
          return task.status === (filter.status === "true" ? true: false);
        }
      });
    }
    return (
      <div className="App">
      <div className="container">
        <div className="col-xs-4">
          <AddJobForm onSubmit={this.onSubmit}></AddJobForm>
        </div>
        <div className="col-xs-8">
          <TableJob tasks={tasks} filter={this.filter}></TableJob>
        </div>
      </div>
        
      </div>
    );
  }
}

export default App;
