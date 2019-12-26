import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const AddCustomer = (props) => {

    // const [show, setShow] = useState(false);
    // const [formData, setFormData] = useState({
    //     name: '',
    //     city: '',
    //     dob: '',
    //     mobile: '',
    // });

    const {
        id,
        name,
        city,
        dob,
        mobile,
        onChange,
        showPopup,
        handleClose,
        handleShow
    } = props;


    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSave = (e) => {
        console.log('id', id);
        console.log('city', city);
        console.log('dob', dob);
        console.log('mobile', mobile);
        if (id) {
            axios.post(`http://localhost:5000/update`, {
                id,
                name,
                city,
                dob,
                mobile
            })
                .then(function (response) {
                    console.log(response);
                    handleClose();
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });

        } else {
            axios.post(`http://localhost:5000/add`, {
                name,
                city,
                dob,
                mobile
            })
                .then(function (response) {
                    console.log(response);
                    handleClose();
                    window.location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });

        }

    }
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            <div className="home">
                <Button variant="primary" onClick={handleShow}>
                    <span><i class="fa fa-plus" aria-hidden="true"></i></span>Add User
                </Button>

                <Modal show={showPopup} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Customer Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="data-input-field">
                        <label>Name <span>*</span></label>
                        <input className="form-control" type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} />
                        </div>
                        <div className="data-input-field">
                            <label>City<span>*</span> </label>
                            <input className="form-control" type="text" placeholder="City" name="city" value={city} onChange={e => onChange(e)} />
                        </div>
                        <div className="data-input-field">
                            <label>DOB <span>*</span></label>
                            <input className="form-control" type="text" placeholder="DOB (YYYY-MM-DD)" name="dob" value={dob} onChange={e => onChange(e)} />
                        </div>
                        <div className="data-input-field">
                            <label>Phone<span>*</span> </label>
                            <input className="form-control" type="text" placeholder="Mobile" name="mobile" value={mobile} onChange={e => onChange(e)} />
                        </div>
                       
                    </Modal.Body>
                    <Modal.Footer className="text-center">
                        
                        <Button variant="primary" className="submit" onClick={handleSave}>
                            Submit
                        </Button>
                        <Button variant="secondary" className="cancel" onClick={handleClose}>
                                Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>


        </>
    );
}

export default AddCustomer;