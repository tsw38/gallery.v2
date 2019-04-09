import axios from 'axios';
import chalk from 'chalk';
import cookie from 'js-cookie';
window.tyler = cookie;
export const api = (dispatch) => ({query, mutationName, variables}) => {

    return axios(process.env.API_URL, {
        method: 'post',
        data: {
            query,
            variables
        },
        withCredentials: true
    });
    // }).then(resp => {
        // console.log(chalk.green('this is the options'), resp);
        // console.log(chalk.green('this is the resp'), resp);
        // return resp;
    // }).catch(resp => {
        // console.log(chalk.red('this is an error'), resp);
    // }).finally(resp => {
        // console.log(chalk.blue('this most likely broke'), resp);
    // })
}