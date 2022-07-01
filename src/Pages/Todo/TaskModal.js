import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { format } from "date-fns";
import auth from "../../firebase.init";

const TaskModal = ({ refetch }) => {
  const [user] = useAuthState(auth);
  const [date, setDate] = useState(new Date());
  // const currentDate = {format(date, "PP")}
  const handelTask = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const date = e.target.date.value;
    const email = user?.email;

    fetch("https://damp-caverns-30204.herokuapp.com/addTask", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, description, date, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Your Task Added.🥰");
      });
    e.target.reset();
  };
  return (
    <div className="bg-slate-500">
      {/* <!-- The button to open modal --> */}

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-slate-700 ">
          <label
            for="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-gradient-to-t from-purple-500 to-pink-600 hover:bg-gradient-to-t hover:from-pink-500 hover:to-purple-600 text-white"
          >
            ✕
          </label>
          {/* from input */}
          <form onSubmit={handelTask}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Task Title</span>
              </label>
              <input
                type="text"
                name="name"
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
                defaultValue={format(date, "PP")}
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

export default TaskModal;
