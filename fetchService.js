// fetch请求的简单封装
const CONTENT_TYPE =  'application/json'
class Request {
    get(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err))
      })
    }
   
    // post方式
    post(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-type': CONTENT_TYPE
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err))
      })
    }
   
    //put 修改
    put(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'PUT',
            headers: {
              'Content-type': CONTENT_TYPE
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => resolve(data))
          .catch(err => reject(err))
   
      })
    }
   
    //delete
    delete(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-type': CONTENT_TYPE
            },
            body: JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data => resolve('数据删除成功!'))
          .catch(err => reject(err))
      })
    }
  }
  export default new Request();//ES6导出
