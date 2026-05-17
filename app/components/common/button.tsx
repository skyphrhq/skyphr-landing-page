import { CommonButtonInterface } from "@/app/utils/interface/common.interface";
import { twMerge } from "tailwind-merge";

function Button({ children, className, ...props }: CommonButtonInterface) {
  return (
    <button className={twMerge("cursor-pointer", className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
