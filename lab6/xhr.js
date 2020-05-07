
    const requestURL = "https://jsonplaceholder.typicode.com/posts"
    const xhr = new XMLHttpRequest()
    xhr.open("POST", requestURL)
	xhr.onload = () =>{
		
		console.log(xhr.response)
	}
	xhr.send(JSON.stringify({title: 'foo', body: 'bar', userId: 1}))









  