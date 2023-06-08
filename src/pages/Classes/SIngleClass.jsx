import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

const SIngleClass = ({ singleClass }) => {
  const { availableSeats } = singleClass;
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
