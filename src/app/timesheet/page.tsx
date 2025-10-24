export default function TimesheetPage() {
  return (
    <div className="min-h-screen py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">MendoGrass Timesheet</h1>
          <p className="text-lg text-gray-600">Employee: Samuel Holley</p>
          <p className="text-sm text-gray-500">Pay Rate: $20.00/hour</p>
        </div>

        {/* Main Timesheet Table */}
        <div className="overflow-x-auto border border-gray-300">
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold text-gray-900 w-32">Date</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold text-gray-900 w-32">Start Time</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold text-gray-900 w-32">End Time</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold text-gray-900">Location</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold text-gray-900 w-28">Hours</th>
                <th className="border border-gray-300 px-3 py-2 text-right text-sm font-semibold text-gray-900 w-24">Pay</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-sm font-semibold text-gray-900">Notes</th>
              </tr>
            </thead>
            <tbody>
              {/* Website Work */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Pre-week</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600">—</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600">—</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Remote</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">3.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$60.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600">Website work</td>
              </tr>
              
              {/* Tuesday AM */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">10/21/2025</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">9:15 AM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">11:00 AM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Adam&apos;s House</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">1.75</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$35.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600"></td>
              </tr>
              
              {/* Tuesday PM */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">10/21/2025</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">12:45 PM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">3:30 PM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Adam&apos;s House</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">2.75</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$55.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600"></td>
              </tr>
              
              {/* Tuesday Subtotal */}
              <tr className="bg-gray-50 font-semibold">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900" colSpan={4}>Tuesday 10/21 Subtotal</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">4.50</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$90.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600"></td>
              </tr>
              
              {/* Wednesday AM */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">10/22/2025</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">8:15 AM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">9:45 AM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Deliveries / Adam&apos;s Dad&apos;s House</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">1.50</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$30.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600"></td>
              </tr>
              
              {/* Wednesday PM */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">10/22/2025</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">11:30 AM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">1:30 PM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Adam&apos;s House → Mendo Lake Food Bank → Road B Farm</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">2.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$40.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600"></td>
              </tr>
              
              {/* Wednesday Subtotal */}
              <tr className="bg-gray-50 font-semibold">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900" colSpan={4}>Wednesday 10/22 Subtotal</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">3.50</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$70.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600"></td>
              </tr>
              
              {/* Thursday */}
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">10/23/2025</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">3:15 PM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">6:00 PM</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">Road B Farm</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">2.75</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$55.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600">5 min banked</td>
              </tr>
              
              {/* Thursday Subtotal */}
              <tr className="bg-gray-50 font-semibold">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900" colSpan={4}>Thursday 10/23 Subtotal</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900">2.75</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900 text-right">$55.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600"></td>
              </tr>
              
              {/* Banked Time */}
              <tr className="bg-blue-50">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900" colSpan={4}>Banked Time (Future Website Work)</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-blue-700 font-semibold">0.08</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-blue-700 font-semibold text-right">$1.67</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600"></td>
              </tr>
              
              {/* TOTAL */}
              <tr className="bg-green-100 font-bold">
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-900" colSpan={4}>TOTAL</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-green-800">13.75</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-green-800 text-right">$275.00</td>
                <td className="border border-gray-300 px-3 py-2 text-sm text-gray-600"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Export Instructions */}
        <div className="mt-6 p-4 bg-gray-50 border border-gray-300 rounded">
          <p className="text-sm text-gray-700">
            <strong>Export Tip:</strong> To export this timesheet, use your browser&apos;s print function (Cmd/Ctrl + P) and select &quot;Save as PDF&quot;, or copy the table data directly into Excel/Google Sheets.
          </p>
        </div>

        {/* Summary */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white border border-gray-300">
            <p className="text-xs text-gray-600 uppercase">Total Hours</p>
            <p className="text-2xl font-bold text-gray-900">13.75</p>
          </div>
          <div className="p-4 bg-white border border-gray-300">
            <p className="text-xs text-gray-600 uppercase">Pay Rate</p>
            <p className="text-2xl font-bold text-gray-900">$20.00/hr</p>
          </div>
          <div className="p-4 bg-white border border-gray-300">
            <p className="text-xs text-gray-600 uppercase">Total Pay</p>
            <p className="text-2xl font-bold text-green-700">$275.00</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-300">
            <p className="text-xs text-blue-700 uppercase">Banked</p>
            <p className="text-2xl font-bold text-blue-700">$1.67</p>
          </div>
        </div>
      </div>
    </div>
  );
}
