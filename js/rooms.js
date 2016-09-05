var rooms = [
    {
        location: 'gatehouse',
        description: 'You are at the gatehouse. It is a large and imposing gate with two towers flanking its left and right hand sides. The torches that usually light up the gate house have gone out and now its just dimly lit. A large castle gate blocks the south exit, the only other exit is north in to the courtyard.',
        north: 'courtyard',
        south: 'blocked',
        west: 'blocked',
        east: "blocked",
    },
    {
        location: 'courtyard',
        description: 'The courtyard is large and dimly lit. It as a uneven cobbled floor. You can see the kitchen to the north, it looks better lit then the courtyard. To the west is the South West tower and to the East is the South East tower. To the south lies the gatehouse',
        north: 'kitchen',
        south: 'gatehouse',
        west: 'south west tower',
        east: 'south east tower',
    },
    {
        location: 'south west tower',
        description: 'You are at the top of the south west tower. The two southern towers are the tallest int the castle. You can decent the tower and go north along the West walls ramparts or you can go east to the catles large courtyard.',
        north: 'west ramparts',
        south: 'blocked',
        west: 'blocked',
        east: 'courtyard',
    },
    {
        location: 'south east tower',
        description: 'You are at the top of the South East Tower. It is a large an imposing tower and one of the biggest the castle has. You can go north along the Eastern wall ramparts or you can go west to the castles courtyard.',
        north: 'east ramparts',
        south: 'blocked',
        west: 'gatehouse',
        east: 'blocked',
    },
    {
        location: 'kitchen',
        description: 'You are in the castles large kitchen. The torches along the wall are lit and the kitchen looks like it has been used recently. There are a great number of unwashed pots and pans in the sink but no food to be found anywhere. You can go north to the ballroom, south to the courtyard, west to the west ramparts or east to the east ramparts.',
        north: 'ballroom',
        south: 'courtyard',
        west: 'west ramparts',
        east: 'east ramparts',
    },


]
