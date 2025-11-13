const PatientsPage = () => {

  const tableStyles = {
    tableContainer: 'border border-slate-200 rounded-md',
    table: 'border-collapse table-auto w-full text-sm',
    thead: 'bg-slate-100',
    theadCell: 'border-b dark:border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-400 dark:text-slate-200 text-left',
    tbody: 'bg-white dark:bg-slate-800',
    cell: 'border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'
  }


  return ( 
  <div className={tableStyles.tableContainer}>
    <table className={tableStyles.table}>
      <thead className={tableStyles.thead}>
        <tr>
          <th className={tableStyles.theadCell}>State</th>
          <th className={tableStyles.theadCell}>City</th>
        </tr>
      </thead>
      <tbody className={tableStyles.tbody}>
        <tr>
          <td className={tableStyles.cell}>Indiana</td>
          <td className={tableStyles.cell}>Indianapolis</td>
        </tr>
        <tr>
          <td className={tableStyles.cell}>Ohio</td>
          <td className={tableStyles.cell}>Columbus</td>
        </tr>
        <tr>
          <td className={tableStyles.cell}>Michigan</td>
          <td className={tableStyles.cell}>Detroit</td>
        </tr>
      </tbody>
    </table>
  </div>
)};

 
export default PatientsPage;