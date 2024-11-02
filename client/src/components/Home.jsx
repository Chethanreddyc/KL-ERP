import React, { useState, useEffect } from 'react'
import Sidebar from '../Sidebar'

const stats = [
  { 
    id: 1, 
    name: 'Total Students',
    value: '16 Thousand',
  },
  { id: 2, name: 'Courses', value: 'More than 200' },
  { id: 3, name: 'Compaines', value: 'Over 300+' },
]

function Home() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('LoggedinUser');
    if (loggedInUser) {
      setUserName(loggedInUser);
    }
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white py-24 sm:py-32 flex-1">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            WELCOME  {userName}!
          </h1>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600 relative">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Home