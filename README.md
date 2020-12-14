# Sezzle Calculator - Backend

An application that provides multi-user chat with calculator functions in real-time. This [link](https://github.com/matthewsedlacek/sezzle-calculator-socketio) will direct you to the frontend repository.

## Prompt

- Create a web app using any language which logs calculations as they happen and shares those calculations with everyone connected to the app.

- For example, user A and user B go to your app at the same time. User A calculates “5 + 5”, which equals “10". This is logged below the calculator as “5 + 5 = 10”. User B is updated about this calculation right after user A posts it. Now, user B calculates “3 x 4".This calculates to “12” and displays “3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it.

- Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest. The calculator only needs to implement basic arithmetic operations, although you can add other math functions if you would like to impress. But don't forget to meet the basic requirements of the exercise first!

## Hosted

Backend is hosted on [Heroku](https://serene-crag-73795.herokuapp.com/messages)

## Local Installation

**Database Creation**

Instructions require that Homebrew is installed on your local machine. For setup instructions see [link](https://brew.sh/)

1. If you have not done so already, install PostgreSQL. For Mac users type `brew install postgresql` in the terminal.
2. Connect to the default postgres database by typing in your terminal `psql postgres`
3. Create a user with name me and password of password `postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';`
4. Give me the ability to create a database `ALTER ROLE me CREATEDB;`
5. Exit default postgres using `\q`
6. Connect postgres with me `psql -d postgres -U me`
7. Create a database `CREATE DATABASE api;`
8. Connect to new api database `\c api`
9. Create Table in the api database

```sql
api=>
CREATE TABLE messages (
  ID SERIAL PRIMARY KEY,
  text varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  created_at SET DEFAULT NOW();
);
```

10. Set the Time Zone to UTC. Methods in frontend convert times to local of any time zone. `SET TIMEZONE='UTC';`
11. Insert data into messages table

```sql
INSERT INTO messages (text, username)
  VALUES ('1+1=2', 'matthew'), ('2+2=4', 'blake'), ('3+3=6', 'julie'), ('4+4=8', 'courtney'), ('5+5=10', 'brian'), ('6+6=12', 'michael'), ('7+7=14', 'edward'), ('1+1=2', 'matthew'), ('2+2=4', 'blake'), ('3+3=6', 'julie');
```

12. Database is now setup. Continue on to the GitHub section to get the Node/Express server running

**GitHub Repository**

1. Open terminal and navigate to folder of your choice
2. In the terminal type `git clone --single-branch --branch local https://github.com/matthewsedlacek/sezzle-node-express-api`. This will clone down the local branch.
3. `cd sezzle-node-express-api`
4. Open your code editor and run `npm install` to install dependencies
5. Type `node app.js` to get the backend running
6. Run the frontend server - refer to [frontend](https://github.com/matthewsedlacek/sezzle-calculator-socketio/tree/local) repository

## Backend Technology Used

- Node.js/Express.js as API
- PostgreSQL
- Websockets
- Socket.io

## Author

- Matthew Sedlacek - [Github](https://github.com/matthewsedlacek) [LinkedIn](https://www.linkedin.com/in/matthew-sedlacek/)

## Licensing

This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
For a copy of the GNU General Public License along write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
