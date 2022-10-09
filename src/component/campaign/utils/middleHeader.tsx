interface props {
  heading: string;
  step: string;
}

export const MiddleHeader: React.FC<props> = ({ heading, step }) => {
  return (
    <div style={{ display: "flex", paddingTop: "3px", alignItems: "center" }}>
      <h3 style={{ fontSize: "bold" }}>{heading}</h3>
      <h4 style={{ color: "rgba(0, 0, 0, 0.5)", marginLeft: "5px" }}>{step}</h4>
    </div>
  );
};
