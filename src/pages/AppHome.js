function AppHome() {
  return (
    <>
      {/** Flash card */}
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10">
          <div className="alert alert-secondary fs-4 p-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            numquam itaque odio, tempore maxime nemo expedita debitis iure modi
            saepe fugit sed ipsam, id doloribus vel corporis nulla ad assumenda!
            Lorem ipsum dolor sit, corporis nulla ad assumenda!
          </div>
        </div>
      </div>

      <AppCard />
    </>
  );
}

function AppCard() {
  let list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="row">
      {list.map((item, index) => (
        <div className="col-sm-12 col-md-3">
          <div>
            <img
              src={`https://picsum.photos/${300 + index}`}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus, ea perspiciatis.
            </p>
            <input
              type="button"
              value="Add to Cart"
              className="btn btn-success"
            />
            <input
              type="button"
              value="Continue"
              className="btn btn-secondary"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppHome;
