import axios from "axios";

// const endPoint = `https://radiant-tor-11139.herokuapp.com/api/posts`;
const endPoint = `http://localhost:3005/student`;

class StudentModel {
    static all() {
        let request = axios.get(endPoint);
        console.log('student model axios request',request)
        return request;
    }
    static oneStudent(student) {
        let request = axios.get(`${endPoint}/${student._id}`);
        console.log('get one student model axios request',request)
        return request;
    }
    static create(student) {
        let request = axios.post(`${endPoint}/${student._id}`,student);
        console.log('create student model axios request',request)
        return request;
    }
    static update(student, updateInfo) {
        let request = axios.put(`${endPoint}/${student._id}`, updateInfo);
        console.log('update student model axios request',request)
        return request;
    }
    static delete(student) {
        let request = axios.delete(`${endPoint}/${student._id}`);
        console.log('delete student model axios request',request)
        return request;
    }
}
export default StudentModel;