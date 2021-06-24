import React, { useEffect, useState } from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { dataPanganHewan } from './data'


// Load Highcharts modules

// require('highcharts/indicators/indicators')(Highcharts)
// require('highcharts/indicators/pivot-points')(Highcharts)
// require('highcharts/indicators/macd')(Highcharts)
// require('highcharts/modules/exporting')(Highcharts)
// require('highcharts/modules/map')(Highcharts)
// 
//data


function FoodConsumption() {
  // const [animal, setAnimal] = React.useState('');
  const [dataPangan, setDataPangan] = useState([])


  useEffect(() => {
    fetch('/api/food-consumption.json')
      .then((res) => res.json())
      .then((response) => {
        setDataPangan(response.data.foodConsumption.daily);
      })
  }, [])

  return (
    <Grid>
      <Grid>
        <Card p={5}>
          <CardContent sm={12}>
            <Typography component="h3" variant="20px">
              Daily Food Consumtion
            </Typography>
            <HighchartsReact
              highcharts={Highcharts}
              // constructorType={'stockChart'}
              options={dataPanganHewan(dataPangan)}
            />
          </CardContent>
        </Card>
      </Grid >
    </Grid >
  )
}


export default FoodConsumption
