# Employee Management App (Backend)

## Instructions

-> create a new ".env" file to keep secerts (DB_USERNAME,DB_PASSWORD,JWT_SECRET_MESSAGE)

-> "npm run backend" to start backend.

## API calls

### Auth (SignIn)

-> "POST" method on "localhost:5000/api/auth/signin"

-> "Body"

{
"email":"test@gmail.com",
"password": "12345678"
}

-> "Headers"

"Content-Type": "application/json"

-> "Response"

{
"success": true,
"role": "admin",
"authToken": "eyGDINbGcasfvaDcsIsInR5cCI6IkpXVCJ9.eySFc2VAGDIsvcsadfknSDjkxODAxZDkwNTcxNGQ3ADasfknaskfnaslfdma0SDnasjdCI6MTY2NTM0MDc5MX0.RsafaUgG6qOGSfs1kD8_9SdfabsjfbSc8safaghfjD"
}

### Auth (SignUp)

-> "POST" method on "localhost:5000/api/auth/signup"

-> "Body"

{
"email": "test@gmail.com",
"name": "test",
"password": "12345678",
"role": "admin",
"deactivated":false,
"contactNumber":9876543210
}

-> "Headers"

"Content-Type": "application/json"

-> "Response"

{
"success": true,
"role": "admin",
"authToken": "eyGDINbGcasfvaDcsIsInR5cCI6IkpXVCJ9.eySFc2VAGDIsvcsadfknSDjkxODAxZDkwNTcxNGQ3ADasfknaskfnaslfdma0SDnasjdCI6MTY2NTM0MDc5MX0.RsafaUgG6qOGSfs1kD8_9SdfabsjfbSc8safaghfjD"
}

### Add Task

-> "POST" method on "localhost:5000/api/task/addtask"

-> "Body"

{
"taskType":"Meeting",
"startTime":"22:24",
"timeTaken":160,
"description":"Test"
}

-> "Headers"

"Content-Type": "application/json"
"auth-token": "token of employee received when employee account was created be admin"

-> "Response"

{
"success": true,
"message": "Task Added Successfully"
}

### Fetch All Tasks for SignedIn Employee

-> "GET" method on "localhost:5000/api/task/fetchtask"

-> "Headers"

"Content-Type": "application/json"
"auth-token": "token of employee received when employee account was created be admin"

-> "Response"

{
"success": true,
"data": [
{
"_id": "1234567fg83a2h981ee323",
"taskType": "Break",
"startTime": "18:24",
"timeTaken": 20,
"description": "Tea Break",
"__v": 0
},
{
"_id": "4342b342423e324234e32423433f5",
"taskType": "Work",
"startTime": "18:24",
"timeTaken": 160,
"description": "Bug Fix",
"__v": 0
}
]
}

### Add Employees

-> "POST" method on "localhost:5000/api/auth/signupemp"

-> "Body"

{
"email": "test@gmail.com",
"name": "test",
"password": "12345678",
"contactNumber": 1234567890,
"joiningDate":"2022-10-08",
"department":"IT"
}

-> "Headers"

"Content-Type": "application/json"
"auth-token": "token of admin received when admin account was created/loggedIn"

-> "Response"

{
"success": true,
"message": "Employee added"
}

### Fetch All Employee for SignedIn Admin

-> "GET" method on "localhost:5000/api/employee/fetchall"

-> "Headers"

"Content-Type": "application/json"
"auth-token": "token of admin received when admin account was created/loggedIn"

-> "Response"

{
"success": true,
"data": [
{
"_id": "1234567fg83a2h981ee323",
"email": "employee1@gmail.com",
"name": "Employee1",
"role": "employee",
"deactivated": false,
"contactNumber": 1234567890,
"joiningDate": "2022-10-08T00:00:00.000Z",
"department": "IT",
"__v": 0
},
{
"_id": "4342b342423e324234e32423433f5",
"email": "employee2@gmail.com",
"name": "Employee2",
"role": "employee",
"deactivated": true,
"contactNumber": 1234567890,
"joiningDate": "2022-10-08T00:00:00.000Z",
"department": "IT",
"__v": 0
}
]
}

### Activate/Deactivate Employees

-> "PUT" method on "localhost:5000/api/employee/deactivate"

-> "Body"

{
"email":"test@gmail.com"
}

-> "Headers"

"Content-Type": "application/json"
"auth-token": "token of admin received when admin account was created/loggedIn"

-> "Response"

{
"success": true,
"message": "Account deactivated"
}
