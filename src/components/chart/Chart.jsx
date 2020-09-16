import React from 'react';
import { Line} from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({WH,VARH,Date}) => {
  
  const lineChart = (
    WH ? (
      <Line
        data={{
          labels: Date,
          datasets: [{
            data: WH,
            label: 'WH',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: VARH,
            label: 'VARH',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  );
};

export default Chart;