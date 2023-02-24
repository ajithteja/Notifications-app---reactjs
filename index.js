const Notification = (props) => {
  //  Write your code here.
  const { colourCart, imgUrl, textClass } = props;
  return (
    <div className={`cart ${colourCart}`}>
      <img className="img" src={imgUrl} />
      <p className="text">{textClass}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="notification">Notifications</h1>
    <Notification
      colourCart="info"
      imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      textClass="information Message"
    />
    <Notification
      colourCart="success"
      imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      textClass="Success Message"
    />
    <Notification
      colourCart="warning"
      imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      textClass="Warning Message"
    />
    <Notification
      colourCart="error"
      imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      textClass="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
