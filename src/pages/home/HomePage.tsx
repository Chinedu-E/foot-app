import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';




interface Fixture {
  HomeTeam: string;
  AwayTeam: string;
  Date: string;
  Time: string;
}



const MatchFixture = ({ fixture }: { fixture: Fixture }) => {
  const { HomeTeam, AwayTeam, Date, Time } = fixture;
  return (
    <Box paddingBottom={5}>
      <Paper elevation={8} sx={{width: "50%",  height:150}}>
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
            <Button variant="contained">View Details</Button>
          </Stack>
        </div>
        <div>{AwayTeam}</div>
      </Stack>
      </Paper>
    </Box>
  );
};


const HomePage = () => {
  const [fixtures, setFixtures] = useState([{
                                            "HomeTeam": "-",
                                            "AwayTeam": "-",
                                            "Date": "-",
                                            "Time": "-",
                                          }]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/fixtures')
        .then(response => response.json())
        .then(data => setFixtures(data));
  }, []);

  return (
    <Box justifyContent="center">
        {fixtures.map((fixture) => (
          <MatchFixture fixture={fixture} />
        ))}
    </Box>
  );
};

export default HomePage;