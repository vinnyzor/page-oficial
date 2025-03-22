import { BsRobot } from "react-icons/bs";
import styles from "./Logo.module.scss";
import clsx from "clsx";
interface LogoProps {
  className?: any;
}

export default function Logo({ className }: LogoProps) {

  return (
        <BsRobot size="72" />
  );
}
