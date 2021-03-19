import './button.scss';

const Button = () => {
  return (
    <div className="container">
      <button className="btn1">
        <span>Button Text</span>
      </button>
      <a href="#5" className="link-1">
        Link Hover
      </a>
      <div className="test-1">Link Hover2</div>
      <div className="test-2">Link Hover3</div>
    </div>
  );
};

export default Button;
