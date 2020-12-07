import React, { Component } from 'react';
import TableHeader from './TableHeader'; //TableHeader Component create Table Headers
import TableRow from './TableRow'; //TableRow Component create Table rows

class Table extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tableData: [] //initially Table data will be an empty array;
      }
    }

    componentDidMount() {
        const apiUrl = this.props.data.api_uri;
        fetch(apiUrl) //fetch data using fetch method and pass URL as an argument which is getting as props;
          .then((response) => response.json())
          .then((data) => {
          if(data["near_earth_objects"]) {
            let updatedArray = [];
            for (let key in data["near_earth_objects"]) {
                for(let item of data["near_earth_objects"][key]) {
                    var tableDataObj = {
                      "id": item["id"],
                      "neo_reference_id": item["neo_reference_id"],
                      "name": item["name"],
                      "nasa_jpl_url": item["nasa_jpl_url"],
                      "absolute_magnitude_h": item["absolute_magnitude_h"],
                      "estimated_diameter_kilometers_estimated_diameter_max": item["estimated_diameter"]["kilometers"]["estimated_diameter_max"],
                      "estimated_diameter_kilometers_estimated_diameter_min": item["estimated_diameter"]["kilometers"]["estimated_diameter_min"]
                    }
                    updatedArray.push(tableDataObj);
                }
            }
            this.setState({tableData: updatedArray});
          } else if(data.hasOwnProperty("error"))
              document.write("There is an Error to get Request data.");        
        });
    }

    render() {
      if(!this.state.tableData.length) 
          return (<div>Loading Data...</div>) //set Loading bar till getting the response from service;
      return (
        <slot>
            <div className="widthClass">
                <h2>NASA - Near Earth Web Object</h2>
                <table>
                    <TableHeader dataColumns={this.props.data.headerList}></TableHeader>
                    <TableRow dataRows={this.state.tableData} dataColumns={this.props.data.headerList}></TableRow>
                </table>
            </div>
        </slot>
      )
    }
}

export default Table;