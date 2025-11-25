import { ApexOptions } from 'apexcharts';

export const options: ApexOptions = {
  chart: {
    fontFamily: 'sans-serif',
    height: 310,
    type: 'area', // Set the chart type to 'line'
    toolbar: {
      show: false, // Hide chart toolbar
    },
  },
  legend: {
    show: false, // Hide legend
  },
  colors: ['#0E64EE', '#071429'], // Define line colors
  stroke: {
    curve: 'smooth',
    width: [2, 2],
  },
  fill: {
    type: 'gradient',
    opacity: [0.35, 0],
    gradient: {
      opacityFrom: 0.35,
      opacityTo: 0,
    },
  },
  markers: {
    size: 0, // Size of the marker points
  },
  grid: {
    xaxis: {
      lines: {
        show: false, // Hide grid lines on x-axis
      },
    },
    yaxis: {
      lines: {
        show: true, // Show grid lines on y-axis
      },
    },
  },
  dataLabels: {
    enabled: false, // Disable data labels
  },
  tooltip: {
    enabled: true, // Enable tooltip
    x: {
      format: 'dd MMM yyyy', // Format for x-axis tooltip
    },
  },
  xaxis: {
    tickAmount: 12,
    min: 1,
    max: 119, // 120 points total (0-119)
    labels: {
      formatter: function (value: string, timestamp?: number, opts?: any): string | string[] {
        const months = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ];
        const numValue = typeof value === 'string' ? parseFloat(value) : value;
        const index = Math.floor(numValue / 10);
        return months[index] || '';
      },
    },
    // type: 'category', // Category-based x-axis
    // categories: [
    //   'Jan',
    //   'Feb',
    //   'Mar',
    //   'Apr',
    //   'May',
    //   'Jun',
    //   'Jul',
    //   'Aug',
    //   'Sep',
    //   'Oct',
    //   'Nov',
    //   'Dec',
    // ],
    axisBorder: {
      show: false, // Hide x-axis border
    },
    axisTicks: {
      show: false, // Hide x-axis ticks
    },
    tooltip: {
      enabled: false, // Disable tooltip for x-axis points
    },
  },
  yaxis: {
    tickAmount: 4,
    min: 0,
    max: 100,
    labels: {
      style: {
        fontSize: '12px', // Adjust font size for y-axis labels
        colors: ['#071429'], // Color of the labels
      },
    },
    title: {
      text: '', // Remove y-axis title
      style: {
        fontSize: '0px',
      },
    },
  },
};
