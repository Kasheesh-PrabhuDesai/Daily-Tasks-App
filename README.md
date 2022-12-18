# Daily-Tasks-App

A To do app built using SocketIO for real time updates. The idea behind this app is to replicate a Kanban style of working i.e for example how JIRA works while creating tasks. The twist added here is that the tasks can be dragged and dropped to the respective task container.

# Client Side
React.js (Typescript) is used to code the frontend of this app. React beautiful dnd package is used to add drag and drop feature to the tasks. The user has the possibility to add a new task or add comments on existing tasks or view the comments. 

# Server Side
Node.js (Javascript) is used for coding the backend server. SocketIO has been used to add the possibility of updating the tasks real time. Nodemon is used for hot reloading the server side.

# How to test the app. Follow the steps given below
1) git clone git@github.com:Kasheesh-PrabhuDesai/Daily-Tasks-App.git
2) cd client -> yarn install
3) cd ../server -> npm install 
4) open two terminals 
5) In one terminal cd client -> yarn start
6) In the second terminal cd server -> nodemon

# Further improvement ideas 
1) Add more CRUD operations
2) Add a reminder for pending tasks
3) Completed tasks should be deleted
4) Tasks should have option to assign to other team members
5) Real time push notifications to other team members on certain events

