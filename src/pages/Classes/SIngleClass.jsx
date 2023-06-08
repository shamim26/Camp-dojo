import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SIngleClass = ({ singleClass }) => {
  const { availableSeats } = singleClass;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSelect = (clas) => {
    if (user) {
      const classOrder = {
        classId: clas._id,
        name: clas?.name,
        image: clas?.image,
        instructorEmail: clas?.instructorEmail,
        seats: clas?.availableSeats,
        price: clas?.price,
        studentEmail: user?.email,
      };
      axios
        .post("http://localhost:5100/selected-classes", classOrder)
        .then((res) => {
          if (res.data.insertedId) {
            Swal.fire(
              "Selected",
              "Please go to dashboard for checkout",
              "success"
            );
          }
        });
    } else {
      Swal.fire({
        title: "Please Login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div>
      <Card
        className={`${
          availableSeats === 0 ? "bg-red-400" : ""
        } shadow-none rounded-none`}
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="h-96 m-0 rounded-none"
        >
          <img
            src={singleClass?.image}
            className="w-full h-full object-cover rounded-none"
          />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-medium">
              {singleClass?.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              ${singleClass?.price}
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {singleClass?.instructorName}
            </Typography>
            <Typography
              variant="small"
              className="font-normal opacity-75 text-custom1"
            >
              Seats: {singleClass?.availableSeats}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={() => handleSelect(singleClass)}
            disabled={availableSeats === 0}
            ripple={false}
            fullWidth={true}
            className="bg-black rounded-full text-white shadow-none hover:bg-custom1 hover:shadow-none hover:scale-105 focus:shadow-none"
          >
            Select
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SIngleClass;
