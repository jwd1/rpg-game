var rooms = [
    {
        location: 'gatehouse',
        description: 'You are at the gatehouse, a large castle gate blocks the south exit, the only other exit is north intot he courtyard.',
        north: 'courtyard',
        south: 'blocked',
        west: 'blocked',
        east: "blocked",
    },
    {
        location: 'courtyard',
        description: 'The courtyard is large and dimly lit. It as a uneven cobbled floor',
        north: 'kitchen',
        south: 'gatehouse',
        west: 'south west tower',
        east: 'south east tower',
    },
    {
        location: 'south west tower',
        description: 'You are at the top of the south west tower. The two southern towers are the tallest int the castle',
        north: 'west ramparts',
        south: 'blocked',
        west: 'blocked',
        east: 'courtyard',
    },
    {
        location: 'south east tower',
        description: 'The courtyard is large and dimly lit. It as a uneven cobbled floor',
        north: 'east ramparts',
        south: 'blocked',
        west: 'gatehouse',
        east: 'blocked',
    },
    {
        location: 'kitchen',
        description: 'You are in the castles large kitchen. There are a great number of unwashed pots and pans in the sink but no food to be found anywhere',
        north: 'ballroom',
        south: 'courtyard',
        west: 'west ramparts',
        east: 'east ramparts',
    },


]
