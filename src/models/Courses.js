import axios from "axios";
// const endPoint = `https://radiant-tor-11139.herokuapp.com/api/city`;
const endPoint = `http://localhost:3005/course`;

class CourseModel {
    static all() {
        let request = axios.get(endPoint);
        return request;
    }

    static oneCourse(courseId) {
        let request = axios.get(`${endPoint}/${courseId}`);
        return request;
    }
}
export default CourseModel;