import React, { Component } from 'react';

class TableRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return this.props.dataRows.map(function(row, outerIndex) {
            return (
                <tr key={outerIndex}>
                    {
                        this.props.dataColumns.map(function(column, innerIndex) {
                            if(column.name === "nasa_jpl_url")
                                return <td key={innerIndex}><a href={row[column.name]} target="_blank">{row[column.name]}</a></td>; 
                            return <td key={innerIndex}>{row[column.name]}</td>; 
                        })
                    }
                </tr>
              ); 
            }, this);
    }
}

export default TableRow;