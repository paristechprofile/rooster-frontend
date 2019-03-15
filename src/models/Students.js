import axios from "axios";

// const endPoint = `https://radiant-tor-11139.herokuapp.com/api/posts`;
const endPoint = `http://localhost:3005/student`;

class StudentModel {
    static all() {
        let request = axios.get(endPoint);
        console.log('student model axios request',request)
        return request;
    }
    static oneStudent(studentId) {
        let request = axios.get(`${endPoint}/${studentId}`);
        console.log('get one student model axios request',request)
        return request;
    }
    static create(studentId) {
        let request = axios.post(`${endPoint}/${studentId}`,studentId);
        console.log('create student model axios request',request)
        return request;
    }
    static update(studentId, updateInfo) {
        let request = axios.put(`${endPoint}/${studentId}`, updateInfo);
        console.log('update student model axios request',request)
        return request;
    }
    static delete(studentId) {
        let request = axios.delete(`${endPoint}/${studentId}`);
        console.log('delete student model axios request',request)
        return request;
    }
}
export default StudentModel;