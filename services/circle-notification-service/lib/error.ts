export type CircleServiceError = {
  type: "CircleServiceError";
  message: string;
  code: number;
};

export const circleServiceErrorType = "CircleServiceError";

export const isCircleServiceError = (err: any): err is CircleServiceError => err.type === circleServiceErrorType;
