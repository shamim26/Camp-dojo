import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const SingleInstructor = ({ instructor }) => {
  return (
    <div>
      <Card className=" shadow-none rounded-none">
        <CardHeader
          floated={false}
          className="h-80 overflow-hidden shadow-none rounded-none m-0"
        >
          <img
            src={instructor?.image}
            className="hover:scale-110 transition-all duration-300 rounded-none"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {instructor?.name}
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            {instructor?.email}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleInstructor;
