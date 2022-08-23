fetch('http://api.open-notify.org/astros.json')
.then(respone => respone.json())
.then(data => console.log(data))