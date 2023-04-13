import Content from "@/components/Content";

export default function Opening() {
  return (
    <Content name="Öffnungszeiten">
      <div className="mx-3">
        <table className="mx-auto w-full table-auto text-xl lg:w-auto">
          <tbody>
            <tr>
              <th className="w-1/5 text-left text-teal-900 lg:w-40">
                Mo<span className="hidden lg:inline-block">ntag</span>
              </th>
              <td>9:00 - 12:30</td>
              <td>14:30 - 18:00</td>
            </tr>
            <tr>
              <th className="w-1/5 text-left text-teal-900 lg:w-40">
                Di<span className="hidden lg:inline-block">enstag</span>
              </th>
              <td>9:00 - 12:30</td>
              <td>14:30 - 18:00</td>
            </tr>
            <tr>
              <th className="w-1/5 text-left text-teal-900 lg:w-40">
                Mi<span className="hidden lg:inline-block">ttwoch</span>
              </th>
              <td colSpan={2} className="text-center">
                Geschlossen
              </td>
            </tr>
            <tr>
              <th className="w-1/5 text-left text-teal-900 lg:w-40">
                Do<span className="hidden lg:inline-block">nnerstag</span>
              </th>
              <td>9:00 - 12:30</td>
              <td>14:30 - 18:00</td>
            </tr>
            <tr>
              <th className="w-1/5 text-left text-teal-900 lg:w-40">
                Fr<span className="hidden lg:inline-block">eitag</span>
              </th>
              <td>9:00 - 12:30</td>
              <td>14:30 - 18:00</td>
            </tr>
            <tr>
              <th className="w-1/5 text-left text-teal-900 lg:w-40">
                Sa<span className="hidden lg:inline-block">mstag</span>
              </th>
              <td>9:00 - 12:30</td>
              <td className="text-center">Geschlossen</td>
            </tr>
            <tr className="border-0">
              <th className="w-1/5 text-left text-teal-900 lg:w-40">
                So<span className="hidden lg:inline-block">nntag</span>
              </th>
              <td colSpan={2} className="text-center">
                Geschlossen
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Content>
  );
}
