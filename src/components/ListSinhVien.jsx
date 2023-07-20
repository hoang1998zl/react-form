import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, updateStudent } from '../actions';

const ListSinhVien = () => {

    const students = useSelector(state => state.students);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedStudents = localStorage.getItem('students');
        if (storedStudents) {
            const parsedStudents = JSON.parse(storedStudents);
            dispatch(updateStudent(parsedStudents));
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('students', JSON.stringify(students));
    }, [students]);

    const handleDelete = (studentId) => {
        dispatch(deleteStudent(studentId));
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Mã Sinh viên</th>
                    <th>Họ tên</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.maSV}>
                        <td>{student.maSV}</td>
                        <td>{student.hoTen}</td>
                        <td>{student.soDienThoai}</td>
                        <td>{student.email}</td>
                        <td>
                            <button onClick={() => handleDelete(student.maSV)}>Xóa</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListSinhVien;