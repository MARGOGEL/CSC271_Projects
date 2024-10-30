/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

const movArray=["The Dark Knight", "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
"8.5/10", "The Dark Knight Rises is part of the Dark Knight Trilogy that documents the rise of Batman following a..."]


const movImgages= document.querySelector[2]('.movie-img');
movLink= movArray[1]
movAlt= movArray[0]
const movName = document.querySelector(".movie-link");
movText= movArray[0]
const movDesc= document.querySelector[2]('.description');
newDesc=movArray[2]