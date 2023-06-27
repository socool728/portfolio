import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/Untitleds.png';
import sprTexturePlaceholder from 'assets/nft-placeholder.jpg';
import sprTexture from 'assets/Untitleds.png';
import ymcaPicture from 'assets/YMCA.jpg';
import ymcaPlcaeholder from 'assets/ymca-placeholder.jpg';
import colormuseumplaceholder from 'assets/projects/colormuseum-placeholder.jpg';
import colormuseum from 'assets/projects/colormuseum.jpg';
import moonswapplaceholder from 'assets/projects/moonswap-placeholder.jpg';
import moonswap from 'assets/projects/moonswap.jpg';
import moonswapanalyzeplaceholder from 'assets/projects/moonswap-analyze-placeholder.jpg';
import moonswapanalyze from 'assets/projects/moonswap-anlyze.jpg';
import latticeplaceholder from 'assets/projects/lattice-placeholder.jpg';
import latticeexchange from 'assets/projects/lattice.jpg';

import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import devices from 'assets/projects/devices.jpg';
import devicePlaceholder from 'assets/projects/devices-placeholder.jpg';
import localsolicitors from 'assets/projects/localsolicitors.jpg';
import localsolicitorsPlaceholder from 'assets/projects/localsolicitors-placeholder.jpg';

const disciplines = [
  'Blockchain',
  'Solidity',
  'Ethereum',
  'SmartContract',
  'WEB3,JS',
  'REACT,JS',
  'NODE,JS',
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Full Stack Developer"
        description="portfolio of Carlos Jair — a product working on web & apps with a focus on motion, experience, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Color Museum"
        description="Color Museum is a new experimental, holder-curated market for digital art and collectibles accompanied by a gift shop offering physical derivatives."
        buttonText="View project"
        buttonLink="https://whitepaper.color.museum/docs/intro"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [colormuseum, colormuseum],
              placeholder: colormuseumplaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Moon Swap"
        description="NEXT-Generation Decentralized Trading Protocol! High-Speed 0 GAS! Based on Conflux Network, Ethereum Layer2 solution AMM DEX"
        buttonText="View Project"
        buttonLink="https://moonswap.fi/about"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [moonswap, moonswap],
              placeholder: moonswapplaceholder,
            },
            {
              srcSet: [moonswapanalyze, moonswapanalyze],
              placeholder: moonswapanalyzeplaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={3}
        title="Lattice Exchange"
        description="Lattice is the Gateway to Constellation’s web3 ecosystem where projects can launch tokens, raise & manage liquidity. Users can vote, swap tokens & earn rewards."
        buttonText="View project"
        buttonLink="https://lattice.is/launchpad"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [latticeexchange, latticeexchange],
              placeholder: latticeplaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={4}
        title="The Metaverse Ecosystem of NFT"
        description="Genesis collection of 10,000 3D, programmatically-generated rabbit avatars, each with their own unique features and stories to tell."
        buttonText="View website"
        buttonLink="https://www.fluf.world"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={5}
        title="NFT Art Generator"
        description="Toolkit to accelerate design and development of procedurally generated NFT projects"
        buttonText="View project"
        buttonLink="/projects/nftart"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={6}
        title="YMCA OF PIERCE & KITSAP COUNTIES"
        description="Website migration with an extensive function overhaul to improve the user experience"
        buttonText="View project"
        buttonLink="/projects/ymca"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [ymcaPicture, ymcaPicture],
              placeholder: ymcaPlcaeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-7"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={7}
        title="ColiMinder"
        description="An IoT solution for water quality monitoring and reflecting probing results in real-time"
        buttonText="View project"
        buttonLink="/projects/coliminder"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [devices, devices],
              placeholder: devicePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-8"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={8}
        title="Local Solicitors"
        description="Toolkit to accelerate design and development of procedurally generated NFT projects"
        buttonText="View project"
        buttonLink="/projects/localsolicitors"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [localsolicitors, localsolicitors],
              placeholder: localsolicitorsPlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-9"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={9}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
