import React from "react";

type Props = {
  caption: string;
  columns?: number;
};

const ChartContainer: React.FC<Props> = ({
  caption,
  children,
  columns = 1,
}) => (
  <figure className={columns > 1 ? `col-${columns}` : ""}>
    {children}
    <figcaption>{caption}</figcaption>
  </figure>
);

export default ChartContainer;
