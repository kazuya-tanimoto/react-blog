import type { NestedListItem } from "@/types/NestedList";

export interface CareerItem {
  id: number;
  title: string;
  summary: string;
  keywords: string;
  from: string;
  to?: string;
}
export interface CareerItems {
  items: CareerItem[];
}

export interface CareerDetail extends Omit<CareerItem, "keywords"> {
  responsibility: NestedListItem[];
  technology: NestedListItem[];
  role: string;
  scale: string;
  responsibleProcess: string;
  comment: NestedListItem[];
}
