import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateModal = ({ refetch, id }) => {
  //   fetch data for update
  const [task, setTask] = useState({});
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    fetch(`https://damp-caverns-30204.herokuapp.com/task/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [id, update]);
  console.log(task);
  const updateTask = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const date = e.target.date.value;

    fetch(`https://damp-caverns-30204.herokuapp.com/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, description, date }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        setUpdate(!update);
        toast.success("Your Task Updated 😀");
      });
    e.target.reset();
  };

  return (
    <div className="bg-slate-500">
      {/* <!-- The button to open modal --> */}

      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-slate-700 ">
          <label
            for="my-modal-1"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-gradient-to-t from-purple-500 to-pink-600 hover:bg-gradient-to-t hover:from-pink-500 hover:to-purple-600 text-white"
          >
            ✕
          </label>
          <h2>{id}</h2>
          {/* from input */}
          <form onSubmit={updateTask}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Task Title</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={task?.name}
                placeholder="Task Title"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="text"
                name="date"
                defaultValue={task?.date}
                placeholder="Date"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">description</span>
              </label>
              <textarea
                required
                name="description"
                defaultValue={task?.description}
                className="textarea textarea-bordered"
                placeholder="description"
              ></textarea>
            </div>
            <div className="modal-action">
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

export default UpdateModal;
