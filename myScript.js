fetch('https://9sezj1jxll.execute-api.us-east-1.amazonaws.com/Prod/Counter')
	.then(res => {
		if  (res.ok) {
			console.log('SUCCESS')
		} else {
			console.log('NOT SUCCESSFUL')
		}
	return res.json()
	})
	
    .then(data => {
	console.log(data)
	const ShowCounter = `
			<p> You are visitor number: ${data} </p>
			`
		const CounterDiv = document.querySelector('.Counter')
		CounterDiv.innerHTML = ShowCounter
	})
	.catch(error => console.log('ERROR'))
	
	