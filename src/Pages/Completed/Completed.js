import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import nothing from "../../Assets/no-result.gif";

const Completed = () => {
  const [complete, setComplete] = useState(true);
  return (
    <div class="overflow-x-auto text-slate-300">
      <div className=" lg:w-8/12 mx-auto bg-slate-700 p-8 rounded-md mt-10 w-fit">
        <h2 className="-mt-2 mb-4 text-center text-2xl font-semibold">
          Your Completed Task 🤩
        </h2>
        {!complete && (
          <div>
            <img className="w-fit mx-auto" src={nothing} alt="" />
          </div>
        )}
        {complete && (
          <table class="table w-full">
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
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div>
                      <div class="font-bold">Hart Hagerty</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="">
                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing
                    elit. Veritatis, itaque.
                  </div>
                </td>

                <th>
                  <button class="btn bg-gradient-to-t from-purple-500 to-pink-600 btn-sm rounded-full h-12 text-2xl text-slate-300 hover:bg-gradient-to-t hover:from-pink-500 hover:to-purple-600 ">
                    <RiDeleteBin6Line />
                  </button>
                </th>
              </tr>
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
