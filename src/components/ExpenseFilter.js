import React, { useState } from 'react'
import Select from '@material-ui/core/Select';
import { Box, Card, CardContent, Hidden, MenuItem, Typography } from '@material-ui/core'
import Chart from './Charts/Chart';

const ExpenseFilter = ({onYearChange, filteredExpenses}) => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    
    const fnChangeYearHandler = (event) => {
        setSelectedYear(event.target.value);
        onYearChange(event.target.value);
        localStorage.setItem("ET_dateFilter", event.target.value)
    }

    return (
      <Box marginTop={0.5}>
        <Card variant="outlined">
          <CardContent style={{paddingBottom: 16}}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              padding={0.5}
            >
              <Typography id="year-label">Filter by year</Typography>
              <Select
                labelId="year-label"
                id="select"
                value={selectedYear}
                onChange={fnChangeYearHandler}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="2022">2022</MenuItem>
                <MenuItem value="2021">2021</MenuItem>
                <MenuItem value="2020">2020</MenuItem>
                <MenuItem value="2019">2019</MenuItem>
              </Select>
            </Box>
            <Hidden only="xs">
              <Box>
                <Chart filteredExpenses={filteredExpenses} />
              </Box>
            </Hidden>
          </CardContent>
        </Card>
      </Box>
    );
}

export default ExpenseFilter
