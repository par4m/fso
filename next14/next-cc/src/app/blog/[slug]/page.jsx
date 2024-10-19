import Link from "next/link";
import Image from "next/image";
import styles from "./singlePost.module.css";
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src="" alt="" fill className={styles.avatar} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam in
          molestias cum accusamus ipsam reprehenderit enim veritatis sit,
          corrupti ab quaerat nesciunt rem veniam beatae. Sunt vel quos optio
          tempora.
        </div>
      </div>
    </div>
  );
};
export default SinglePostPage;
