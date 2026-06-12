import { MOCK_STATUS_LABEL, type MockInquiry } from "./mock-data";

/* Shared inquiries table (dashboard "recent" slice + full inquiries view).
   Inline color styles intentionally mirror the prototype's cell overrides
   (pages.css .table td color would win over layered utilities). */
export function InquiryTable({ rows }: { rows: MockInquiry[] }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Type</th>
          <th scope="col">Budget</th>
          <th scope="col">Date</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((q) => (
          <tr key={`${q.name}-${q.date}`}>
            <td className="font-semibold" style={{ color: "var(--ink-100)" }}>
              {q.name}
            </td>
            <td>{q.type}</td>
            <td className="font-mono">{q.budget}</td>
            <td className="font-mono" style={{ color: "var(--ink-400)" }}>
              {q.date}
            </td>
            <td>
              <span className={`badge ${q.status}`}>{MOCK_STATUS_LABEL[q.status]}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
