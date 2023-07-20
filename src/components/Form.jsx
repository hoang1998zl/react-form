import React, { useState } from 'react';
import { addStudent } from '../actions';
import { useDispatch } from 'react-redux';

const Form = () => {
    const [newStudent, setNewStudent] = useState({
        maSV: '',
        hoTen: '',
        soDienThoai: '',
        email: '',
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent(newStudent));
        setNewStudent({
            maSV: '',
            hoTen: '',
            soDienThoai: '',
            email: '',
        });
    };

    return (
        <form onsubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 col-lg-6 mb-3">
                    <label className="form-label">
                        Mã Sinh Viên
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="maSV"
                        value={newStudent.maSV}
                        onchange={handleChange} />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                    <label className="form-label">
                        Họ và tên
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="maSV"
                        value={newStudent.hoTen}
                        onchange={handleChange} />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                    <label className="form-label">
                        Số điện thoại
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="sdt"
                        value={newStudent.sdt}
                        onchange={handleChange} />
                </div>
                <div className="col-12 col-lg-6 mb-3">
                    <label className="form-label">
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={newStudent.email}
                        onchange={handleChange} />
                </div>
                <div classname="col-12 col-lg-6 mb-3">
                    <button
                        type="submit"
                        className='btn btn-success'>
                        Thêm sinh viên
                    </button>
                </div>
            </div>
        </form>
    );
};

// const mapDispatchToProps = (dispatch) =>
// bindActionCreators({ addStudent }, dispatch);

export default Form;
