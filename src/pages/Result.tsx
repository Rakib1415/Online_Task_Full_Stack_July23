import CustomLineChart from '../components/CustomLineChart';
import ResultTable from '../components/ResultTable';

export const data = [
  {
    key: '1',
    applicationName: 'App 1',
    applicationImage: '/images/app1.png',
    status: 'Active',
    campaigns: 10,
    clicks: 1000,
    impressions: 5000,
    goal: 10000,
    dailyTargets: 200,
    installs: 800,
  },
  {
    key: '2',
    applicationName: 'App 2',
    applicationImage: '/images/app2.png',
    status: 'Paused',
    campaigns: 5,
    clicks: 500,
    impressions: 2500,
    goal: 5000,
    dailyTargets: 100,
    installs: 400,
  },
  {
    key: '3',
    applicationName: 'App 3',
    applicationImage: '/images/app2.png',
    status: 'Stopped',
    campaigns: 5,
    clicks: 500,
    impressions: 2500,
    goal: 5000,
    dailyTargets: 100,
    installs: 400,
  },
  {
    key: '4',
    applicationName: 'App 4',
    applicationImage: '/images/app2.png',
    status: 'Active',
    campaigns: 5,
    clicks: 500,
    impressions: 2500,
    goal: 5000,
    dailyTargets: 100,
    installs: 400,
  },
  {
    key: '5',
    applicationName: 'App 5',
    applicationImage: '/images/app2.png',
    status: 'Paused',
    campaigns: 5,
    clicks: 500,
    impressions: 2500,
    goal: 5000,
    dailyTargets: 100,
    installs: 400,
  },
  {
    key: '5',
    applicationName: 'App 5',
    applicationImage: '/images/app2.png',
    status: 'Active',
    campaigns: 5,
    clicks: 500,
    impressions: 2500,
    goal: 5000,
    dailyTargets: 100,
    installs: 400,
  },
  {
    key: '5',
    applicationName: 'App 5',
    applicationImage: '/images/app2.png',
    status: 'Paused',
    campaigns: 5,
    clicks: 500,
    impressions: 2500,
    goal: 5000,
    dailyTargets: 100,
    installs: 400,
  },
  {
    key: '5',
    applicationName: 'App 5',
    applicationImage: '/images/app2.png',
    status: 'Stopped',
    campaigns: 5,
    clicks: 500,
    impressions: 2500,
    goal: 5000,
    dailyTargets: 100,
    installs: 400,
  },
  {
    key: '5',
    applicationName: 'App 5',
    applicationImage: '/images/app2.png',
    status: 'Paused',
    campaigns: 5,
    clicks: 500,
    impressions: 2500,
    goal: 5000,
    dailyTargets: 100,
    installs: 400,
  },
  // add more data objects as needed
];
function Result() {
  return (
    <div className="w-[1000px] mx-auto space-y-8 my-5">
      <div className="dashboard-billing performance-card">
        <ResultTable data={data} />
      </div>
      <h2 className="text-2xl text-purple-700 font-bold">
        The result chart is look like:{' '}
      </h2>
      <div className="bg-white w-full performance-card">
        <CustomLineChart />
      </div>
    </div>
  );
}

export default Result;
