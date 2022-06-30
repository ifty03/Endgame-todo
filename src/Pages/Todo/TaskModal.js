import React from "react";

const TaskModal = ({ refetch }) => {
  const handelTask = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const date = e.target.date.value;

    fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, description, date }),
    })
      .then((res) => res.json())
      .then((data) => refetch());
    e.target.reset();
  };
  return (
    <div className="bg-slate-500">
      {/* <!-- The button to open modal --> */}

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box bg-slate-700 ">
          <label
            for="my-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2 bg-gradient-to-t from-purple-500 to-pink-600 hover:bg-gradient-to-t hover:from-pink-500 hover:to-purple-600 text-white"
          >
            ✕
          </label>
          {/* from input */}
          <form onSubmit={handelTask}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Task Title</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Task Title"
                required
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Date</span>
              </label>
              <input
                type="text"
                name="date"
                placeholder="Date"
                required
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">description</span>
              </label>
              <textarea
                required
                name="description"
                class="textarea textarea-bordered"
                placeholder="description"
              ></textarea>
            </div>
            <div class="modal-action">
              <input
                className="btn bg-gradient-to-t from-purple-500 to-pink-600 hover:bg-gradient-to-t hover:from-pink-500 hover:to-purple-600 border-0 text-white"
                type="submit"
                value="ADD!"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
