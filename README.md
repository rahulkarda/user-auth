## Authentication Model
A simple User Authentication Model using JWT. 
User interface that allows users to sign up and login into their accounts with basic role. Accounts with admin access have the power to edit or delete a user. This is done by allowing the admin special page which has list of all the users and options to update or delete. The user data is encrypted through Bcrypt and saved in the database. The passwords are hashed and thus this makes this authentication model safe and secure.

The site is live at : https://user-auth-system-by-rahul.herokuapp.com/

<a target="_blank" href="https://user-auth-system-by-rahul.herokuapp.com/">
          <img src="https://github.com/rahulkarda/user-auth/blob/master/assets/user-auth.jpg?raw=true" width="100%" alt="User Auth"/>
</a>


## Tech Stack
![](https://img.shields.io/badge/Code-HTML5-informational?style=flat&logo=html5&logoColor=white&color=brightgreen)
![](https://img.shields.io/badge/Code-CSS3-informational?style=flat&logo=css3&logoColor=white&color=brightgreen)
![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=brightgreen)
![](https://img.shields.io/badge/Code-NodeJS-informational?style=flat&logo=node&logoColor=white&color=brightgreen)
![](https://img.shields.io/badge/Code-ExpressJS-informational?style=flat&logo=express&logoColor=white&color=brightgreen)
![](https://img.shields.io/badge/Code-MongoDB-informational?style=flat&logo=mongodb&logoColor=white&color=brightgreen)
![](https://img.shields.io/badge/Code-Bcrypt-informational?style=flat&logo=bcrypt&logoColor=white&color=brightgreen)
![](https://img.shields.io/badge/Code-Tailwind-informational?style=flat&logo=tailwindcss&logoColor=white&color=brightgreen)

[Bcrypt](https://www.npmjs.com/package/bcrypt) is a library to help you hash passwords.

[Mongoose](https://mongoosejs.com/) is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Express web application framework.

## Optimizations
While improving this project, I would start by implementing the following features -

   1. Implementing the forgot password feature
   2. Adding support for login with Google, Github accounts
   3. Allowing users to login with email services
              
## Lessons Learned
I learned how to create a user authentication model using JWT.
My learning was focused on creating a user interface that makes allows users to sign up and login to the system using password. This is done by allowing the users to sign up and login into their accounts with basic role. Accounts with admin access have the power to edit or delete a user. I learned how to hash passwords and store them into database securely. I learned about different cryptographic implementation techniques.
