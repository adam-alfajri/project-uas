export type InvoiceStatus = "Open" | "Paid" | "Overdue";

export interface Invoice {
  id: string;
  date: string; // YYYY-MM-DD
  dueDate: string; // YYYY-MM-DD
  customer: string;
  sales: string;
  amount: number;
  status: InvoiceStatus;
}

// Data sementara. Nanti diganti dengan hasil upload Excel.
export const apInvoices: Invoice[] = [
  {
    id: "AP-2026-001",
    date: "2026-09-02",
    dueDate: "2026-09-30",
    customer: "PT Sinar Mandiri",
    sales: "Rina",
    amount: 12500000,
    status: "Paid",
  },
  {
    id: "AP-2026-002",
    date: "2026-09-10",
    dueDate: "2026-10-08",
    customer: "CV Maju Bersama",
    sales: "Dimas",
    amount: 8750000,
    status: "Paid",
  },
  {
    id: "AP-2026-003",
    date: "2026-09-18",
    dueDate: "2026-10-16",
    customer: "PT Nusantara Jaya",
    sales: "Rina",
    amount: 23400000,
    status: "Paid",
  },
  {
    id: "AP-2026-004",
    date: "2026-10-01",
    dueDate: "2026-10-31",
    customer: "PT Sinar Mandiri",
    sales: "Dimas",
    amount: 4300000,
    status: "Paid",
  },
  {
    id: "AP-2026-005",
    date: "2026-10-07",
    dueDate: "2026-11-05",
    customer: "UD Berkah Abadi",
    sales: "Sari",
    amount: 15600000,
    status: "Overdue",
  },
  {
    id: "AP-2026-006",
    date: "2026-10-14",
    dueDate: "2026-11-13",
    customer: "CV Maju Bersama",
    sales: "Rina",
    amount: 6900000,
    status: "Overdue",
  },
  {
    id: "AP-2026-007",
    date: "2026-10-22",
    dueDate: "2026-11-21",
    customer: "PT Nusantara Jaya",
    sales: "Sari",
    amount: 9100000,
    status: "Open",
  },
  {
    id: "AP-2026-008",
    date: "2026-10-28",
    dueDate: "2026-11-27",
    customer: "PT Sinar Mandiri",
    sales: "Dimas",
    amount: 31200000,
    status: "Open",
  },
  {
    id: "AP-2026-009",
    date: "2026-11-03",
    dueDate: "2026-12-03",
    customer: "UD Berkah Abadi",
    sales: "Sari",
    amount: 5450000,
    status: "Open",
  },
  {
    id: "AP-2026-010",
    date: "2026-11-08",
    dueDate: "2026-12-08",
    customer: "CV Maju Bersama",
    sales: "Dimas",
    amount: 18750000,
    status: "Open",
  },
  {
    id: "AP-2026-011",
    date: "2026-11-15",
    dueDate: "2026-12-15",
    customer: "PT Nusantara Jaya",
    sales: "Rina",
    amount: 7200000,
    status: "Open",
  },
  {
    id: "AP-2026-012",
    date: "2026-11-20",
    dueDate: "2026-12-20",
    customer: "PT Sinar Mandiri",
    sales: "Sari",
    amount: 11800000,
    status: "Open",
  },
];
