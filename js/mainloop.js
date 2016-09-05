/* Main loop for rpg game */

/* Global variables */
var playerLocation = "gatehouse";
var playerSkill = 0;
var playerStan = 0;
var playerLuck = 0;

init();
displayPlayerStats();
displayRoom();

/* --------------------main -------------------------------------------------- */
function reply_click(clicked_id) {
    
    if (clicked_id == "north_btn") {
        
        for (var i=0; i <rooms.length; i +=1) {
            room = rooms[i];
            if (playerLocation == room.location && room.north != "blocked") {
                    playerLocation = room.north;
                    displayRoom();
                    return;
            }

        }
    }

    if (clicked_id == "west_btn") {
        
        for (var i=0; i <rooms.length; i +=1) {
            room = rooms[i];
            if (playerLocation == room.location && room.north != "blocked") {
                    playerLocation = room.west;
                    displayRoom();
                    return;
            }

        }
    }
    
    if (clicked_id == "east_btn") {
        
        for (var i=0; i <rooms.length; i +=1) {
            room = rooms[i];
            if (playerLocation == room.location && room.north != "blocked") {
                    playerLocation = room.east;
                    displayRoom();
                    return;
            }

        }
    }
    
    if (clicked_id == "south_btn") {
        
        for (var i=0; i <rooms.length; i +=1) {
            room = rooms[i];
            if (playerLocation == room.location && room.north != "blocked") {
                    playerLocation = room.south;
                    displayRoom();
                    return;
            }

        }
    }
    
    
    
    
    
    
    
    
    
    
}