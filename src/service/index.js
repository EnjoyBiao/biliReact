import Axios from  'axios'
import  apis from './api'
 // const ajax=Axios.create[{
 //    baseURL:apis.baseURL
 // }]
export const getTodos= ()=>{
    return  Axios({
        method: 'get',
        url: `${apis.baseURL}+${apis.getToDo}`,
        data: {

        }
    })
}
