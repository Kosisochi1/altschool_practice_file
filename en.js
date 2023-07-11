const dataBase = {
	John: {
		Name: 'John',
		password: '1234567',
		email: 'john@gmail.com',
		position: 'Intern',
	},
	Abel: {
		Name: 'Abel',
		password: '1234567',
		email: 'abel@gmail.com',
		position: 'Project manager',
	},
	Emma: {
		Name: 'Emma',
		password: '1234567',
		email: 'emma@gmail.com',
		position: 'Software Developer',
	},
}
function showUserDetails() {
	let userName = prompt('please Enter your username')
	while (!validateUserName(userName)) {
		if (userName == null) {
			return
		}
		userName = prompt('Please re-enter your  Username')
	}
	let password = prompt('Enter password')
	while (!validatePassword(password)) {
		if (password == null) {
			return
		}
		password = prompt('Please re-enter your password')
	}
	let confirmPassword = prompt('Please confirm your password !!')
	while (password !== confirmPassword) {
		if (confirmPassword == null) {
			return
		}
		confirmPassword = prompt('Please enter the right password')
	}
	const details = dataBase[userName]
	if (!details) {
		alert(
			`The user ${userName} deos not exist. Check the user details and try again`
		)
		return
	}
	if (details.password !== password) {
		console.log(details.password)
		alert(`Incorrect password, Please try again !!!`)
		return
	}
	alert(`
	The user ${userName} has the following details\n
	Username: ${details.Name}\n
	Email: ${details.email}\n
	Position: ${details.position}\n
	 !!!!!!!

	`)
}

showUserDetails()

function validateUserName(userName) {
	if (!userName) {
		return false
	}
	if (userName.length > 10) {
		return false
	} else {
		return true
	}
}

function validatePassword(password) {
	if (!password) {
		return false
	}
	if (password.length < 6) {
		return false
	} else {
		return true
	}
}
