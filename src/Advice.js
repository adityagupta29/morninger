import './App.css';

function Advice(props) {
  return (
    <div className="advice">
      <div className="card">
        <h1 className="card-title">{props.data}</h1>
        <button onClick={props.onChange}>Generate New</button>
      </div>
    </div>
  );
}

export default Advice;
