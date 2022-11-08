import { Header } from "@/components";

import classes from "./app.module.scss";

export function App(): JSX.Element {
  return (
    <div className={classes.app}>
      <Header />
    </div>
  );
}
