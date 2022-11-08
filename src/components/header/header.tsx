import classes from "./header.module.scss";

export function Header(): JSX.Element {
  return (
    <header className={classes.header}>
      <div className={classes.container}>HEDAR HIAR!</div>
    </header>
  );
}
