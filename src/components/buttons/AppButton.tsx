import { Spin } from "antd";
import clsx from "clsx";

interface AppbuttonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

// export const AppButton: React.FC<AppbuttonProps> = () => {    //cach 1
//   return (
//     <div>
//       <button></button>
//     </div>
//   );
// };

export const AppButton = ({
  className,
  loading,
  children,
  disabled,
  type = "button",
  onClick,
}: AppbuttonProps) => {
  return (
    <div>
      <button
        className={clsx(
          disabled ? "bg-slate-600 text-slate-700" : "",
          `${className} bg-blue-300 border rounded-3xl`,
        )}
        disabled={disabled || loading}
        type={type}
        onClick={onClick}
      >
        {loading ? <Spin /> : ""}
        {children}
      </button>
    </div>
  );
};
