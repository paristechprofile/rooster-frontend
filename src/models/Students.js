import axios from "axios";

// const endPoint = `https://radiant-tor-11139.herokuapp.com/api/posts`;
const endPoint = `http://localhost:3005/student`;

class StudentModel {
    static all() {
        let request = axios.get(endPoint);
        return request;
    }
    static oneStudent(studentId) {
        let request = axios.get(`${endPoint}/${studentId}`);
        return request;
    }
    static create(student) {
        let request = axios.post(`${endPoint}/${studentId}`,student);
        return request;
    }
    static update(studentId, updateInfo) {
        let request = axios.put(`${endPoint}/${studentId}`, updateInfo);
        return request;
    }
    static delete(studentId) {
        let request = axios.delete(`${endPoint}/${studentId}`);
        return request;
    }
}
export default StudentModel;