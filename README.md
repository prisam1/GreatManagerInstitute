# Assignment
**Code Challenge: Build A Movie Player**

The Challenge is to build a movie player with image thumbnails with a playlist section and a separate section to play the selected video.

Feel free to add in any other cool tweaks or features.

**Tech Requirements:**

- Any Tech Stack
- But Angular 2+ is preferable.

**API**
=====
Create an api that fetch's the video url and thumbnail from youtube and return the list.

Refer to below sample API URL:
https://api-uat.greatmanagerinstitute.com/api/v2/getTrailerList

**Task**
=====

1. A Playlist Section with all the available videos from the API.
2. A Video Player Section that plays the selected video
3. Load the newly selected video from the playlist to the video player
4. The API requires a `Source` header so use a request interceptor to send it on every request
5. The Angular Components should communicate with each other using a Parent Child Relation and not Events. (For Ex: The Playlist and Video Player should be 2 different components ) 
6. Add in a custom transform pipe to convert the Title of the video to Uppercase
7. Avoid using any kind of HTML/CSS framework.
8. A Carousel for scrolling through the playlist
9. Toast Message for an Error on Bad Requests or Incorrect Request Params

**Goals of this Challenge**
=====

- Get to know your Knowledge of dealing with an External API
- Visualisation of Data from that API
- Handling HTML DOM Events
- Understanding Component communication
- Know your Expertise of HTML/CSS
