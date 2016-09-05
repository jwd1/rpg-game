/* Main loop for rpg game */

/* Global variables */
var playerLocation = "gatehouse";
var playerSkill = 0;
var playerStan = 0;
var playerLuck = 0;

function displayRoom () {
    console.log('function called');
    for (var i=0; i<rooms.length; i +=1) {
        room = rooms[i];
        console.log("array location: " + room.location + "player location " + playerLocation);
        
        if (room.location == playerLocation) {
            console.log("found location!!!!!!!!!!!!!!!!!");
            var htmlRoomDescription = '<p>' + room.description + "</p>"; 
            console.log(htmlRoomDescription);
            document.getElementById('roomDescription').innterHTML = htmlRoomDescription;
        }
        
        
        
        
    }
    
}

displayRoom();