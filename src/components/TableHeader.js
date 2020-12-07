import React, { Component } from 'react';

class TableHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <thead>
          <tr>
            {
              this.props.dataColumns.map(function(column, index) {
                if(column.header === "")
                  return;
                if(column.header === "ESTIMATED DIAMETER (KM)")
                  return <th colSpan="2" key={index}>{column.header}</th>; 
                return <th key={index}>{column.header}</th>;
              })
            }
          </tr>
        </thead>
      );
    }
}

export default TableHeader;