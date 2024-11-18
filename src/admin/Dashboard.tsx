import { BarChart3, Users, FileText, TrendingUp } from 'lucide-react';

const stats = [
  { name: 'Total Visits', value: '89,432', change: '+14.5%', icon: Users },
  { name: 'Conversion Rate', value: '4.3%', change: '+2.1%', icon: TrendingUp },
  { name: 'Leads Generated', value: '2,845', change: '+18.2%', icon: FileText },
  { name: 'Avg. Session', value: '2m 45s', change: '+1.2%', icon: BarChart3 },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6"
          >
            <dt>
              <div className="absolute rounded-md bg-blue-500 p-3">
                <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">
                {stat.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                {stat.change}
              </p>
            </dd>
          </div>
        ))}
      </div>

      {/* Add more dashboard content here */}
    </div>
  );
}