import React from "react";

type Props = {
  caption: string;
  className?: string;
};

const ChartContainer: React.FC<Props> = ({ caption, children, className }) => (
  <figure className={className}>
    {children}
    <figcaption>{caption}</figcaption>
  </figure>
);

export default ChartContainer;
