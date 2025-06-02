import React from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

// Define the base styles using cva
const cardStyles = cva(
  "rounded-2xl shadow-sm transition-colors duration-300 p-4", {
    variants: {
      variant: {
        default: "bg-white text-gray-900",
        subtle: "bg-gray-100 text-gray-800",
        dark: "bg-gray-800 text-white",
        bordered: "border border-gray-200",
      },
      hoverable: {
        true: "hover:shadow-md hover:bg-gray-50",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hoverable: true,
    },
  }
);

// Card component using clsx + cva
export default function Card({ variant, hoverable = true, className = "", children, ...props }) {
  return (
    <div
      className={clsx(
        cardStyles({ variant, hoverable }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
