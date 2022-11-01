import { Request, Response, NextFunction } from "express";

interface LocationWithTimezone {
  location: string;
  timezoneName: string;
  timezoneAbbr: string;
  utcOffset: number;
}

const getBMICategory = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.log("first", JSON.parse(request.body));
  response.status(200).json();
};

export default getBMICategory;
