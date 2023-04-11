const Button = (props) => {
  const { buttonText, className } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  <div className="mainBgContainer">
    <div className="headingButtonsContainer">
      <h1 className="heading">Social Buttons</h1>
      <div className="ButtonsContainer">
        <Button buttonText="Like" className="likeButton" />
        <Button buttonText="Comment" className="commentButton" />
        <Button buttonText="Share" className="shareButton" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
