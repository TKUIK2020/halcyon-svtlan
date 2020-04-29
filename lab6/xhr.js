
	const requestURL = "https://jsonplaceholder.typicode.com/posts"
	const xhr = new XMLHttpRequest()
	xhr.open("GET", requestURL)
	xhr.onload = () =>{
		
		console.log(xhr.response)
	}
	xhr.send()









  