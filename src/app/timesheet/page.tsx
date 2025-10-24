export default function TimesheetPage() {
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
              <p className="font-semibold text-red-600">UNPAID</p>
            </div>
          </div>
        </div>

        {/* Main Timesheet Table */}
        <div className="overflow-x-auto border-2 border-gray-900 mb-6">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold w-32">Date</th>
                <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold w-28">Start Time</th>
                <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold w-28">End Time</th>
                <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold">Location</th>
                <th className="border border-gray-900 px-3 py-3 text-left text-sm font-bold w-24">Hours</th>
                <th className="border border-gray-900 px-3 py-3 text-right text-sm font-bold w-28">Amount</th>
                <th className="border border-gray-900 px-3 py-3 text-center text-sm font-bold w-32">Paid?</th>
              </tr>
            </thead>
            <tbody>
              {/* Website Work */}
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Previous</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600">—</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600">—</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Remote</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">3.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$60.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-red-600 text-center font-medium">Not yet</td>
              </tr>
              
              {/* Tuesday AM */}
              <tr className="bg-white">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">10/21/2025</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">9:15 AM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">11:00 AM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Adam&apos;s House</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">1.75</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$35.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-red-600 text-center font-medium">Not yet</td>
              </tr>
              
              {/* Tuesday PM */}
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">10/21/2025</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">12:45 PM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">3:30 PM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Adam&apos;s House</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">2.75</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$55.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-red-600 text-center font-medium">Not yet</td>
              </tr>
              
              {/* Wednesday AM */}
              <tr className="bg-white">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">10/22/2025</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">8:15 AM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">9:45 AM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Deliveries / Adam&apos;s Dad&apos;s House</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">1.50</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$30.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-red-600 text-center font-medium">Not yet</td>
              </tr>
              
              {/* Wednesday PM */}
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">10/22/2025</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">11:30 AM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">1:30 PM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Adam&apos;s House → Mendo Lake Food Bank → Road B Farm</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">2.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$40.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-red-600 text-center font-medium">Not yet</td>
              </tr>
              
              {/* Thursday */}
              <tr className="bg-white">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">10/23/2025</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">3:15 PM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">6:00 PM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Road B Farm</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">2.75</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$55.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-red-600 text-center font-medium">Not yet</td>
              </tr>
              
              {/* TOTAL */}
              <tr className="bg-gray-900 text-white font-bold">
                <td className="border border-gray-900 px-3 py-3 text-sm" colSpan={4}>TOTAL HOURS & PAY</td>
                <td className="border border-gray-900 px-3 py-3 text-sm">13.75</td>
                <td className="border border-gray-900 px-3 py-3 text-sm text-right">$275.00</td>
                <td className="border border-gray-900 px-3 py-3 text-sm text-center">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-gray-100 border border-gray-300">
            <p className="text-xs text-gray-600 uppercase font-semibold mb-1">Total Hours</p>
            <p className="text-3xl font-bold text-gray-900">13.75</p>
          </div>
          <div className="p-4 bg-gray-100 border border-gray-300">
            <p className="text-xs text-gray-600 uppercase font-semibold mb-1">Total Amount Due</p>
            <p className="text-3xl font-bold text-gray-900">$275.00</p>
          </div>
          <div className="p-4 bg-red-50 border border-red-300">
            <p className="text-xs text-red-700 uppercase font-semibold mb-1">Payment Status</p>
            <p className="text-3xl font-bold text-red-600">UNPAID</p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t-2 border-gray-900 pt-6">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Employee Signature:</p>
              <div className="border-b-2 border-gray-400 h-12"></div>
              <p className="text-xs text-gray-600 mt-1">Date: _____________</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Employer Signature:</p>
              <div className="border-b-2 border-gray-400 h-12"></div>
              <p className="text-xs text-gray-600 mt-1">Date: _____________</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
