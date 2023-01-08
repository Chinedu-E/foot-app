import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


type Props = {
  league: string,
  homeTeam: string,
  awayTeam: string
};

const Predict = (props: Props) => {
    const {league, homeTeam, awayTeam} = props;
    const [allProbabilities, setAllProbabilities] = useState({
        "home": 0.0,
        "draw": 0.0,
        "away": 0.0,
        "goalProbabilities": [{
            "homeGoals": 0,
            "awayGoals": 0,
            "probability": 0.0
        }]
    });


    useEffect(() => {
      fetch(`http://127.0.0.1:8000/predictions/${league}/${homeTeam}-${awayTeam}`)
      .then(response => response.json())
      .then(data => setAllProbabilities(data));
      }, [league, homeTeam, awayTeam]);
    

    return (
        <Box style={{height:300, width:"50%"}}>
            <Paper elevation={8}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: allProbabilities.home, textAlign: "center" ,backgroundColor: '#4285F4', height: '20px', borderRadius: '5px 0 0 5px' }}>
                    {(allProbabilities.home*100).toFixed(0)}%
                </div>
                <div style={{ flex: allProbabilities.draw, textAlign: "center", backgroundColor: '#F4B400', height: '20px', borderRadius: '0 5px 0 0' }}>
                    {(allProbabilities.draw* 100).toFixed(0)}%
                </div>
                <div style={{ flex: allProbabilities.away, textAlign: "center", backgroundColor: '#DB4437', height: '20px', borderRadius: '0 0 5px 0' }}>
                    {(allProbabilities.away* 100).toFixed(0)}%
                </div>
            </div>
          
          <div style={{alignItems: 'center'}}>
            <Typography textAlign="center"> Scoreline probablities</Typography>
            {allProbabilities.goalProbabilities.map(({ homeGoals, awayGoals, probability }) => (
              <div key={`${homeGoals}-${awayGoals}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ width: '30px', textAlign: 'right' }}>{homeGoals}</div>
                <div style={{ flex: 1, borderBottom: '1px solid #ccc' }} />
                <div style={{ width: '30px', margin: '0 10px'}}>{(probability * 100).toFixed(2)}%</div>
                <div style={{ flex: 1, borderBottom: '1px solid #ccc' }} />
                <div style={{ width: '30px', textAlign: 'left' }}>{awayGoals}</div>
              </div>
      ))}
    </div>
          </Paper>
        </Box>
      );
}

export default Predict;