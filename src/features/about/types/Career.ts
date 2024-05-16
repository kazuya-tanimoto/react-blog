export interface CareerItem {
  title: string;
  summary: string;
  keywords: string;
  from: string;
  to?: string;
}
export interface CareerItems {
  items: CareerItem[];
}
