# Ahmed Saeed Task

Introduction :
this project display the users from https://jsonplaceholder.typicode.com/ site and posts for each user.

## Illustrations: 
in this application, the home page display the users page, you can find the user and then click 
on posts button to navigate to the posts related to this yser.
when the posts are displayed, it show only the title of the post, to display the post body click on the post, it expand to show all the post details.
it also has navbar for navigation to all users all posts and home page.

## Technologies:
in this application i used the following technologies:
1 - **React Js**: for the whole application.
2 - **React Router** library: for navigation and routing.
3 - **React Query** library: for handling requesting data from backend.
4 - **Axios**:  for requesting data from https://jsonplaceholder.typicode.com/ api
5 - **html amd css**

## Components:
this project is consisting of these main components:
1 - **Pages** : which contain the project pages, such as MainPage, UsersPage and PostsPage.
2 - **Components** : which containt all the components that are used to build any Page, such as Header, UserCard, PostCard and so on.
3 - **Resources** : which contain all the resources being used by the pages, such as images.
4 - **Api** : this is the folder that contain all the application backend files, which is responsible for api calls.  

## Structure
The basic structure of the project is the **App** component that contains :
 1 - the **router** component for routing pages, 
 2 - the **Mainpage** that contain the **UserPage** and the **PostPage**
 3 - the **UserPage** display a grid of users with column template in 3 columns, each user is represented by a card that contain its info from the api.
 4 - in the **UserPage** page users are requested from api using **React Query**, then the posts button navigate to the user posts using its id.
 5 - in the **PostsPage** all the user posts are displayed as cards that hold the post title only and expand to show all the post details with click on it.
 6 - when navigate from the navbar to the posts page, all the availabe posts are displayed.