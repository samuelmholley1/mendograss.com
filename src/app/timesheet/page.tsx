export default function TimesheetPage() {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">🧾 MendoGrass Work Log</h1>
          <p className="text-xl text-gray-600">Samuel&apos;s Timesheet — Chronological</p>
        </div>

        {/* Timesheet Entries */}
        <div className="space-y-6">
          {/* Website Work (Pre-week) */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">🌐 Website Work (prior to this week)</h2>
                <p className="text-gray-600 mt-1">Location: <span className="font-semibold">Remote</span></p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-green-600">3 hr 00 min</p>
                <p className="text-gray-600">$60.00</p>
              </div>
            </div>
            <div className="text-gray-500 text-sm italic">
              No specific start/stop times logged
            </div>
          </div>

          {/* Tuesday, October 21 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">📅 Tuesday, October 21, 2025</h2>
                <p className="text-gray-600 mt-1">Location: <span className="font-semibold">Adam&apos;s House</span></p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-green-600">4 hr 30 min</p>
                <p className="text-gray-600">$90.00</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">Morning Shift</span>
                <span className="font-mono text-gray-900">9:15 AM → 11:00 AM</span>
                <span className="text-gray-600">1 hr 45 min</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Afternoon Shift</span>
                <span className="font-mono text-gray-900">12:45 PM → 3:30 PM</span>
                <span className="text-gray-600">2 hr 45 min</span>
              </div>
            </div>
          </div>

          {/* Wednesday, October 22 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">📅 Wednesday, October 22, 2025</h2>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-green-600">3 hr 30 min</p>
                <p className="text-gray-600">$70.00</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <div>
                  <span className="text-gray-700">Morning Shift</span>
                  <p className="text-sm text-gray-500">Deliveries / Adam&apos;s Dad&apos;s House</p>
                </div>
                <span className="font-mono text-gray-900">8:15 AM → 9:45 AM</span>
                <span className="text-gray-600">1 hr 30 min</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <span className="text-gray-700">Afternoon Shift</span>
                  <p className="text-sm text-gray-500">Adam&apos;s House → Mendo Lake Food Bank → Road B Farm (Redwood Valley)</p>
                </div>
                <span className="font-mono text-gray-900">11:30 AM → 1:30 PM</span>
                <span className="text-gray-600">2 hr 00 min</span>
              </div>
            </div>
          </div>

          {/* Thursday, October 23 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">📅 Thursday, October 23, 2025</h2>
                <p className="text-gray-600 mt-1">Location: <span className="font-semibold">Road B Farm</span></p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-green-600">2 hr 45 min</p>
                <p className="text-gray-600">$55.00</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700">Afternoon Shift</span>
                <span className="font-mono text-gray-900">3:15 PM → 6:00 PM</span>
                <span className="text-gray-600">2 hr 45 min</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3 italic">5 min banked for future website work</p>
          </div>

          {/* Banked Time */}
          <div className="bg-blue-50 rounded-lg shadow-md p-6 border-2 border-blue-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900">💰 Banked Time</h3>
                <p className="text-gray-600 text-sm">Available for future website work</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-blue-600">0 hr 05 min</p>
                <p className="text-gray-600">$1.67</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Table */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🧮 Running Totals</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Date / Category</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Start–Stop Times</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Hours Worked</th>
                  <th className="border border-gray-300 px-4 py-3 text-right font-semibold text-gray-900">Pay (@ $20/hr)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">Website (pre-week)</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-600 font-mono">—</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">3 hr 00 min</td>
                  <td className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">$60.00</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">Tue 10/21</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-600 font-mono">9:15–11:00, 12:45–3:30</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">4 hr 30 min</td>
                  <td className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">$90.00</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">Wed 10/22</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-600 font-mono">8:15–9:45, 11:30–1:30</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">3 hr 30 min</td>
                  <td className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">$70.00</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">Thu 10/23</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-600 font-mono">3:15–6:00</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">2 hr 45 min</td>
                  <td className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">$55.00</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">Banked</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-600 font-mono">—</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">0 hr 05 min</td>
                  <td className="border border-gray-300 px-4 py-3 text-right text-gray-900 font-semibold">$1.67</td>
                </tr>
                <tr className="bg-green-50 font-bold">
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">TOTAL</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-600">—</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-900">13 hr 45 min</td>
                  <td className="border border-gray-300 px-4 py-3 text-right text-green-700 text-lg">$275.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-right italic">+ $1.67 banked for future use</p>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Rate: $20.00/hour</p>
        </div>
      </div>
    </div>
  );
}
