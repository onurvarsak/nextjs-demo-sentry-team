import Image from "next/image";
import classes from "./page.module.scss";

export default function Page() {
  return (
    <div className={classes.body}>
      <div className={classes.title}> Fotoğraflar ve Videolar</div>
      <video
        className={classes.content}
        src={"/video1.mp4"}
        width="1100"
        height="625"
        autoPlay
        muted
        loop
      />
      <video
        className={classes.content}
        src={"/video2.mp4"}
        width="1100"
        height="625"
        autoPlay
        muted
        loop
      />
      <video
        className={classes.content}
        src={"/video3.mp4"}
        width="1100"
        height="555"
        autoPlay
        muted
        loop
      />
      {/* Fotoğraflar optimize edilmesin diye next'ın Image tag'ini kullanmadım */}
      <img
        className={classes.content}
        src="/photo1.jpg"
        alt="photo1"
        width="1100"
        height="700"
      />
      <img
        className={classes.content}
        src="/photo2.jpg"
        alt="photo2"
        width="1100"
        height="700"
      />
      <img
        className={classes.content}
        src="/photo3.jpg"
        alt="photo3"
        width="1100"
        height="700"
      />
      <iframe
        className={classes.content}
        width="1100"
        height="700"
        src="https://www.youtube.com/embed/KLuTLF3x9sA?autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className={classes.content}
        width="1100"
        height="700"
        src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className={classes.content}
        width="1100"
        height="700"
        src="https://www.youtube.com/embed/uXNU0XgGZhs?autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
