const https = require('https');

async function getTeams(year, k) {
  // write your code here
  // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
  let data = await getData(year, 1);
  for (let i = 2; i <= data.total_pages; i++) {
    const newData = await getData(year, i, k);
    data = {
      total_pages: data.total_pages,
      data: [...data.data, ...newData.data],
    };
  }
  const teams = getKTeams(data.data);
  const result = [...teams.keys()].filter((key) => teams.get(key) >= k).sort();
  console.log(result);
  return [];
}

const getData = (year, page) => {
  return new Promise((resolve, reject) => {
    https.get(
      `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`,
      (response) => {
        response.on('data', (data) => {
          const responseData = JSON.parse(data.toString());
          resolve({
            total_pages: responseData.total_pages,
            data: responseData.data,
          });
        });
        response.on('error', (err) => {
          reject(err);
        });
      }
    );
  });
};

const getKTeams = (data, k) => {
  const teams = new Map();
  data.forEach((match) => {
    updateTeamsData(match.team1, teams);
    updateTeamsData(match.team2, teams);
  });
  return teams;
};

const updateTeamsData = (team, teams) => {
  if (teams.has(team)) {
    const team1 = teams.get(team);
    teams.set(team, team1 + 1);
  } else {
    teams.set(team, 1);
  }
};

getTeams(2012, 6);
