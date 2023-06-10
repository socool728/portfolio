import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
// import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { ProjectContainer } from 'layouts/Project';
// import dynamic from 'next/dynamic';
// import { media } from 'utils/style';
import { Fragment, useMemo } from 'react';
import { Link } from 'components/Link';
import Head from 'next/head';
import beforeAfter from 'assets/template/slice-annotation.png';
import schedulesPage from 'assets/template/Schedules1.png';
import activeFinder from 'assets/template/Join.png';
import joinUs from 'assets/template/Activity finder.png';

const title = 'YMCA of Pierce and Kitsap Counties';
const description =
  'Website migration with an extensive function overhaul to improve the user experience.';

export const Ymca = () => {
  return (
    <Fragment>
      {/* <ProjectContainer className="spr"> */}
      <Head>
        <link rel="stylesheet" href="/ymca.css" />
      </Head>
      <Meta title={title} prefix="Projects" description={description} />
      <div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="" s>
        <div className="layout-container">
          <main role="main">
            <a id="main-content" tabIndex="-1"></a>
            <div className="layout-content scroll-area">
              <div className="region region-content">
                <div data-drupal-messages-fallback="" className="hidden"></div>
                <div
                  id="block-fj-content"
                  className="block block-system block-system-main-block"
                >
                  <article
                    role="article"
                    about="/work/ymca-pierce-and-kitsap-counties"
                    className="node node--type-case-study node--promoted node--view-mode-full"
                  >
                    <div className="node__content">
                      <div
                        className="layout layout--onecol fj__advanced__layout fj-advanced"
                        id=""
                      >
                        <section>
                          <div className="content-on-top">
                            <div className="block block-block-node block-node-block">
                              <div className="clip-wrapper">
                                <div
                                  className="cover-small-header"
                                  style={{
                                    background: `linear-gradient(to bottom, rgba(42, 42, 42, 0.5) 0%, rgba(42, 42, 42, 0.5) 100% ), linear-gradient( to bottom, rgba(42, 42, 42, 0.5) 0%, rgba(42, 42, 42, 0.5) 100%), linear-gradient( to bottom, rgba(42, 42, 42, 0.5) 0%, rgba(42, 42, 42, 0.5) 100% ), url('http://localhost:3000/template/YPKC_teaser.jpg?h=da85d384&amp;itok=_7LTUoOA') no-repeat center center`,
                                    backgroundSize: 'cover',
                                  }}
                                >
                                  <div className="cover-small-content container with-bottom-clipping">
                                    <div className="row">
                                      <div className="cover-small-title col-12 with-services">
                                        <h1>
                                          <span className="field field--name-title field--type-string field--label-hidden">
                                            YMCA of Pierce and Kitsap Counties
                                          </span>
                                        </h1>
                                        <div className="subtitle">
                                          <div className="field field--name-field-case-study-subtitle field--type-string-long field--label-hidden field__item">
                                            Website migration with an extensive function
                                            overhaul to improve the user experience
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-12 services-column">
                                        <div className="services">
                                          <div className="services-title">
                                            Project Services:
                                          </div>
                                          <ul className="row">
                                            <li className="col-6">
                                              <a
                                                href="https://fivejars.com/services/development"
                                                hrefLang="en"
                                              >
                                                Development
                                              </a>
                                            </li>
                                            <li className="col-6">
                                              <a
                                                href="https://fivejars.com/services/design"
                                                hrefLang="en"
                                              >
                                                Design
                                              </a>
                                            </li>
                                            <li className="col-6">
                                              <a
                                                href="https://fivejars.com/services/strategy"
                                                hrefLang="en"
                                              >
                                                Strategy
                                              </a>
                                            </li>
                                            <li className="col-6">
                                              <a
                                                href="https://fivejars.com/services/support"
                                                hrefLang="en"
                                              >
                                                Support
                                              </a>
                                            </li>
                                            <li className="col-6">
                                              <a
                                                href="https://fivejars.com/services/integrations"
                                                hrefLang="en"
                                              >
                                                Integrations
                                              </a>
                                            </li>
                                            <li className="col-6">
                                              <a
                                                href="https://fivejars.com/services/hosting"
                                                hrefLang="en"
                                              >
                                                Hosting
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="clip-container">
                                  <svg
                                    preserveAspectRatio="none"
                                    viewBox="0 70 100 30"
                                    className="clip-svg"
                                  >
                                    <path
                                      fill="#FFFFFF"
                                      d="M0 100 V75 Q25 112.5 50 87.5 T100 87.5 V100z"
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                      <div
                        className="layout layout--onecol fj__advanced__layout fj-advanced"
                        id=""
                      >
                        <section>
                          <div className="content-on-top">
                            <div className="block block-basic block-layout-builder block-inline-blockbasic">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="block-universal--subtitle text-center">
                                      <div className="clearfix text-formatted field field--name-field-subtitle field--type-text-long field--label-hidden field__item">
                                        <p>
                                          <Link
                                            href="https://www.ymcapkc.org/"
                                            target="_blank"
                                            rel="nofollow"
                                          >
                                            YMCA of Pierce and Kitsap Counties
                                          </Link>
                                          set off to strengthen its communities and
                                          connect its people through activities and
                                          events. They create opportunities for people to
                                          thrive in an inclusive, open environment. We
                                          were hired to help them achieve this mission
                                          online – through an overhaul of their website
                                          and by integrating sophisticated, new functions.
                                        </p>
                                      </div>
                                    </div>

                                    <div className="block-universal--description">
                                      <div className="clearfix text-formatted field field--name-field-description field--type-text-long field--label-hidden field__item">
                                        <p>&nbsp;&nbsp;</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="block block-layout-builder block-inline-blockexperience-values">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="field field--name-field-prgf-ref field--type-entity-reference-revisions field--label-hidden field__items">
                                      <div className="field__item">
                                        <div className="paragraph paragraph--type--experience-value paragraph--view-mode--default">
                                          <div className="experience-value-wrapper">
                                            <h3 className="experience-value-number text-center">
                                              <div className="field field--name-field-number-string field--type-string field--label-hidden field__item">
                                                1
                                              </div>
                                            </h3>
                                            <h4 className="experience-value-title text-center">
                                              <div className="field field--name-field-title field--type-string field--label-hidden field__item">
                                                month
                                              </div>
                                            </h4>
                                            <div className="experience-value-description text-center">
                                              <div className="clearfix text-formatted field field--name-field-description field--type-text-long field--label-hidden field__item">
                                                <p>
                                                  Launched a website within&nbsp;short
                                                  timeline
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="field__item">
                                        <div className="paragraph paragraph--type--experience-value paragraph--view-mode--default">
                                          <div className="experience-value-wrapper">
                                            <h3 className="experience-value-number text-center">
                                              <div className="field field--name-field-number-string field--type-string field--label-hidden field__item">
                                                400
                                              </div>
                                            </h3>
                                            <h4 className="experience-value-title text-center">
                                              <div className="field field--name-field-title field--type-string field--label-hidden field__item">
                                                pages
                                              </div>
                                            </h4>
                                            <div className="experience-value-description text-center">
                                              <div className="clearfix text-formatted field field--name-field-description field--type-text-long field--label-hidden field__item">
                                                <p>
                                                  Simplified sitemap from over than 3,200
                                                  pages
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="block block-layout-builder block-inline-blockexperience-values">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="field field--name-field-prgf-ref field--type-entity-reference-revisions field--label-hidden field__items">
                                      <div className="field__item">
                                        <div className="paragraph paragraph--type--experience-value paragraph--view-mode--default">
                                          <div className="experience-value-wrapper">
                                            <h3 className="experience-value-number text-center">
                                              <div className="field field--name-field-number-string field--type-string field--label-hidden field__item">
                                                +10%
                                              </div>
                                            </h3>
                                            <h4 className="experience-value-title text-center">
                                              <div className="field field--name-field-title field--type-string field--label-hidden field__item">
                                                Increase in avg. session duration
                                              </div>
                                            </h4>
                                            <div className="experience-value-description text-center">
                                              <div className="clearfix text-formatted field field--name-field-description field--type-text-long field--label-hidden field__item">
                                                <p>
                                                  Improved average session duration by 10%
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="field__item">
                                        <div className="paragraph paragraph--type--experience-value paragraph--view-mode--default">
                                          <div className="experience-value-wrapper">
                                            <h3 className="experience-value-number text-center">
                                              <div className="field field--name-field-number-string field--type-string field--label-hidden field__item">
                                                -5%
                                              </div>
                                            </h3>
                                            <h4 className="experience-value-title text-center">
                                              <div className="field field--name-field-title field--type-string field--label-hidden field__item">
                                                Lowered bounce rate
                                              </div>
                                            </h4>
                                            <div className="experience-value-description text-center">
                                              <div className="clearfix text-formatted field field--name-field-description field--type-text-long field--label-hidden field__item">
                                                <p>Lowered bounce rate from 40% to 35%</p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="block block-basic block-layout-builder block-inline-blockbasic">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="block-universal--subtitle text-center"></div>

                                    <div className="block-universal--description">
                                      <div className="clearfix text-formatted field field--name-field-description field--type-text-long field--label-hidden field__item">
                                        <h2>
                                          A new user interface facilitating interaction
                                        </h2>

                                        <p>
                                          At the very beginning of this journey, Carlos
                                          Jair had been assessing the user requirements
                                          and the user journeys. With this understanding
                                          of what the client and its users expect as well
                                          as how they use the platform, we have chosen a
                                          ready-made theme of the
                                          <Link
                                            href="https://openy.org/"
                                            target="_blank"
                                            rel="nofollow"
                                          >
                                            Open Y
                                          </Link>
                                          environment and adapted it to the client’s and
                                          users’ requirements. By choosing a readily
                                          available theme, Carlos Jair was able to fulfill
                                          the budget constraint of
                                          <Link
                                            href="https://www.ymcapkc.org/"
                                            target="_blank"
                                            rel="nofollow"
                                          >
                                            YMCA of Pierce and Kitsap Counties
                                          </Link>
                                          while offering their users the most
                                          sophisticated user interface possible.
                                        </p>

                                        <div
                                          data-embed-button="embed_image"
                                          data-entity-embed-display="view_mode:media.80_with_blazy"
                                          data-entity-type="media"
                                          data-entity-uuid="3110da42-f041-4e77-a2fd-e520eb0bcf28"
                                          data-langcode="en"
                                          className="align-center embedded-entity"
                                          data-quickedit-entity-id="media/354"
                                        >
                                          <article className="media media--type-image media--view-mode-_0-with-blazy">
                                            <div
                                              className="blazy blazy--field blazy--field-media-image blazy--field-media-image--80-with-blazy field field--name-field-media-image field--type-image field--label-visually_hidden"
                                              data-blazy=""
                                              data-once="blazy"
                                            >
                                              <div className="field__label visually-hidden">
                                                Image
                                              </div>
                                              <div className="field__item">
                                                <div className="media media--blazy media--image is-b-loading">
                                                  <Image
                                                    alt="Before and after"
                                                    className="media__image media__element b-lazy"
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet={[beforeAfter, beforeAfter]}
                                                    placeholder={beforeAfter}
                                                    width="1110"
                                                    height="624"
                                                    typeof="foaf:Image"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </article>
                                        </div>
                                        <p>
                                          Earlier, the website had over 3,200 pages, and
                                          it was quite difficult to manage. We
                                          significantly simplified the structure of the
                                          website.&nbsp;Now it&nbsp;supports nine
                                          community centers, a virtual experience
                                          platform, and several offices, including the
                                          association’s office, the Center for Community
                                          Impact, child care offices, and a recent news
                                          page making content editing easier.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="block block-layout-builder block-inline-blockresults-achieved">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="field field--name-field-result field--type-string-long field--label-hidden field__items row d-flex flex-wrap justify-content-center">
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Improved user-centricity across the online
                                        presence
                                      </div>
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Customized theme implementation below maximum
                                        budget
                                      </div>
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Made mobile-friendly website
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="block block-basic block-layout-builder block-inline-blockbasic">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="block-universal--subtitle text-center"></div>

                                    <div className="block-universal--description">
                                      <div className="clearfix text-formatted field field--name-field-description field--type-text-long field--label-hidden field__item">
                                        <h2>
                                          Open Y migration with future updates in mind
                                        </h2>

                                        <p>
                                          YMCA of Pierce and Kitsap Counties has been an
                                          eager Open Y community member. However, without
                                          having done any major update to their old
                                          website, their technology environment became
                                          outdated and error-prone. We were hired to
                                          update their entire website in order to enable
                                          the running of all the necessary functionality.
                                          By updating their entire web presence, we
                                          introduced a user-centric approach to creating
                                          seamless user journeys.
                                        </p>

                                        <p>
                                          For the migration to be successful, our
                                          developers focused on three main goals:
                                        </p>

                                        <ul>
                                          <li>
                                            Create a system with which updating to future
                                            versions is timely and financially efficient
                                          </li>
                                          <li>
                                            Re-structure their website to increase the
                                            user experience
                                          </li>
                                          <li>
                                            Add modern sought-after functionalities to the
                                            website such as brand new program registration
                                            process, online membership and single sign-on
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="block block-layout-builder block-inline-blockresults-achieved">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="field field--name-field-result field--type-string-long field--label-hidden field__items row d-flex flex-wrap justify-content-center">
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Improved functionality fostering user awareness
                                      </div>
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Decreased maintenance costs
                                      </div>
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Introduced agile methods to foster future
                                        improvement by the client
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="block block-basic block-layout-builder block-inline-blockbasic">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="block-universal--subtitle text-center"></div>

                                    <div className="block-universal--description">
                                      <div className="clearfix text-formatted field field--name-field-description field--type-text-long field--label-hidden field__item">
                                        <h2>Schedules for a great number of events</h2>

                                        <p>
                                          As typical for YMCA’s, our client offers an
                                          extensive range of various events and activities
                                          such as workouts. The old website of YMCA of
                                          Pierce and Kitsap Counties used a cumbersome
                                          list of events and places where these events
                                          take place. The developers recognized the
                                          tremendous impact a sophisticated
                                          <Link
                                            href="https://www.ymcapkc.org/schedules"
                                            target="_blank"
                                            rel="nofollow"
                                          >
                                            scheduling page
                                          </Link>
                                          with the necessary functionality will have on
                                          the community – and our client. Therefore, our
                                          developers created a modern and intuitive page
                                          providing a simple overview over all upcoming
                                          events. We even went a step further and
                                          implemented a filtering functionality to
                                          simplify the way users search and find their
                                          desired content.
                                        </p>

                                        <div
                                          data-embed-button="embed_image"
                                          data-entity-embed-display="view_mode:media.80_with_blazy"
                                          data-entity-type="media"
                                          data-entity-uuid="704e9c54-7063-4cfc-9d45-7c0c49e3b208"
                                          data-langcode="en"
                                          className="align-center embedded-entity"
                                          data-quickedit-entity-id="media/355"
                                        >
                                          <article className="media media--type-image media--view-mode-_0-with-blazy">
                                            <div
                                              className="blazy blazy--field blazy--field-media-image blazy--field-media-image--80-with-blazy field field--name-field-media-image field--type-image field--label-visually_hidden"
                                              data-blazy=""
                                              data-once="blazy"
                                            >
                                              <div className="field__label visually-hidden">
                                                Image
                                              </div>
                                              <div className="field__item">
                                                <div className="media media--blazy media--image is-b-loading">
                                                  <Image
                                                    alt="Scheduling page"
                                                    className="media__image media__element b-lazy"
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet={[
                                                      schedulesPage,
                                                      schedulesPage,
                                                    ]}
                                                    placeholder={schedulesPage}
                                                    width="1110"
                                                    height="624"
                                                    typeof="foaf:Image"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </article>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="block block-layout-builder block-inline-blockresults-achieved">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="field field--name-field-result field--type-string-long field--label-hidden field__items row d-flex flex-wrap justify-content-center">
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Simplified the organization of events leading to
                                        increased registrations
                                      </div>
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Decreased time required to add new events through
                                        intuitive backend
                                      </div>
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Simplified the schedules search journey
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="block block-basic block-layout-builder block-inline-blockbasic">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="block-universal--subtitle text-center"></div>

                                    <div className="block-universal--description">
                                      <div className="clearfix text-formatted field field--name-field-description field--type-text-long field--label-hidden field__item">
                                        <h2>A website for the community</h2>

                                        <p>
                                          Consisting of many branches and locations, YMCA
                                          of Pierce and Kitsap Counties offers varying
                                          content depending on a user’s location. Our
                                          developers were asked to enable users to find
                                          relevant content based on their location. Carlos
                                          Jair recognized that, while a certain part of
                                          content will vary from location to location,
                                          most of the content will be identical. We solved
                                          this challenge by developing specific filters
                                          and
                                          <Link
                                            href="https://www.ymcapkc.org/locations"
                                            target="_blank"
                                            rel="nofollow"
                                          >
                                            location pages
                                          </Link>
                                          where each and every user can choose their
                                          preferred location to see specific information
                                          such as opening hours of the community center
                                          and more. This approach keeps the website of
                                          YMCA of Pierce and Kitsap Counties efficient and
                                          structured.&nbsp;When we had started with this
                                          migration project, we already knew that the YMCA
                                          of Pierce and Kitsap Counties will require a
                                          single sign-on solution to satisfy its members.
                                          To create a seamless solution, we have
                                          integrated
                                          <Link
                                            href="https://www.tractionrec.com/"
                                            rel="nofollow"
                                            target="_blank"
                                          >
                                            TractionRec
                                          </Link>
                                          into their environment. By integrating
                                          <Link
                                            href="https://www.tractionrec.com/"
                                            rel="nofollow"
                                            target="_blank"
                                          >
                                            TractionRec
                                          </Link>
                                          , we not only harnessed the power of
                                          <Link
                                            href="https://www.salesforce.com/"
                                            target="_blank"
                                            rel="nofollow"
                                          >
                                            Salesforce
                                          </Link>
                                          &nbsp;Single Sign-On, upon which TractionRec
                                          depends for its proper functioning but also made
                                          the personal account easily accessible from any
                                          website page.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="block block-layout-builder block-inline-blockresults-achieved">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="field field--name-field-result field--type-string-long field--label-hidden field__items row d-flex flex-wrap justify-content-center">
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Coherent presence across the organization
                                      </div>
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Increased user engagement by mapping user journeys
                                      </div>
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Improved accessibility of localized information
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="block block-basic block-layout-builder block-inline-blockbasic">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="block-universal--subtitle text-center"></div>

                                    <div className="block-universal--description">
                                      <div className="clearfix text-formatted field field--name-field-description field--type-text-long field--label-hidden field__item">
                                        <h2>Program registrations made easy</h2>

                                        <p>
                                          We’ve mentioned it already – there are many
                                          great events and courses taking place. Carlos
                                          Jair was working hard on&nbsp;
                                          <Link
                                            href="https://www.ymcapkc.org/activity-finder"
                                            target="_blank"
                                            rel="nofollow"
                                          >
                                            simplifying the search process
                                          </Link>
                                          through which a user finds the most suitable
                                          workout or event. Our solution: The Activity
                                          Finder.
                                        </p>

                                        <div
                                          data-embed-button="embed_image"
                                          data-entity-embed-display="view_mode:media.80_with_blazy"
                                          data-entity-type="media"
                                          data-entity-uuid="65c2d193-f3d5-4762-a623-6e78fc46074e"
                                          data-langcode="en"
                                          className="align-center embedded-entity"
                                          data-quickedit-entity-id="media/356"
                                        >
                                          <article className="media media--type-image media--view-mode-_0-with-blazy">
                                            <div
                                              className="blazy blazy--field blazy--field-media-image blazy--field-media-image--80-with-blazy field field--name-field-media-image field--type-image field--label-visually_hidden"
                                              data-blazy=""
                                              data-once="blazy"
                                            >
                                              <div className="field__label visually-hidden">
                                                Image
                                              </div>
                                              <div className="field__item">
                                                <div className="media media--blazy media--image is-b-loading">
                                                  <Image
                                                    alt="Activity finder"
                                                    className="media__image media__element b-lazy"
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet={[joinUs, joinUs]}
                                                    placeholder={joinUs}
                                                    width="1110"
                                                    height="624"
                                                    typeof="foaf:Image"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </article>
                                        </div>
                                        <p>
                                          Integrated into the website, we’ve created a
                                          tool that enables users to indicate their age,
                                          day and time, location, and what kind of
                                          activity they like. Our Activity Finder will
                                          then return the most suitable activities
                                          fulfilling their personal constraints. Moreover,
                                          the activity finder not only helps users to
                                          discover relevant events but also simplifies the
                                          registration process through a
                                          couple-clicks&nbsp;registration!
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="block block-layout-builder block-inline-blockresults-achieved">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="field field--name-field-result field--type-string-long field--label-hidden field__items row d-flex flex-wrap justify-content-center">
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Custom software fostering user engagement
                                      </div>
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Reduced the required support of the client to
                                        guide user through the process
                                      </div>
                                      <div className="field__item text-center col-12 col-md-6 col-lg-4">
                                        Made Program Registration process accessible on
                                        mobile
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="block block-basic block-layout-builder block-inline-blockbasic">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="block-universal--subtitle text-center"></div>

                                    <div className="block-universal--description">
                                      <div className="clearfix text-formatted field field--name-field-description field--type-text-long field--label-hidden field__item">
                                        <h2>Migration for the future</h2>

                                        <p>
                                          Carlos Jair migrated and overhauled an existing
                                          website to harness the power of sophisticated
                                          functionalities such as single sign-on and data
                                          analytics. One of the overarching goals,
                                          however, was to foster efficient updating in the
                                          future. As our client is a community-focused
                                          non-profit organization, a cost-efficient
                                          updating process is a must. Therefore, our
                                          developers created synergies wherever possible
                                          and created an intuitive user interface as well
                                          as a backend to simplify all processes. In
                                          addition to that, we migrated the entire content
                                          onto the new website and demonstrated the data
                                          analytics capabilities to our client.
                                        </p>

                                        <div
                                          data-embed-button="embed_image"
                                          data-entity-embed-display="view_mode:media.80_with_blazy"
                                          data-entity-type="media"
                                          data-entity-uuid="7e6a22bf-05c7-4919-b23c-155239db702d"
                                          data-langcode="en"
                                          className="align-center embedded-entity"
                                          data-quickedit-entity-id="media/357"
                                        >
                                          <article className="media media--type-image media--view-mode-_0-with-blazy">
                                            <div
                                              className="blazy blazy--field blazy--field-media-image blazy--field-media-image--80-with-blazy field field--name-field-media-image field--type-image field--label-visually_hidden"
                                              data-blazy=""
                                              data-once="blazy"
                                            >
                                              <div className="field__label visually-hidden">
                                                Image
                                              </div>
                                              <div className="field__item">
                                                <div className="media media--blazy media--image is-b-loading">
                                                  <Image
                                                    alt="Join page"
                                                    className="media__image media__element b-lazy"
                                                    decoding="async"
                                                    loading="lazy"
                                                    srcSet={[activeFinder, activeFinder]}
                                                    placeholder={activeFinder}
                                                    width="1110"
                                                    height="624"
                                                    typeof="foaf:Image"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </article>
                                        </div>
                                        <h2>Deadline: One month</h2>

                                        <p>
                                          Such a project usually requires several months
                                          until completion. However, due to unique
                                          circumstances, YMCA of Pierce and Kitsap
                                          Counties required the new website to be live
                                          within four weeks at the latest. Our developer
                                          went above and beyond everything to ensure our
                                          client the timely completion of their new web
                                          presence.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="block block-basic block-layout-builder block-inline-blockbasic">
                              <div className="container">
                                <div className="row">
                                  <div className="col-12">
                                    <div className="block-universal--subtitle text-center"></div>

                                    <div className="block-universal--description">
                                      <div className="clearfix text-formatted field field--name-field-description field--type-text-long field--label-hidden field__item">
                                        <h2>
                                          Long-term collaboration and further improvements
                                        </h2>

                                        <p>
                                          <Link
                                            href="https://www.ymcapkc.org/"
                                            target="_blank"
                                            rel="nofollow"
                                          >
                                            YMCA of Pierce and Kitsap Counties
                                          </Link>
                                          has been entirely satisfied with our transparent
                                          approach and trustworthiness. They have been
                                          praising their final website on several
                                          occasions, namely a monthly web streaming event
                                          available here on
                                          <Link
                                            href="https://youtu.be/oyfyNFBE88k?t=305"
                                            target="_blank"
                                            rel="nofollow"
                                          >
                                            YouTube
                                          </Link>
                                          as well as on
                                          <Link
                                            href="https://clutch.co/profile/five-jars?page=1#review-1748685"
                                            target="_blank"
                                            rel="nofollow"
                                          >
                                            Clutch.co
                                          </Link>
                                          .
                                        </p>

                                        <p>
                                          Eventually, our collaboration resulted in a
                                          long-term collaboration. By living up to the
                                          user-centricity and client-centricity, we put
                                          unique requirements at the center point of the
                                          project.
                                        </p>

                                        <blockquote>
                                          <p>
                                            This is truly a driver of
                                            success.&nbsp;Communication is important for
                                            any organization embarking on a project like
                                            this, and This team is an incredible
                                            communicator. On top of that, their project
                                            management chops are some of the best ones
                                            I’ve ever experienced. Their support services
                                            are impressive; if there’s ever an issue, they
                                            deliver 24/7 support. Whether it’s an issue on
                                            the website or a hosting concern, they support
                                            us in every way, shape, or form.&nbsp;They’re
                                            absolutely outstanding.
                                          </p>
                                        </blockquote>

                                        <p className="text-align-right">
                                          <strong>
                                            ©&nbsp;Kimberly Schulz, Senior Digital
                                            Experience Director, YMCA of Pierce &amp;
                                            Kitsap Counties
                                          </strong>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="section-separator separator__5"
                              // style={{
                              //   backgroundImage:
                              //     'url(&#39;https://fivejars.com/sites/default/files/2019-04/bottom-revers.png&#39;)',
                              // }}
                            ></div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* </ProjectContainer> */}
      <Footer />
    </Fragment>
  );
};
