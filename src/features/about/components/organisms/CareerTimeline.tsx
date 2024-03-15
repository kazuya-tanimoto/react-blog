import { type JSX, memo } from "react";
import { type CareerItems } from "../../types/Career.ts";
import { CareerItem } from "../molecules/CareerItem.tsx";

export const CareerTimeline = memo(({ items }: CareerItems): JSX.Element => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <CareerItem
            title={item.title}
            summary={item.summary}
            keywords={item.keywords}
            color={item.color}
            from={item.from}
            to={item.to}
          />
        </div>
      ))}
    </div>
  );
});
