# TypeFight

## Overview
A type-racing site built using React, users can test their typing skills using the built-in game where users try their best to complete a random text prompt while under a time limit.
Users can socially interact with each other through profile pages, and for the competitively inclined, compete with one another among the global ranking board.

## Installation and Development Setup
1. Install Node.js 16.14.2 or newer (https://nodejs.org/en/download/)
2. Clone the repository onto your local computer using `git clone`
3. In your terminal, Navigate to /client folder and run `npm install`
4. In your terminal, Navigate to /server folder and run `npm install`
5. Run `npm start` while in the /client folder to run the client.
6. Run `npm start` while in the /server folder to run the server. ***(See Notes)***

<hr>

## Layout

- ### Home
    The landing page of TypeFight. Here, users can access the main game, rankings, or profiles via the Navigation bar and the center buttons. Since the site centers itself around type-racing, the play and rankings buttons are large and placed in the center for extra emphasis. 
    <br>
    If Users are logged in, they can easily access their profiles here. Otherwise, the NavBar allows them to make an account.

    ![Home Page](https://drive.google.com/uc?export=view&id=11j0RlLb19vMZyvfHUkLsaQURnwmQnhJK "Home")

- ### Game
    Users are presented with a prompt randomly selected by the backend server. They are tasked with trying to type out most of the prompt as they can while under a certain time limit. Current implementation has set the time limit to 30s. The game ends if either the prompt is completely typed or if the time reaches 0. Results are then displayed and sent to the server. Players can like or dislike prompts in the results screen and give that prompt a rating.

    ![Game Page](https://drive.google.com/uc?export=view&id=17-Wub5jxF9E9xpDuGa16r8M0tr974cGv "Game")

- ### Profile
    Information about a particular user is presented here. The user's profile picture and username are at the top. Social interaction is done here through posting comments and following users. Game related information is also presented here like recent games and stats. Usres can post comments and upload custom profile pictures for their profile.

    ![Profile Page](https://drive.google.com/uc?export=view&id=1xW8_4HAlKlHoPrZI61j8YCf0tiW4fnux "Profile")

- ### Log-in/Sign-up
    If a user already has an account, they can simply provide their username and password. However, if they do not have one, they can easily sign up for one by again providing a unique username and a password.
    
    ![Login SignUp](https://drive.google.com/uc?export=view&id=1T7IOX4lmY1wAHyb1ipYkxf4qxfDzYu0H "LoginSignup")

- ### Rankings
    A global leaderboard; users are listed based on different sorting criterias. Users are presented with their profile pictures, usernames, and four stats. The sorting criterias sort based on either of these four stats which are:
    - Rank
    - Games Played
    - Words Per Minute (WPM)
    - Accuracy
    
    ![Rankings Page](https://drive.google.com/uc?export=view&id=1J_omI_AbyyoYN9lMV1U3tmwf_ZHnb9Y0 "Rankings")

<hr>

## Note
The backend server makes use of a mongoDB database. To access the particular database requires authentication, but for security concerns, one would need to configure their own database and supply their own access information.
