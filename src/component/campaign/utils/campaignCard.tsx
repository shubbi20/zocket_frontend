import "../../../styles/common.scss";

interface Props {
  childComp: React.ReactNode;
  mainHeading: string;
  statement: string;
}

export const CampaignCard: React.FC<Props> = ({
  childComp,
  mainHeading,
  statement,
}) => {
  return (
    <div className="mainBox">
      <div>{childComp}</div>
      <div>
        <h1>{mainHeading}</h1>
        <p>{statement}</p>
      </div>
    </div>
  );
};
