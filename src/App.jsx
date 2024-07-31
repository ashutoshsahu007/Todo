const App = () => {
  return (
    <center className="todo-container">
      <h1>TODO APP</h1>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter TODO Here "></input>
          </div>
          <div class="col-4">
            <input type="date"></input>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">Buy Milk</div>
          <div class="col-4">04/10/2023</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col-6">Go To College</div>
          <div class="col-4">04/10/2023</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
};
export default App;
