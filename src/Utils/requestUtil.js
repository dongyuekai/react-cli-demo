import fetch from 'dva/fetch';
import { message } from 'antd';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
// export default function request(url, options) {
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => ({ data }))
//     .catch(err => ({ err }));
// }

export default async function request(url, bodyData) {
  var options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include', //带cookie
  };
  if (bodyData) {
    options = {
      ...options,
      method: 'POST',
      body: JSON.stringify(bodyData),
    };
  }
  try {
    const response = await fetch(url, options);
    console.log('response.status', response.status);
    const data = await response.json();
    console.log(data);
    if (
      data.code == 302 &&
      typeof data.returnObject == 'string' &&
      data.returnObject.indexOf('?service=') > 0
    ) {
      window.location.href = data.returnObject;
      return null;
    } else if (data.code == 400) {
      message.warning(data.info);
      return null;
    }
    // if(data.code == 403
    //   && typeof data.info == 'string'
    //   && data.info.indexOf('?service=') > 0){
    //     window.location.href = data.info + window.location.href;
    //     return null;
    // }else if(data.code == 400){
    //   message.warning(data.info);
    //   return null;
    // }

    return data.returnObject;
  } catch (e) {
    //console.log(e)
    message.error('啊哦~服务器好像开了个小差');
    //console.log('调用接口出错：' + e.message)
    return null;
  }
}
