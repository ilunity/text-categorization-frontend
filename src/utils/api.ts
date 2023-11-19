import {RcFile} from "antd/es/upload";
import axios from "axios";

const SERVER_URL = 'http://localhost:3000';

class Api {
    analyseText = async (file: RcFile) => {
        try {
            const bodyFormData = new FormData();
            bodyFormData.append('file', file);

            const response = await axios.post(`${SERVER_URL}/upload`, bodyFormData, {
                headers: {"Content-Type": "multipart/form-data"}
            });

            return response;
        } catch (e) {
            console.log(e)
        }
    }
}

export const api = new Api();
