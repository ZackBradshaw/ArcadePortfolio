import React, { ReactNode } from "react";
type Props = {
  children?: ReactNode;
  title?: string;
};

const CRT = ({ children }: Props) => (
  <div>
    <section className="bezel">
      <div className="screen">{children}</div>
    </section>
  </div>
);

export default CRT;
