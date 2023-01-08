import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';


type Props = {
  country: string
};

const LeaguePage = (props: Props) => {
    const { country } = props;
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
      </Box>
    );
  };
  
  export default LeaguePage;