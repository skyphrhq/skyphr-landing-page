import { CommonButtonInterface } from "@/app/utils/interface/common.interface";

function Button({ children, ...props }: CommonButtonInterface) {
  return <button {...props}>{children}</button>;
}

export default Button;
