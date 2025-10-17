// Creating an array of objects for all the teams in the English football league

const teams = [
    {team_name: 'Accrington Stanley FC', titles: 0, current_league: 'League Two'}, 
    {team_name: 'AFC Bournemouth', titles: 0, current_league: 'Premier League'},
    {team_name: 'AFC Wimbledon', titles: 0, current_league: 'League One'},
    {team_name: 'Arsenal FC', titles: 13, current_league: 'Premier League'},
    {team_name: 'Aston Villa FC', titles: 7, current_league: 'Premier League'},
    {team_name: 'Barnet FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Barnsley FC', titles: 0, current_league: 'League One'},
    {team_name: 'Barrow AFC', titles: 0, current_league: 'League Two'},
    {team_name: 'Birmingham City FC', titles: 0, current_league: 'Championship'},
    {team_name: 'Blackburn Rovers FC', titles: 3, current_league: 'Championship'},
    {team_name: 'Blackpool FC', titles: 0, current_league: 'League One'},
    {team_name: 'Bolton Wanderers FC', titles: 0, current_league: 'League One'},
    {team_name: 'Bradford City AFC', titles: 0, current_league: 'League One'},
    {team_name: 'Brentford FC', titles: 0, current_league: 'Premier League'},
    {team_name: 'Brighton & Hove Albion FC', titles: 0, current_league: 'Premier League'},
    {team_name: 'Bristol City FC', titles: 0, current_league: 'Championship'},
    {team_name: 'Bristol Rovers FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Bromley FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Burnley FC', titles: 2, current_league: 'Premier League'},
    {team_name: 'Burton Albion FC', titles: 0, current_league: 'League One'},
    {team_name: 'Cambridge United FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Cardiff City FC', titles: 0, current_league: 'League One'},
    {team_name: 'Charlton Athletic FC', titles: 0, current_league: 'Championship'},
    {team_name: 'Chelsea FC', titles: 6, current_league: 'Premier League'},
    {team_name: 'Cheltenham Town FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Chesterfield FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Colchester United FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Coventry City FC', titles: 0, current_league: 'Championship'},
    {team_name: 'Crawley Town FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Crewe Alexandra FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Crystal Palace FC', titles: 0, current_league: 'Premier League'},
    {team_name: 'Derby County FC', titles: 2, current_league: 'Championship'},
    {team_name: 'Doncaster Rovers FC', titles: 0, current_league: 'League One'},
    {team_name: 'Exeter City FC', titles: 0, current_league: 'League One'},
    {team_name: 'Everton FC', titles: 9, current_league: 'Premier League'},
    {team_name: 'Fleetwood Town FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Fulham FC', titles: 0, current_league: 'Premier League'},
    {team_name: 'Gillingham FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Grimsby Town', titles: 0, current_league: 'League Two'},
    {team_name: 'Harrogate Town FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Huddersfield Town FC', titles: 3, current_league: 'League One'},
    {team_name: 'Hull City AFC', titles: 0, current_league: 'Championship'},
    {team_name: 'Ipswich Town FC', titles: 1, current_league: 'Championship'},
    {team_name: 'Leeds United FC', titles: 3, current_league: 'Premier League'},
    {team_name: 'Leicester City FC', titles: 1, current_league: 'Championship'},
    {team_name: 'Leyton Orient FC', titles: 0, current_league: 'League One'},
    {team_name: 'Lincoln City FC', titles: 0, current_league: 'League One'},
    {team_name: 'Liverpool FC', titles: 20, current_league: 'Premier League'},
    {team_name: 'Luton Town FC', titles: 0, current_league: 'League One'},
    {team_name: 'Manchester City FC', titles: 10, current_league: 'Premier League'},
    {team_name: 'Manchester United FC', titles: 20, current_league: 'Premier League'},
    {team_name: 'Mansfield Town FC', titles: 0, current_league: 'League One'},
    {team_name: 'Middlesbrough FC', titles: 0, current_league: 'Championship'},
    {team_name: 'Millwall FC', titles: 0, current_league: 'Championship'},
    {team_name: 'MK Dons FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Newcastle United FC', titles: 4, current_league: 'Premier League'},
    {team_name: 'Newport County FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Northampton Town FC', titles: 0, current_league: 'League One'},
    {team_name: 'Norwich City FC', titles: 0, current_league: 'Championship'},
    {team_name: 'Nottingham Forest FC', titles: 1, current_league: 'Premier League'},
    {team_name: 'Notts County', titles: 0, current_league: 'League Two'},
    {team_name: 'Oldham Athletic FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Oxford United FC', titles: 0, current_league: 'Championship'},
    {team_name: 'Peterborough United FC', titles: 0, current_league: 'League One'},
    {team_name: 'Plymouth Argyle FC', titles: 0, current_league: 'League One'},
    {team_name: 'Port Vale FC', titles: 0, current_league: 'League One'},
    {team_name: 'Portsmouth FC', titles: 2, current_league: 'Championship'},
    {team_name: 'Preston North End FC', titles: 2, current_league: 'Championship'},
    {team_name: 'Queens Park Rangers FC', titles: 0, current_league: 'Championship'},
    {team_name: 'Reading FC', titles: 0, current_league: 'League One'},
    {team_name: 'Rotherham United FC', titles: 0, current_league: 'League One'},
    {team_name: 'Salford City FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Sheffield United FC', titles: 1, current_league: 'Championship'},
    {team_name: 'Sheffield Wednesday FC', titles: 4, current_league: 'Championship'},
    {team_name: 'Shrewsbury Town FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Southampton FC', titles: 0, current_league: 'Championship'},
    {team_name: 'Stevenage FC', titles: 0, current_league: 'League One'},
    {team_name: 'Stockport County FC', titles: 0, current_league: 'League One'},
    {team_name: 'Stoke City FC', titles: 0, current_league: 'Championship'},
    {team_name: 'Sunderland AFC', titles: 6, current_league: 'Premier League'},
    {team_name: 'Swansea City FC', titles: 0, current_league: 'Championship'},
    {team_name: 'Swindon Town FC', titles: 0, current_league:  'League Two'},
    {team_name: 'Tottenham Hotspur FC', titles: 2, current_league: 'Premier League'},
    {team_name: 'Tranmere Rovers FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Walsall FC', titles: 0, current_league: 'League Two'},
    {team_name: 'Watford FC', titles: 0, current_league: 'Championship'},
    {team_name: 'West Bromwich Albion FC', titles: 1, current_league: 'Championship'},
    {team_name: 'West Ham United FC', titles: 0, current_league: 'Premier League'},
    {team_name: 'Wigan Athletic FC', titles: 0, current_league: 'League One'},
    {team_name: 'Wolverhampton Wanderers FC', titles: 3, current_league: 'Premier League'},
    {team_name: 'Wrexham AFC', titles: 0, current_league: 'Championship'},
    {team_name: 'Wycombe Wanderers FC', titles: 0, current_league: 'League One'}
];

// Creating a function to pick a random element from the teams array
const randomiser = () => {
    return Math.floor(Math.random() * teams.length);
}

// Creating a function to randomise a winning points total between 75 and 105
const pointsTotal = () => {
    return Math.floor(Math.random() * 31) + 75;
}

// Creating a function to randomise a year between 2030 and 2130
const year = () => {
    return Math.floor(Math.random() * 101) + 2030;
}

// Creating a function to print out the message
const premierLeagueWinner = () => {

    // Selecting the winning team via the randomiser function
    const team = teams[randomiser()];

    // Adding 1 to the teams title count
    team.titles += 1;

    // Printing a message declaring the winning team, the winning year, and the winning points tally
    console.log(`The winner of the Premier League in ${year()} is going to be ${team.team_name} with a winning points tally of ${pointsTotal()}!`);

    // Printing the new number of titles the team has now won
    if (team.titles === 1) {
        console.log(`This is ${team.team_name}'s 1st top flight title!`);
    } else {
        console.log(`${team.team_name} have now won the top division ${team.titles} times!`);
    }

    // Printing which division the team currently play in
    if (team.current_league === 'Premier League' || team.current_league === 'Championship') {
        console.log(`As of October 2025, ${team.team_name} currently play in the ${team.current_league}.`);
    } else {
        console.log(`As of October 2025, ${team.team_name} currently play in ${team.current_league}.`)
    }
}

premierLeagueWinner();

