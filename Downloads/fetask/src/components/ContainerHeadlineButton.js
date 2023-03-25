import "./ContainerHeadlineButton.css";

const ContainerHeadlineButton = ({
  rankingIds,
  rankingActionText,
  onSectionHeadlineButton1Click,
}) => {
  return (
    <div
      className="section-headline-button4"
      onClick={onSectionHeadlineButton1Click}
    >
      <div className="button84">
        <img className="rocketlaunch-icon10" alt="" src={rankingIds} />
        <div className="button85">{rankingActionText}</div>
      </div>
    </div>
  );
};

export default ContainerHeadlineButton;
