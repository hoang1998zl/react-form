import React from 'react'
import Form from './Form';

const ListUsers = ({users}) => {
    const listSV = JSON.parse(localStorage.getItem('users'))
    console.log(listSV);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Mã SV</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {listSV.map((users, index) => (
                        <tr key={index}>
                            <td>{users.maSV}</td>
                            <td>{users.hoTen}</td>
                            <td>{users.sdt}</td>
                            <td>{users.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ListUsers