"use client"

import { useState } from "react";

type Entry = {
  id: string;
  date: string; // YYYY-MM-DD or label like 'Previous'
  start?: string;
  end?: string;
  description?: string;
  location?: string;
  hours: number;
  amount: number;
  paid?: boolean;
  paidDate?: string; // ISO date when paid
};

export default function TimesheetPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Malawigold1!") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
      setPassword("");
    }
  };

  // Data model for the page — as weeks go by this would come from a DB or API.
  const entries: Entry[] = [
    {
      id: "prev-1",
      date: "Previous",
      hours: 3,
      amount: 60,
      description: "Work on the website",
      location: "Remote",
      paid: false,
    },
    {
      id: "e1",
      date: "2025-10-21",
      start: "9:15 AM",
      end: "11:00 AM",
      description: "Farm work",
      location: "Adam's House",
      hours: 1.75,
      amount: 35,
      paid: false,
    },
    {
      id: "e2",
      date: "2025-10-21",
      start: "12:45 PM",
      end: "3:30 PM",
      description: "Farm work",
      location: "Adam's House",
      hours: 2.75,
      amount: 55,
      paid: false,
    },
    {
      id: "e3",
      date: "2025-10-22",
      start: "8:15 AM",
      end: "9:45 AM",
      description: "Deliveries and farm work",
      location: "Deliveries / Adam's Dad's House",
      hours: 1.5,
      amount: 30,
      paid: false,
    },
    {
      id: "e4",
      date: "2025-10-22",
      start: "11:30 AM",
      end: "1:30 PM",
      description: "Deliveries and farm work",
      location: "Adam's House → Mendo Lake Food Bank → Road B Farm",
      hours: 2,
      amount: 40,
      paid: false,
    },
    {
      id: "e5",
      date: "2025-10-23",
      start: "3:15 PM",
      end: "6:00 PM",
      description: "Farm work",
      location: "Road B Farm",
      hours: 2.75,
      amount: 55,
      paid: false,
    },
    // Example paid item (kept for demonstration). If paid items exist they'll appear in the Paid table.
    // {
    //   id: 'p1',
    //   date: '2025-10-01',
    //   start: '8:00 AM',
    //   end: '12:00 PM',
    //   description: 'Old work example',
    //   location: 'Farm',
    //   hours: 4,
    //   amount: 80,
    //   paid: true,
    //   paidDate: '2025-10-15'
    // }
  ];

  const unpaidEntries = entries.filter((e) => !e.paid);
  const paidEntries = entries
    .filter((e) => e.paid)
    .sort((a, b) => {
      // reverse-chronological by paidDate
      const da = a.paidDate ? new Date(a.paidDate).getTime() : 0;
      const db = b.paidDate ? new Date(b.paidDate).getTime() : 0;
      return db - da;
    });

  const totalHours = unpaidEntries.reduce((s, e) => s + e.hours, 0);
  const totalAmount = unpaidEntries.reduce((s, e) => s + e.amount, 0);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Timesheet Access</h1>
          <form onSubmit={handleSubmit}>
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent mb-4"
              placeholder="Password"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Access Timesheet
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 border-b-2 border-gray-900 pb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">MendoGrass Timesheet</h1>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Employee:</p>
              <p className="font-semibold text-gray-900">Samuel Holley</p>
            </div>
            <div>
              <p className="text-gray-600">Pay Rate:</p>
              <p className="font-semibold text-gray-900">$20.00/hour</p>
            </div>
            <div>
              <p className="text-gray-600">Period:</p>
              <p className="font-semibold text-gray-900">October 2025</p>
            </div>
            <div>
              <p className="text-gray-600">Status:</p>
              <p className="font-semibold text-gray-900">Payment Pending</p>
            </div>
          </div>
        </div>

        {/* Current Period - Unpaid */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Current Period - Unpaid</h2>
          <div className="overflow-x-auto border-2 border-gray-900 rounded-md">
            <table
              role="table"
              aria-label="Unpaid timesheet entries"
              className="min-w-[900px] w-full border-collapse bg-white"
            >
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold w-32">Date</th>
                  <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold w-28">Start Time</th>
                  <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold w-28">End Time</th>
                  <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold">Description</th>
                  <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold">Location</th>
                  <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold w-24">Hours</th>
                  <th className="border border-gray-900 px-3 py-3 text-right text-sm font-bold w-28">Amount</th>
                  <th className="border border-gray-900 px-3 py-3 text-center text-sm font-bold w-32">Paid?</th>
                </tr>
              </thead>
              <tbody>
                {unpaidEntries.map((row, idx) => (
                  <tr key={row.id} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900">{row.date}</td>
                    <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900">{row.start ?? '—'}</td>
                    <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900">{row.end ?? '—'}</td>
                    <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900">{row.description}</td>
                    <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900">{row.location}</td>
                    <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900">{row.hours.toFixed(2)}</td>
                    <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900 text-right">${row.amount.toFixed(2)}</td>
                    <td className="border border-gray-300 px-3 py-3 text-sm text-gray-600 text-center">{row.paid ? 'Yes' : 'Not yet'}</td>
                  </tr>
                ))}

                {/* TOTAL */}
                <tr className="bg-gray-900 text-white font-bold">
                  <td className="border border-gray-900 px-3 py-3 text-sm" colSpan={5}>
                    TOTAL HOURS & PAY
                  </td>
                  <td className="border border-gray-900 px-3 py-3 text-sm">{totalHours.toFixed(2)}</td>
                  <td className="border border-gray-900 px-3 py-3 text-sm text-right">${totalAmount.toFixed(2)}</td>
                  <td className="border border-gray-900 px-3 py-3 text-sm text-center">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment History - Paid Items (reverse-chronological by paidDate) */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Payment History (Paid)</h2>
          <div className="overflow-x-auto border-2 border-gray-900 rounded-md">
            <table role="table" aria-label="Paid entries" className="min-w-[900px] w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold w-32">Date Worked</th>
                  <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold w-28">Start Time</th>
                  <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold w-28">End Time</th>
                  <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold">Description</th>
                  <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold">Location</th>
                  <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold w-24">Hours</th>
                  <th className="border border-gray-900 px-3 py-3 text-right text-sm font-bold w-28">Amount</th>
                  <th className="border border-gray-900 px-3 py-3 text-center text-sm font-bold w-32">Paid Date</th>
                </tr>
              </thead>
              <tbody>
                {paidEntries.length === 0 ? (
                  <tr className="bg-gray-50">
                    <td colSpan={8} className="border border-gray-300 px-3 py-8 text-center text-sm text-gray-500 italic">
                      No payments recorded yet. Paid items will appear here.
                    </td>
                  </tr>
                ) : (
                  paidEntries.map((row, idx) => (
                    <tr key={row.id} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900">{row.date}</td>
                      <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900">{row.start ?? '—'}</td>
                      <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900">{row.end ?? '—'}</td>
                      <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900">{row.description}</td>
                      <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900">{row.location}</td>
                      <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900">{row.hours.toFixed(2)}</td>
                      <td className="border border-gray-300 px-3 py-3 text-sm text-gray-900 text-right">${row.amount.toFixed(2)}</td>
                      <td className="border border-gray-300 px-3 py-3 text-sm text-center">{row.paidDate ?? '—'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <p className="text-xs text-gray-600 uppercase font-semibold mb-1">Total Hours</p>
            <p className="text-3xl font-bold text-gray-900">{totalHours.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <p className="text-xs text-gray-600 uppercase font-semibold mb-1">Total Amount Due</p>
            <p className="text-3xl font-bold text-gray-900">${totalAmount.toFixed(2)}</p>
          </div>
          <div className="p-4 bg-gray-100 border border-gray-300 rounded-lg">
            <p className="text-xs text-gray-600 uppercase font-semibold mb-1">Payment Status</p>
            <p className="text-3xl font-bold text-gray-900">Pending</p>
          </div>
        </div>
      </div>
    </div>
  );
}
