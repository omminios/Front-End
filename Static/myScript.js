fetch('https://9sezj1jxll.execute-api.us-east-1.amazonaws.com/Prod/Counter')
  .then(res => {
    console.log('API call successful:', res.ok); // Log the response status
    return res.json();
  })
  .then(data => {
    console.log('API data received:', data); // Log the received data
    const ShowCounter = `
      <p> You are visitor number: ${data} </p>
    `;
    const CounterDiv = document.querySelector('.Counter');
    CounterDiv.innerHTML = ShowCounter;
  })
  .catch(error => {
    console.error('API call error:', error); // Log the error if any
  });