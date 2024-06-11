import Image from "next/image"
import classes from "./page.module.scss"

export default function Page() {
  return (
    <div className={classes.body}>
      {[...Array(1000000)].map((item, index) => {
        return <p key={index.toString()}>{index.toString()}</p>
      })}
    </div>
  )
}
