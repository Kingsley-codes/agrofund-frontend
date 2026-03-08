import InvestmentRow from "./InvestmentRow";

const staticInvestments = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLBi0r9hG6NiNg1z4R0aUbVlC-EUH4L2TYFeKS1kClMi1JIFI8MT_bI0EVK8jF0z4CwslsM-BLL3sBgDe8EoJPQnFR7qOdjVuq3He7QC1NVYLJcVJsAPQXB2-sXyXJvpzbQ8PMDkVmjPNxslZFj2tyqUb8xh-jD6F0oWUDZ6OXNKeQgzVkkHTSX_b9BDVcwAOWaKWjIHa5_YWOdNa56gPRlrQpHtkIe3xlg17-WG0wvkDw5J3omXWu-oCiAnXaOG_3f3qr0aq-a_0",
    name: "Maize Cycle A-22",
    farm: "Iowa Farm Collective",
    invested: "$500",
    progress: 65,
    status: "Growing",
    roi: "+12%",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDudmLg8S5IDh9WF06zuUIQQDqET8fNPhpvzzR6HQF8kOHard_HV7tLg22JGp9gQ5axmWPX7_8Qp9-nFBBfGmuKs8asqZT1_RxA-zM3F0cxl_s78AupwU-UAc2nT81KOkellbt-zN1m_9tmiNL_1a8hyIm6UV4t2885EAOclKXFDLgDf8Sp9MaZ3WEWFctzXTF-NYgkRYioq1o9H4wHMFk7v2L_SHJltelDOucKoMPjWzdWxrGxcUdQAJCvXBtcEgf-X5iWLby86WY",
    name: "Broiler Batch 40",
    farm: "Sunnyvale Poultry",
    invested: "$1,000",
    progress: 100,
    status: "Sold",
    roi: "+22%",
  },
];

interface InvestmentProps {
  image: string;
  name: string;
  farm: string;
  invested: string;
  progress: number;
  status: string;
  roi: string;
}

interface InvestmentTableProps {
  investments?: InvestmentProps[];
}

export default function InvestmentTable({
  investments = staticInvestments,
}: InvestmentTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-xl border bg-white shadow-sm">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b">
          <tr className="text-xs uppercase text-gray-500">
            <th className="hidden md:table-cell px-6 py-4">Asset</th>
            <th className="hidden md:table-cell px-6 py-4">Name</th>
            <th className="hidden md:table-cell px-6 py-4">Invested</th>
            <th className="hidden md:table-cell px-6 py-4">Growth Cycle</th>
            <th className="hidden md:table-cell px-6 py-4">Status</th>
            <th className="hidden md:table-cell px-6 py-4">ROI</th>
            <th className="hidden md:table-cell px-6 py-4 text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {investments.map((inv) => (
            <InvestmentRow key={inv.name} {...inv} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
