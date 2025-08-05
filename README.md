In this project let's build a Insta Share App by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a class component, displaying that data, using component lifecycle methods, routing concepts, authentication, and authorization, and adding responsiveness to the website.

This is an individual assessment. All work must be your own.

Prerequisites
UI Prerequisites
Click to view
What is Figma?

Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the Website
Create a Free account in Figma

Kindly follow the instructions as shown in this video to create a Free Figma account. Watch the video upto 00:55
How to Check CSS in Figma?

Kindly follow the instructions as shown in this video to check CSS in the Figma screen. Watch the video upto 02:45
Export Images in Figma screen

Kindly follow the instructions as shown in this video to export images from the Figma screen
Click on the Export button to get Export options as shown in the below image

Upload your exported images from Figma to Cloudinary and get image URLs from Cloudinary. Refer this session for better understanding

Design Files
Click to view
You can check the Design Files for different devices here
Set Up Instructions
Click to view
Download dependencies by running npm install

Start up the app using npm start

Completion Instructions
Functionality to be added

The app must have the following functionalities
Login Route

When an invalid username and password are provided and the Login button is clicked, then the respective error message received from the response should be displayed
When a valid username and password are provided and the Login button is clicked, then the page should be navigated to the Home Route
When an unauthenticated user tries to access the Home Route, Profile Route, and User Profile Route, then the page should be navigated to the Login Route
When an authenticated user tries to access the Home Route, Profile Route, and User Profile Route, then the page should be navigated to the respective route
When an authenticated user tries to access the Login Route, then the page should be navigated to the Home Route
Home Route

When an authenticated user opens the Home Route

An HTTP GET request should be made to User Stories API URL with jwt_token in the Cookies

Loader should be displayed while fetching the data
After the data is fetched successfully, the response received should be displayed
If the HTTP GET request made is unsuccessful, then the failure view given in the Figma screens should be displayed
When the Retry button is clicked, an HTTP GET request should be made to the User Stories API URL
An HTTP GET request should be made to the Posts API URL with jwt_token in the Cookies

Loader should be displayed while fetching the data
After the data is fetched successfully, the response received should be displayed
If the HTTP GET request made is unsuccessful, then the failure view given in the Figma screens should be displayed
When the Retry button is clicked, an HTTP GET request should be made to the Posts API URL
Initially for every Post BsHeart, FaRegComment, BiShareAlt from react-icons should be displayed

When the username in the particular post is clicked, then the page should be navigated to the User Details Route

When the Like icon (FcLike) is clicked,

An HTTP POST request should be made to the Post Like API URL with like_status as true
It should change to Unlike icon (BsHeart)
Likes count of that particular post should be incremented by one
When the Unlike icon is clicked,

An HTTP POST request should be made to the Post Like API URL with like_status as false
It should change to Like icon
Likes count of that particular post should be decremented by one
Header

When the Website logo is clicked, then the page should be navigated to the Home Route
When the Home link in the Header is clicked, then the page should be navigated to the Home Route
When the Profile link in the Header is clicked, then the page should be navigated to the My Profile Route
When the Logout button is clicked, then the page should be navigated to the Login Route
User Profile Route

When an authenticated user opens the User Profile Route

An HTTP GET request should be made to the User Profile API URL with jwt_token in the Cookies and user_id as a path parameter

Loader should be displayed while fetching the data
After the data is fetched successfully, the response received should be displayed
If the HTTP GET request made is unsuccessful, then the failure view given in the Figma screens should be displayed
When the Retry button is clicked, an HTTP GET request should be made to the User Profile API URL
The list of posts section should contain the BsGrid3X3 from react-icons

If the list of posts are empty, then the No Posts View in the Figma screens should be displayed

If the list of posts are empty, then the BiCamera from react-icons should be displayed

All the header functionalities mentioned in the Home Route should work in this route accordingly

My Profile Route

When an authenticated user opens the My Profile Route

An HTTP GET request should be made to the My Profile API URL with jwt_token in the Cookies

Loader should be displayed while fetching the data
After the data is fetched successfully, the response received should be displayed
If the HTTP GET request made is unsuccessful, then the failure view given in the Figma screens should be displayed
When the Retry button is clicked, an HTTP GET request should be made to the My Profile API URL
The list of posts section should contain the BsGrid3X3 from react-icons

Search Functionality

When an authenticated user search posts using post caption by clicking on the Search icon (FaSearch from react-icons)

An HTTP GET request should be made to the Search Posts API URL with jwt_token in the Cookies and search post as a query parameter

Loader should be displayed while fetching the data
After the data is fetched successfully, the response received should be displayed
If the HTTP GET request made is unsuccessful, then the failure view given in the Figma screens should be displayed
When the Retry button is clicked, an HTTP GET request should be made to the Search Posts API URL
If the search posts are empty, then the Search Not Found View in the Figma screens should be displayed

Initially for every Post BsHeart, FaRegComment, BiShareAlt from react-icons should be displayed

When the username in the particular post is clicked, then the page should be navigated to the User Details Route

When the Like icon is clicked,

An HTTP POST request should be made to the Post Like API URL with like_status as true
It should change to Unlike icon
Likes count of that particular post should be incremented by one
When the Unlike icon is clicked,

An HTTP POST request should be made to the Post Like API URL with like_status as false
It should change to Like icon
Likes count of that particular post should be decremented by one
Not Found Route

When a random path is provided in the URL, then the page should be navigated to the Not Found Route
Users should be able to view the website responsively in mobile view, tablet view as well

Quick Tips
Click to view
Important Note
In this project, the data you have sent through POST-APIs are not saved in the Database. If you refresh the page, the changes will not be persisted
Whenever you do a POST-API call, we are sending a mock object as a response
Click to view
Resources
Data fetch URLs
User Credentials
Click to view user credentials
Project Submission Instructions
For Mini Projects, you can submit the test cases at your own pace. But we suggest you to submit the code to know the percentage of completion through test cases and that score will be considered for your interviews

Also it's important to publish your code frequently using Step - 4 in the Instructions tab

Things to Keep in Mind
All components you implement should go in the src/components directory.
Do not remove the pre-filled code
Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
