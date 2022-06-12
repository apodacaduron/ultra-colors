import toast from "react-hot-toast";

export const errorHandler = (err: unknown) => {
  if (err instanceof TypeError || err instanceof RangeError || err instanceof EvalError || err instanceof Error) {
    toast.error(err.message)
  } else {
    console.log(err);
  }
}