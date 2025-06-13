// Sidebar toggle functionality
const sidebar = document.getElementById('sidebar');
let sidebarOpen = false;

const toggleSidebar = (action) => {
  sidebarOpen = action === 'open';
  sidebar.classList[sidebarOpen ? 'add' : 'remove']('sidebar-responsive');
};

const openSidebar = () => toggleSidebar('open');
const closeSidebar = () => toggleSidebar('close');

// Chart configuration functions
const createBarChart = () => {
  const options = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: { show: false },
    },
    colors: ['#2962ff'],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: [
        'Product A',
        'Product B',
        'Product C',
        'Product D',
        'Product E',
        'Product F',
        'Product G',
      ],
    },
  };
  return new ApexCharts(document.querySelector('#bar-chart'), options);
};

const createAreaChart = () => {
  const options = {
    series: [
      { name: 'Purchase Orders', data: [31, 40, 28, 51, 42, 109, 100] },
      { name: 'Sales Orders', data: [11, 32, 45, 32, 34, 52, 41] },
    ],
    chart: {
      height: 350,
      type: 'area',
      toolbar: { show: false },
    },
    colors: ['#4f35a1', '#246dec'],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    markers: { size: 0 },
    yaxis: [
      { title: { text: 'Purchase Orders' } },
      { opposite: true, title: { text: 'Sales Orders' } },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
  };
  return new ApexCharts(document.querySelector('#area-chart'), options);
};

// Initialize charts
const initializeCharts = () => {
  const charts = [createBarChart(), createAreaChart()];
  charts.forEach((chart) => chart.render());
};

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
  initializeCharts();
});
