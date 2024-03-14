export interface CareerItem {
  title: string;
  summary: string;
  keywords: string;
  color: string;
  from: string;
  to?: string;
}
export interface CareerItems {
  items: CareerItem[];
}
