import { Spinner } from "../Spinner";

import styles from "./Loader.module.scss";

export const PageSpinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={className ? `${styles.Wrapper} ${className}` : styles.Wrapper}
    >
      <Spinner className="text-teal-600 w-24 h-24 " />
    </div>
  );
};
