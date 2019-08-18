
import axios from 'axios';

export default (dispatch) => ({query, mutationName, variables}) => {
    return axios('/graphql', {
        method: 'post',
        data: {
            query,
            variables
        },
        withCredentials: true
    });
}