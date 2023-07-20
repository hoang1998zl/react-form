export const addStudent = (student) => {
    return {
      type: 'ADD_STUDENT',
      payload: student,
    };
  };
  
  export const deleteStudent = (studentId) => {
    return {
      type: 'DELETE_STUDENT',
      payload: studentId,
    };
  };
  
  export const updateStudents = (students) => {
    return {
      type: 'UPDATE_STUDENTS',
      payload: students,
    };
  };
  