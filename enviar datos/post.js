const axios = require('axios');

const newPost = {
    title: ' nuevo post',
    body: ' lo acabo de enviar',
    userId: 1
}

axios.post ('http://localhost:8080/api/usuarios', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers:{
        'Content-Type': 'application/json'
    }
})//.then(res=> JSON.parse(res))
  .then(data => console.log(data))