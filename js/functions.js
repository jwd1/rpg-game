function init() {
      playerSkill = 6 + Math.floor(Math.random() * 6) + 1;
      playerLuck = 6 + Math.floor(Math.random() * 6) + 1;
      playerStan = 12 + Math.floor(Math.random() * 12) + 1;  
}


function displayPlayerStats () {
    var htmlPlayerStats = '<h4>Player Stats</h4>Skill : ' + playerSkill + '<br>Stanima: '+ playerStan + '<br>Luck: ' + playerLuck + '</div>';
    document.getElementById('playerStats').innerHTML = htmlPlayerStats;
    
}



function displayRoom () {
    console.log('function called');
    for (var i=0; i<rooms.length; i +=1) {
        room = rooms[i];
        console.log("array location: " + room.location + "player location " + playerLocation);
        
        if (room.location == playerLocation) {
            console.log("found location!!!!!!!!!!!!!!!!!");
            var htmlRoomDescription = '<p>' + room.description + '</p>'; 
            console.log(htmlRoomDescription);
            document.getElementById('roomDescription').innerHTML = htmlRoomDescription;
        }         
        
    }
    
}
