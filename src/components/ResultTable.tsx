import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  applicationName: string;
  applicationImage: string;
  status: string;
  campaigns: number;
  clicks: number;
  impressions: number;
  goal: number;
  dailyTargets: number;
  installs: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Application Name',
    dataIndex: 'applicationName',
    render: (text: any) => (
      <div className="flex items-center">
        {/* <Image src={appIcon} alt={'appicon'} width={34} height={34} /> */}
        <div style={{ marginLeft: 8 }}>{text}</div>
      </div>
    ),
    // fixed: 'left',
    className: 'border-r-2',
  },
  {
    title: 'Campaigns',
    dataIndex: 'campaigns',
  },
  {
    title: 'Clicks',
    dataIndex: 'clicks',
  },
  {
    title: 'Impressions',
    dataIndex: 'impressions',
  },
  {
    title: 'Goal',
    dataIndex: 'goal',
  },
  {
    title: 'Daily Targets',
    dataIndex: 'dailyTargets',
  },
  {
    title: 'Installs',
    dataIndex: 'installs',
  },
];

export default function ResultTable({ data }: { data: any[] }) {
  return (
    <Table
      className="bordered-table"
      columns={columns}
      dataSource={data}
      // scroll={{ x: 1700 }}
      pagination={false}
    />
  );
}
