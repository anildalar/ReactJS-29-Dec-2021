export default function Hoc(HocComponent){
    return (
      <div id="HOC">
          <h1>Hello FROM HOC</h1>
          <HocComponent></HocComponent>
      </div>
    );
  }