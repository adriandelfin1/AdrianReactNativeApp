# Messaging App

## Key Features: 
**Login and registration authentication:** Users are able to create an account and log in to those accounts.  
**Direct/group Messaging:** Users can send direct, private messages to other users and create group chats to message as a group.    
**Customizable Profiles:** Users can personalize their own accounts by adding profile pictures, create group names and more.  
## Technologies Used:
**Mobile Application Development:** React for building user interface components.  
**Back-end and Database:** Firebase for server-side operations, user authentication, real-time database, and storage.  
## Notes for those that want to run this on their own
You should check out the [`.env`](webapp-source-backend/.env) file in the webapp-backend folder I have provided and make sure you put your own MONGO URI from your mongodb. Here is a helpful source to help you do that: [`Click me`](https://www.youtube.com/watch?v=aygw0wjW5bA). Then, follow the next steps. 
1. Create a folder and give it any name you like, for example you can name it webapp-source, and clone this repository.  
2. Open your command portal and change the directory to your desired folder.
  * **example for cloning:** cd downloads\webapp-source
  * Enter this in the terminal: git clone https://github.com/adriandelfin1/AdrianReactApp  
3. Now, open 2 terminals, one for the backend and one for the frontend
  * **example for backend:** cd downloads\webapp-source\webapp-source-backend
  * **example for frontend:** cd downloads\webapp-source\webapp-source-frontend
4. Then, install the package modules by typing npm install in the terminal for the backend and frontend.    
5. Then just type in npm start on each of the terminals, I suggest you do the backend first and then frontend
   * Your backend terminal should say something like "listening on port 5002", or which ever port number you set on your .env file.
   * Your frontend terminal should automatically open the app for you
