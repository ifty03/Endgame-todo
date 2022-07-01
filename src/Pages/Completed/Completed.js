import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import nothing from "../../Assets/no-result.gif";
import auth from "../../firebase.init";
import Spinner from "../../Shared/Spinner/Spinner";

const Completed = () => {
  const [user] = useAuthState(auth);
  const {
    data: tasks,
    refetch,
    isLoading,
  } = useQuery("completedTask", () =>
    fetch(`http://localhost:5000/completedTask/${user?.email}`).then((res) =>
      res.json()
    )
  );

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/completedTask/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="overflow-x-auto text-slate-300  min-h-screen">
      <div className=" lg:w-8/12 mx-auto bg-slate-700 p-8 rounded-md mt-10 w-fit">
        <h2 className="-mt-2 mb-4 text-center text-2xl font-semibold">
          Your Completed Task 🤩
        </h2>
        {!tasks?.length && (
          <div>
            <img className="w-fit mx-auto" src={nothing} alt="" />
          </div>
        )}
        {tasks?.length && (
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {/* <!-- row 1 --> */}
              {tasks.map((task) => (
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold">{task?.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="">
                      {task?.description?.slice(0, 40)} <br />{" "}
                      {task?.description?.slice(41, 80)}
                    </div>
                  </td>

                  <th>
                    <button
                      onClick={() => handelDelete(task?._id)}
                      className="btn bg-gradient-to-t from-purple-500 to-pink-600 btn-sm rounded-full h-12 text-2xl text-slate-300 hover:bg-gradient-to-t hover:from-pink-500 hover:to-purple-600 "
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>

            {/* <!-- foot --> */}
            <tfoot>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Delete</th>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    </div>
  );
};

export default Completed;
