import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Modal = ({ open, handleOpen, id }) => {
  const token = localStorage.getItem("access-token");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const { feedback } = data;
    const newData = {
      id: id,
      feedback: feedback,
    };
    reset();
    handleOpen();
    axios
      .put("https://camp-dojo-server.vercel.app/classes-feedback", newData, {
        headers: { authorization: `bearer ${token}` },
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire("feedback sent", "", "success");
        }
      });
  };
  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-sm">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Feedback</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <input {...register("id")} type="text" value={classItem} /> */}
              {/* <img src={classItem?.image} alt="" /> */}
              <textarea
                {...register("feedback")}
                className="border-4"
                cols="30"
                rows="10"
              ></textarea>

              <div className="flex justify-end">
                <button
                  onClick={handleOpen}
                  className="text-gray-500 hover:text-gray-600 font-semibold mr-4"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
