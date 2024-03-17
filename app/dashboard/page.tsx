/*
 * @Author: zhang_quan
 * @Date: 2024-03-14 23:17:54
 * @LastEditors: qseer 951738367@qq.com
 * @LastEditTime: 2024-03-16 23:09:03
 * @FilePath: \nextjs-dashboard\app\dashboard\page.tsx
 * @Description:
 * Copyright (c) 2024 by TWT, All Rights Reserved.
 */
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import axios from 'axios';
import { isConstructorDeclaration } from 'typescript';
// import { Axios } from 'axios';
// import { fetchRevenue } from '@/app/lib/data';

async function getData() {
  // await axios.get('http://localhost:5000/stus').then(result => {
  //   console.log(result.data)
  //   const {data} = result
  //   return data
  // })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const res = await fetch('http://localhost:5000/stus')
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      response.json();
    })
    .then((data) => {
      // console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
      return 404;
    });
  // console.log(res.json());

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data');
  // }

  return res;
}

export default async function Page() {
  // const data = getData();
  const data = await getData();
  // console.log('get data', typeof data, data[1]);
  // const revenue = await fetchRevenue();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* <p>{data[1].id}</p> */}
        <p className="bg-red-50 text-2xl">1231</p>
        {/* <p>
          MIT License Copyright (c) 2020 Next UI Permission is hereby granted,
          free of charge, to any person obtaining a copy of this software and
          associated documentation files (the "Software"), to deal in the
          Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or
          sell copies of the Software, and to permit persons to whom the
          Software is furnished to do so, subject to the following conditions:
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software. THE
          SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}
