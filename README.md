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

    ![Home Page](https://drive.google.com/file/d/11j0RlLb19vMZyvfHUkLsaQURnwmQnhJK/view?usp=sharing)

- ### Game
    Users are presented with a prompt randomly selected by the backend server. They are tasked with trying to type out most of the prompt as they can while under a certain time limit. Current implementation has set the time limit to 30s. The game ends if either the prompt is completely typed or if the time reaches 0. Results are then displayed and sent to the server.

    ![Game Page](https://drive.google.com/file/d/17-Wub5jxF9E9xpDuGa16r8M0tr974cGv/view?usp=sharing)

- ### Profile
    Information about a particular user is presented here. The user's profile picture and username are at the top. Social interaction is done here through posting comments and following users. Game related information is also presented here like recent games and stats.
    > \< Profile page image>
- ### Log-in/Sign-up
    If a user already has an account, they can simply provide their username and password. However, if they do not have one, they can easily sign up for one by again providing a unique username and a password.
    
    ![Login SignUp](https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Fmobile%2F000%2F013%2F564%2Fdoge.jpg "Test")

- ### Rankings
    A global leaderboard; users are listed based on different sorting criterias. Users are presented with their profile pictures, usernames, and four stats. The sorting criterias sort based on either of these four stats which are:
    - Rank
    - Games Played
    - Words Per Minute (WPM)
    - Accuracy
    
    > \< Rankings Page Image>

<hr>

## Note
The backend server makes use of a mongoDB database. To access the particular database requires authentication, but for security concerns, one would need to configure their own database and supply their own access information.