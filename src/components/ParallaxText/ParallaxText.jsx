import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll, MotionValue, useTransform, progress } from "framer-motion";
import styles from "./style.module.scss";

// function Phrase({ text, image }) {
//   return (
//     <div className={styles.phraseContainer}>
//       <div className={styles.phraseText}>{text}</div>
//       <div className={styles.phraseImageContainer}>
//         <Image className={styles.phraseImage} src={image} alt="lego logo" />
//       </div>
//       <div className={styles.phraseText}>{text}</div>
//       <div className={styles.phraseImageContainer}>
//         <Image className={styles.phraseImage} src={image} alt="lego logo" />
//       </div>
//     </div>
//   );
// }

function Phrase({ text1, image1, text2, image2, text3, image3 }) {
  return (
    <div className={styles.phraseContainer}>
      <PhraseElement text={text1} image={image1} small={false} />
      <PhraseElement text={text2} image={image2} small={false} />
      <PhraseElement text={text3} image={image3} small={true} />
    </div>
  );
}

function PhraseElement({ text, image, small }) {
  return (
    <div className={styles.elementContainer}>
      <div className={styles.text}>{text}</div>
      <div
        className={small ? styles.imageContainerSmall : styles.imageContainer}
      >
        <Image className={styles.image} src={image} alt="techno logo" />
      </div>
    </div>
  );
}

export default function Line({
  text1,
  image1,
  text2,
  image2,
  text3,
  image3,
  left,
  progress,
  direction,
}) {
  const dir = direction == "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-200 * dir, 200 * dir]);
  return (
    <motion.div className={styles.lineContainer} style={{ left: left, x }}>
      <Phrase
        image1={image1}
        text1={text1}
        image2={image2}
        text2={text2}
        image3={image3}
        text3={text3}
      ></Phrase>
      <Phrase
        image1={image1}
        text1={text1}
        image2={image2}
        text2={text2}
        image3={image3}
        text3={text3}
      ></Phrase>
      {/* <Phrase
        image1={image1}
        text1={text1}
        image2={image2}
        text2={text2}
      ></Phrase> */}
      {/* <Phrase image={image} text={text}></Phrase>
      <Phrase image={image} text={text}></Phrase> */}
    </motion.div>
  );
}
