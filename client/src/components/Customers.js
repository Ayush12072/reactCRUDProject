import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class Customers extends React.Component {

    constructor(props) {
        super(props);
    }

  render() {
    const {customers, handleDelete, handleEdit} = this.props;
    return (
      <table className="table">
          <thead>
              <th>Id</th>
              <th>Name</th>
              <th>City</th>
              <th>DOB</th>
              <th>Phone No.</th>
              <th>Actions</th>
            </thead>
            <tbody>
                {customers && customers.map((item)=>{
                    return(<tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.city}</td>
                        <td>{item.dob.substring(0, 10)}</td>
                        <td>+91-{item.mobile}</td>
                        <td>
                            <button type="button" onClick={e => handleEdit(item)}><span className="fa fa-pencil"></span></button>
                            <button type="button" data-id={item.id} onClick={e => handleDelete(item.id)}><span className="fa fa-trash"></span></button>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}
}

export default Customers;