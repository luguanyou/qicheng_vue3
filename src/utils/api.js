import request from './request'
const expressInfo="expressInfo"
const order ='order'
export const GetExpressInfoApi = (params) => request.get(`/${expressInfo}`,{params:params})
export const CreateExpressInfoApi =(data) => request.post(`/${expressInfo}`,{"data":data})
export const CreateOrderApi =(data) => request.post(`/${order}`,{"data":data})