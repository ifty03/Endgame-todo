import React from "react";

const TaskModal = () => {
  return (
    <div className="bg-slate-500">
      {/* <!-- The button to open modal --> */}

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box bg-slate-700 ">
          <label
            for="my-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* from input */}
          <form>
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
                <span class="label-text">description</span>
              </label>
              <textarea
                required
                name="description"
                class="textarea textarea-bordered"
                placeholder="description"
              ></textarea>
            </div>
          </form>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              ADD!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
