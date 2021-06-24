import React, { useEffect, useState } from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

//data
import { dataPanganHewan } from './data'


function FoodConsumption() {
  const [animal, setAnimal] = React.useState('');
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
              options={dataPanganHewan(dataPangan, animal)}
            />
          </CardContent>
        </Card>
      </Grid >
    </Grid >
  )
}


export default FoodConsumption
