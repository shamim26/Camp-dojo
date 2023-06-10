import { Button } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddClass = () => {
  const token = localStorage.getItem("access-token");
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (formData) => {
    const formDataImage = new FormData();
    formDataImage.append("image", formData.image[0]);
    axios
      .post(
        `https://api.imgbb.com/1/upload?&key=${
          import.meta.env.VITE_IMAGE_TOKEN
        }`,
        formDataImage
      )
      .then((imgData) => {
        if (imgData.data.success) {
          const imageUrl = imgData.data.data.display_url;
          const newClass = {
            image: imageUrl,
            name: formData?.name,
            instructorName: formData?.instructorName,
            instructorEmail: formData?.instructorEmail,
            availableSeats: parseInt(formData?.availableSeats),
            price: parseFloat(formData?.price),
            status: "pending",
            enrolledStudents: 0,
          };
          console.log(newClass);
          axios
            .post("https://camp-dojo-server.vercel.app/classes", newClass, {
              headers: { authorization: `bearer ${token}` },
            })
            .then((res) => {
              if (res.data.insertedId) {
                Swal.fire("Class Added", "", "success");
                reset();
              }
            });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-heading font-bold mb-10 uppercase">
        Add A Class
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div className="col-span-2">
          <p className="text-gray-600">Class Name</p>
          <input
            {...register("name", { required: true })}
            className="w-full text-light-blue-500 border-b-2 border-black outline-none p-2"
            type="text"
          />
        </div>
        <div>
          <p className="text-gray-600">Instructor Name</p>
          <input
            {...register("instructorName", { required: true })}
            className="w-full text-light-blue-500 border-b-2 border-black outline-none p-2"
            type="text"
            value={user?.displayName}
          />
        </div>
        <div>
          <p className="text-gray-600">Instructor Email</p>
          <input
            {...register("instructorEmail", { required: true })}
            className="w-full text-light-blue-500 border-b-2 border-black outline-none p-2"
            value={user?.email}
            type="email"
          />
        </div>
        <div>
          <p className="text-gray-600">Available Seats</p>
          <input
            {...register("availableSeats", { required: true })}
            className="w-full text-light-blue-500 border-b-2 border-black outline-none p-2"
            type="number"
          />
        </div>
        <div>
          <p className="text-gray-600">Class Price</p>
          <input
            {...register("price", { required: true })}
            className="w-full text-light-blue-500 border-b-2 border-black outline-none p-2"
            type="text"
          />
        </div>
        <div className="col-span-2 w-full">
          <p className="mb-2 text-gray-600">Class Image</p>
          <input
            {...register("image", { required: true })}
            className="border-b-2 w-full border-black file:p-2 file:border-none
             file:bg-transparent file:text-gray-600 file:text-transparent"
            type="file"
          />
        </div>
        <Button
          type="submit"
          className="col-span-2 w-[100px] mx-auto rounded-full bg-custom1 hover:bg-black"
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddClass;
