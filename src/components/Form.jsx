import React, { useEffect, useState } from 'react'

const Form = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        maSV: '',
        hoTen: '',
        sdt: '',
        email: '',
    });

    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = { ...user };
        setUsers([...users, newUser]);
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        event.target.value = '';
    };

    return (
        <form className="row" onSubmit={handleSubmit}>
            <div className="col-12 col-lg-6 mb-3">
                <label className="form-label">Mã SV</label>
                <input
                    name='maSV'
                    type="text"
                    className="form-control"
                    onChange={handleChange} />
            </div>
            <div className="col-12 col-lg-6 mb-3">
                <label className="form-label">Họ tên</label>
                <input
                    name='hoTen'
                    type="text"
                    className="form-control"
                    onChange={handleChange} />
            </div>
            <div className="col-12 col-lg-6 mb-3">
                <label className="form-label">Số điện thoại</label>
                <input
                    name='sdt'
                    type="text"
                    className="form-control"
                    onChange={handleChange} />
            </div>
            <div className="col-12 col-lg-6 mb-3">
                <label className="form-label">Email</label>
                <input
                    name='email'
                    type="text"
                    className="form-control"
                    onChange={handleChange} />
            </div>
            <div className="col-12 col-lg-6 mb-3">
                <button
                    type="submit"
                    className='btn btn-success'>
                    Thêm sinh viên
                </button>
            </div>
        </form>
    )
}

export default Form