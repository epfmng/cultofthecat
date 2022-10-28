# Welcome
Welcome to the cultofthecat
This website was created for users to give their opinion on a list of cats  
There you can review a cat based on his image and give him a rate between 1 and 5  
Enjoy !  

# 1. Project setup

Use of Git, IntelliJ IDEA, Docker, Angular, Java, mariadb

## 1.1 Git repository
Write the following command in a repository
```
git clone https://github.com/epfmng/cultofthecat
```

## 1.2 Open the project
Open the api directory in IntelliJ  
Open the front directory in another window of IntelliJ  

## 1.3 Docker

If you are using Linux, install Docker (https://docs.docker.com/engine/install/)  
If you are using Microsoft or MacOS, install Docker Destop (https://docs.docker.com/desktop/)  

Then launch docker Desktop if you are using MacOS or Microsoft  

## 1.4 Run the database docker image
On the api directory, in the Intellij IDEA terminal write the following command  
```
docker run --name mariadb --rm -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=defaultdb -p 3306:3306 mariadb
```

## 1.5 Mariadb database

Open the database tab in IntelliJ IDEA  
Then add a Mariadb database with user = root ; password = toor and database = defaultdb

## 1.6 Angular
On the front directory, in the Intellij IDEA terminal write the following commands  
```
npm i
```


# 2. Launch project
## 2.1 Run the database
Run the .sql files in `/initdb` in IntelliJ

## 2.2 Run the API
Run the Application in IntelliJ

## 2.3 Run the front-end
Run the Angular CLI in IntelliJ

## 2.4 Access the app
Go to http://localhost:4200 to get access to the app

# 3. Features
## 3.1 Home
On the http://localhost:4200 page, the user can judge the kittens registered in the database

## 3.2 User
Click on the user panel to access the user functionalities

### 3.2.1 Login
The user need to log in to see his reviews on the page My Reviews  
He logs in with his email, so the user have to be registered to log in  
A pop-up tells the user if he successfully logs in  

### 3.2.2 Reviews
The user can see his reviews on the page My reviews  
The user can add a review on the page Add Review, on the Home page or after a click on User Panel  

To add a review the user needs to specify his :  
- Rating  
- Review  

## 3.3 Admin
Click on the admin panel to access the user functionalities

### 3.3.1 Login
The admin need to log in on the page Login  
He logs in with his email, so the admin have to be registered to log in  
A pop-up tells the admin if he successfully logs in  

### 3.3.2 Users
The administrator can add, delete users on Add User and User List  

To add a user the admin needs to specify the users's :  
- First name  
- Last name  
- Age  
- Email  

He can also view the list of users on User List. 

### 3.3.3 Kittens
The administrator can add, delete kittens on Add Kitten and Kitten List. 

To add a kitten the admin needs to specify the kitten's :  
- First name  
- Fur  
- Race  
- Age  
- Image. 
- Sex  

The image needs to be one of the images registered in List File and only the name of the image is needed.  
For example : Kitten_1.jpg  

He can also view the list of kittens on Kitten List  
He can see the images available to add new kittens in List File

### 3.3.4 Reviews

The administrator can delete reviews on Review List  
He can also view the list of reviews on Review List

