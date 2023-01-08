import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Predict from '../prediction_view/Predict';
import Standings from '../../components/common/Table';


type Props = {
  league: string
};

interface Fixture {
  HomeTeam: string;
  AwayTeam: string;
  Date: string;
  Time: string;
}



const MatchFixture = ({ fixture, props }: { fixture: Fixture, props: Props }) => {
  const { HomeTeam, AwayTeam, Date, Time } = fixture;
  const [showPredict, setShowPredict] = useState(false);

  function handleClick() {
    setShowPredict(!showPredict);
  }
  return (
    <Box paddingBottom={5} height={showPredict ? 350 : "auto"}>
      <Paper elevation={8} sx={{width: "50%",  height:150, paddingBottom:5}}>
      <Stack direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}>
        <div>{HomeTeam}</div>
        <div>
          <Stack justifyContent="center" alignItems="center">
            <Typography>
              <b>Match Time & Date:</b>
            </Typography>
            <Typography>
              {Date}
            </Typography>
            <Typography>
              {Time}
            </Typography>
            <Box>
              <Button variant="contained" onClick={handleClick}>View Details</Button>
            </Box>
          </Stack>
        </div>
        <div>{AwayTeam}</div>
      </Stack>
      </Paper>
      {showPredict && <Predict league={props.league} homeTeam={HomeTeam} awayTeam={AwayTeam}/>}
    </Box>
  );
};


const DefaultPage = (props: Props) => {
  const {league} = props;
  const [standings, setStandings] = useState({
    "headers": [""],
    "description": [""],
    "data": [[""]]
  })
  
  const [fixtures, setFixtures] = useState([{
    "HomeTeam": "-",
    "AwayTeam": "-",
    "Date": "-",
    "Time": "-",
  }]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/fixtures/${league}`)
    .then(response => response.json())
    .then(data => setFixtures(data));
    }, [league]);

  useEffect(() => {
      fetch(`http://127.0.0.1:8000/standings/${league}/2022`)
      .then(response => response.json())
      .then(data => setStandings(data));
      }, [league]);
  return (
    <Box display="flex">
    <Box justifyContent="center" sx={{width: '80%'}}>
        {fixtures.map((fixture) => (
          <MatchFixture fixture={fixture} props={{league}}/>
        ))}
    </Box>
    <Box
    sx={{
      position: "sticky",
      right: 0,
      backgroundColor: "white",
      padding: 5,
      zIndex: 1,
      width: '50%'
      }}
    >
    <Standings 
      headers={standings.headers} 
      data={standings.data} 
      description={standings.description}
      league={league}/>
  </Box>
  </Box>
  );
};

export default DefaultPage;