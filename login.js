var users = [
    {
        username: 'Robyn',
        password: 'password1',
        schedule: 'TBD'
    },
    {
        username: 'Hashim',
        password: 'password2',
        schedule: 'TBD'
    },
    {
        username: 'Laith',
        password: 'password3',
        schedule: 'TBD'
    }
]


function initialize() {
    document.getElementById('submit')
        .addEventListener('click', function () {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            var user = tryLogin(username, password);

            var alertBox = document.getElementById('invalid-credentials')

            if (user === null) {
                alertBox.style.display = 'block';
            } else {
                alertBox.style.display = 'none';
                console.log(user);
            }
        })
}

function tryLogin(username, password) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i];

        if (user.username === username &&
            user.password === password) {

            return user;
        }
    }

    return null;
}

document.addEventListener('DOMContentLoaded', function () {
    initialize();
})