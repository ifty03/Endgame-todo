import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useQuery } from "react-query";
import logo from "../../Assets/itu-1-removebg-preview.png";
import TaskModal from "./TaskModal";

const Todo = () => {
  const { data: tasks, refetch } = useQuery("task", () =>
    fetch("http://localhost:5000/task").then((res) => res.json())
  );
  console.log(tasks);
  return (
    <div class="overflow-x-auto text-slate-300">
      <div className=" lg:w-8/12 mx-auto bg-slate-700 p-8 rounded-md mt-10 w-fit">
        {!tasks?.length && (
          <div>
            <p className="text-2xl text-center">Please Add Your Task 🥰</p>
            <img className="w-fit mx-auto" src={logo} alt="" />
            <label
              for="my-modal-6"
              className="btn border-0 text-slate-100 bg-gradient-to-t from-purple-500 to-pink-600 hover:bg-gradient-to-t hover:from-pink-500 hover:to-purple-600 w-fit block mx-auto mb-1 -mt-4"
            >
              <div className="flex gap-2 justify-center items-center pt-3">
                ADD YOUR TASK <BiMessageSquareAdd className="text-2xl" />
              </div>
            </label>
          </div>
        )}
        {tasks?.length && (
          <div>
            <label
              for="my-modal-6"
              className="btn border-0 text-slate-100 bg-gradient-to-t from-purple-500 to-pink-600 hover:bg-gradient-to-t hover:from-pink-500 hover:to-purple-600 w-fit block ml-auto mb-1 -mt-4"
            >
              <div className="flex gap-2 justify-center items-center pt-3">
                ADD YOUR TASK <BiMessageSquareAdd className="text-2xl" />
              </div>
            </label>
            <table class="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Complete</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Edit</th>
                </tr>
              </thead>

              <tbody>
                {/* <!-- row 1 --> */}
                {tasks?.map((task) => (
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" class="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div class="flex items-center space-x-3">
                        <div>
                          <div class="font-bold">{task?.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="">{task?.description}</div>
                    </td>

                    <th>
                      <button class="btn bg-gradient-to-t from-purple-500 to-pink-600 btn-sm rounded-full h-12 text-2xl text-slate-300 hover:bg-gradient-to-t hover:from-pink-500 hover:to-purple-600 ">
                        <BiEdit />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>

              {/* <!-- foot --> */}
              <tfoot>
                <tr>
                  <th>Complete</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Edit</th>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
        <TaskModal refetch={refetch} />
      </div>
    </div>
  );
};

export default Todo;
