import profileKatakana from 'assets/carlos.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
// import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      As an innovative and adaptable Blockchain and MERN Stack Developer, I bring
      extensive expertise in designing, developing, and implementing cutting-edge
      blockchain technology solutions and full-stack applications using the MERN (MongoDB,
      Express, React, Node.js) tech stack. My in-depth knowledge of distributed systems,
      cryptography, and smart contract development, coupled with my passion for creating
      user-friendly and scalable web applications, enables me to contribute effectively
      across all phases of the project life cycle from ideation to deployment.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      With a proven track record in creating and deploying decentralized applications
      (DApps), I have experience in leveraging Ethereum, Solidity, Truffle, Web3.js, and
      IPFS to develop highly secure and transparent applications that address specific
      business needs. By seamlessly integrating blockchain technology with the MERN Stack,
      I have successfully built feature-rich, performance-driven applications that also
      reduce ownership costs and enhance customer experience.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My strong analytical, problem-solving, and communication skills allow me to excel in
      both individual and team environments, while my dedication to staying current with
      the latest trends and best practices in blockchain and web development has ensured
      my ability to deliver high-quality solutions that drive business growth.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div>
            <ProfileText visible={visible} titleId={titleId} />
            <Button
              secondary
              className={styles.button}
              data-visible={visible}
              href="/contact"
              icon="send"
            >
              Send me a message
            </Button>
          </div>
          // <div className={styles.content}>
          //   <div className={styles.column}>
          //     <ProfileText visible={visible} titleId={titleId} />
          //     <Button
          //       secondary
          //       className={styles.button}
          //       data-visible={visible}
          //       href="/contact"
          //       icon="send"
          //     >
          //       Send me a message
          //     </Button>
          //   </div>
          //   <div className={styles.column}>
          //     <div className={styles.tag} aria-hidden>
          //       <Divider
          //         notchWidth="64px"
          //         notchHeight="8px"
          //         collapsed={!visible}
          //         collapseDelay={1000}
          //       />
          //       <div className={styles.tagText} data-visible={visible}>
          //         About Me
          //       </div>
          //     </div>
          //     <div className={styles.image}>
          //       <Image
          //         reveal
          //         delay={100}
          //         placeholder={profileImgPlaceholder}
          //         srcSet={[profileImg, profileImgLarge]}
          //         sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
          //         alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
          //       />
          //       <img
          //         src="/carlos.svg"
          //         style={{ transform: 'rotate(270deg)', right: -320, bottom: '30%' }}
          //         aria-hidden="true"
          //         width="700"
          //         height="100"
          //         viewBox="0 0 135 765"
          //         className={styles.svg}
          //         data-visible={visible}
          //       ></img>
          //       <svg
          //         aria-hidden="true"
          //         width="135"
          //         height="765"
          //         viewBox="0 0 135 765"
          //         className={styles.svg}
          //         data-visible={visible}
          //       >
          //         <use href={`${profileKatakana}#katakana-profile`} />
          //       </svg>
          //     </div>
          //   </div>
          // </div>
        )}
      </Transition>
    </Section>
  );
};
