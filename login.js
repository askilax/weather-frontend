let url = 'https://weather-backend-zeta.vercel.app/'


document.querySelector('#register').addEventListener('click', () => {
    const name = document.querySelector('#registerName').value;
    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;


    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }


    fetch(`${url}users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.result) {
                window.location.assign('index.html');
            } else {
                alert(data.error || 'Registration failed');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
});


document.querySelector('#connection').addEventListener('click', () => {
    const email = document.querySelector('#connectionEmail').value;
    const password = document.querySelector('#connectionPassword').value;


    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }


    fetch(`${url}users/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.result) {
                window.location.assign('index.html');
            } else {
                alert(data.error || 'Login failed');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
});
