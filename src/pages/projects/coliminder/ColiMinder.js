import React, { Fragment } from 'react';
import Head from 'next/head';
import { Image } from 'components/Image';
import LogoColiminder from 'assets/template/logo-coliminder.png';
import device from 'assets/template/devices.png';
import geolocation from 'assets/template/geolocation.png';
import deviceManagement from 'assets/template/device-management.png';
import dataProcessing from 'assets/template/data-processing.png';
import accessControlSystem from 'assets/template/access-control-system.png';
import notificationCenter from 'assets/template/notification-center.png';
import helpCenter from 'assets/template/help-center.png';
import pauline from 'assets/template/pauline-brooks.png';
import ruan from 'assets/template/ruan-groenewald.png';
import jozef from 'assets/template/jozef-bacigal.png';

export const ColiMinder = () => {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/coliminder.css" />
        <link rel="stylesheet" href="/coliminder.client.css" />
      </Head>
      <div
        id="coliminder"
        className="cases-template-default single single-cases postid-1236 single-format-standard chrome loaded"
      >
        <div id="wrapper" className="wrapper">
          <main id="main-wrapper">
            <div className="top-box js-show-report-popup">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <h2 data-ghost="Portfolio" className="with-ghost with-ghost-black h1">
                      <span>Coil Minder</span>
                    </h2>
                    <figure className="wrap-project-icon">
                      <noscript>
                        <Image
                          srcSet={[LogoColiminder, LogoColiminder]}
                          placeholder={LogoColiminder}
                          className=""
                          alt="thumb"
                        />
                      </noscript>
                      <Image
                        srcSet={[LogoColiminder, LogoColiminder]}
                        placeholder={LogoColiminder}
                        // src="/template/logo-coliminder.png"
                        // data-src="/template/logo-coliminder.png"
                        className="lazyloaded"
                        alt="thumb"
                      />
                    </figure>
                    <div className="project-description">
                      ColiMinder is an IoT solution for water quality monitoring and
                      reflecting probing results in real-time.
                    </div>
                    <div className="related-pages">
                      <button className="btn-rectangular" style={{ marginY: 0 }}>
                        IoT
                      </button>
                      <button className="btn-rectangular" style={{ marginY: 0 }}>
                        Managed delivery
                      </button>
                    </div>
                    <div className="project-duration">
                      <p className="duration-label">Project duration:</p>
                      <p className="duration">March 2019 - September 2019</p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-6 wrap-img">
                    <figure className="wrap-project-graphics">
                      <noscript>
                        <Image
                          srcSet={[device, device]}
                          placeholder={device}
                          alt="Case study image"
                        />
                      </noscript>
                      <Image
                        srcSet={[device, device]}
                        placeholder={device}
                        className="lazyloaded"
                        alt="Case study image"
                      />
                    </figure>
                    <a
                      className="btn btn-primary bottom-btn"
                      href="https://limestonedigital.com/start-project"
                    >
                      Start project
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-box">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-4 case-box-caption-wrapper">
                    <span className="counter">01</span>
                    <h2 className="h2">Overview</h2>
                  </div>
                  <div className="col-xs-12 col-md-8">
                    <div className="project-content">
                      Vienna Water Monitoring needed radical improvements to their
                      microbiological water quality monitoring system called ColiMinder.
                      Because of the system’s complexity, most of the devices had been
                      previously maintained by the client’s support team. The amount of
                      collected data was so great that our client had to keep an entire
                      R&amp;D team to be able to manually process those data. And because
                      of that, the bandwidth was somewhat limited and Coliminder couldn't
                      obtain real-time results of data probing. We were hired to create a
                      web application that would turn ColiMinder’s hardware into a
                      market-ready product and help the support team to maintain the
                      system.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-details-box">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="details-info">
                      <div className="item">
                        <figure>
                          <noscript>
                            <img src="/template/clock.svg" alt="Hours" />
                          </noscript>
                          <img
                            className="lazyloaded"
                            src="/template/clock.svg"
                            data-src="/template/clock.svg"
                            alt="Hours"
                          />
                        </figure>
                        <p className="explanation">Hours</p>
                        <span>1800+</span>
                      </div>
                      <div className="item-divider"></div>
                      <div className="item">
                        <figure>
                          <noscript>
                            <img src="/template/developer.svg" alt="Developers" />
                          </noscript>
                          <img
                            className="lazyloaded"
                            src="/template/developer.svg"
                            data-src="/template/developer.svg"
                            alt="Developers"
                          />
                        </figure>
                        <p className="explanation">Developers</p>
                        <span>3</span>
                      </div>
                      <div className="item-divider"></div>
                      <div className="item">
                        <figure>
                          <noscript>
                            <img src="/template/calendar.svg" alt="Months" />
                          </noscript>
                          <img
                            className="lazyloaded"
                            src="/template/calendar.svg"
                            data-src="/template/calendar.svg"
                            alt="Months"
                          />
                        </figure>
                        <p className="explanation">Months</p>
                        <span>7</span>
                      </div>
                      <div className="item-divider"></div>
                      <div className="item item-tech">
                        <p className="explanation">
                          Technology <br />
                          used:
                        </p>
                        <div className="tech">
                          Java
                          <br />
                          MongoDB
                          <br />
                          AngularJS +<br />
                          HTML/CSS
                          <br />
                          Docker
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="challenge-box">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-4 case-box-caption-wrapper">
                    <span className="counter">02</span>
                    <h2 className="h2">Challenge</h2>
                  </div>
                  <div className="col-xs-12 col-md-8">
                    <div className="project-content">
                      When we were starting the project, our development team faced
                      several issues:
                      <div className="case-info-box image-text">
                        <div className="info_box_inner">
                          <noscript>
                            <img src="/template/big-data.svg" alt="icon" />
                          </noscript>
                          <img
                            className="lazyloaded"
                            src="/template/big-data.svg"
                            data-src="/template/big-data.svg"
                            alt="icon"
                          />
                          <p className="">
                            big batches of raw data – the system collects data on more
                            than 40 water-specific parameters and each has its own
                            variations. Altogether, it creates a vast data layer that
                            updates every 10 seconds;
                          </p>
                        </div>
                        <div className="info_box_inner">
                          <noscript>
                            <img src="/template/telemetry-system.svg" alt="icon" />
                          </noscript>
                          <img
                            className="lazyloaded"
                            src="/template/telemetry-system.svg"
                            data-src="/template/telemetry-system.svg"
                            alt="icon"
                          />
                          <p className="">
                            complex telemetry system – ColiMinder also has a telemetry
                            system, the information from which has been provided by the
                            middleware in a form of machine codes that only the client's
                            R&amp;D team could understand.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="solution-box" style={{ backgroundColor: '#f5f4f6' }}>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-4 case-box-caption-wrapper">
                    <span className="counter">03</span>
                    <h2 className="h2">Solution</h2>
                  </div>
                  <div className="col-xs-12 col-md-8">
                    <div className="project-content">
                      Considering the importance of the collected data and the lack of
                      tech capabilities of the existing ColiMinder system, our team
                      defined weak spots and developed the range of significant
                      improvements for smooth platform operation. The client’s hardware
                      had 5 different work phases but the interface maintained only one,
                      so we added 4 more work phases with background processing of raw
                      data. We also added statistics about the overall system performance.
                      Moreover, our specialists designed a device management area for easy
                      modifying of microbial samples every connected device collects.
                      Thus, our client got the solution that collects and processes live
                      data from up to 100 devices.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="development-box">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h2 className="h2">System architecture</h2>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <figure>
                      <noscript>
                        <img src="/template/system-architecture.svg" alt="thumb" />
                      </noscript>
                      <img
                        className="ls-is-cached lazyloaded"
                        src="/template/system-architecture.svg"
                        data-src="/template/system-architecture.svg"
                        alt="thumb"
                      />
                    </figure>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <p className="caption h3">Comprehensive scalable platform</p>
                    <div className="description">
                      Due to the system complexity, its architecture is built in a way to
                      ensure maximum platform scalability. The robust back-end accurately
                      processes information from a centralized database into comprehensive
                      analytics and sends this data to the interface in the form of charts
                      and reports. The algorithm of interactions between all of the
                      architecture components allows collecting and operating live data
                      and providing users with necessary crucial information in real-time.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="features-box">
              <div className="feature-box">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12">
                      <h2 className="h2">Platform features</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-box short-bottom-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-md-7">
                      <figure>
                        <noscript>
                          <Image
                            srcSet={[geolocation, geolocation]}
                            placeholder={geolocation}
                            alt="thumb"
                          />
                        </noscript>
                        <Image
                          srcSet={[geolocation, geolocation]}
                          placeholder={geolocation}
                          alt="thumb"
                        />
                      </figure>
                    </div>
                    <div className="col-xs-12 col-md-5 text-column">
                      <p className="caption h3">Geolocation</p>
                      <div className="description">
                        <p>
                          Usually, there are about 20 devices under admin control and it’s
                          hard to keep in mind the exact location of each. That’s why we
                          dedicated a separate tab for an interactive map which helps a
                          support team to locate a problem or water contamination source
                          and quickly fix it. The map shows all devices under control.
                          Color markers indicate a device’s status in real-time. Upon
                          clicking the marker, the admin gets full details about the
                          issue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-box short-bottom-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-md-5 text-column feature-order-2">
                      <p className="caption h3">Device management</p>
                      <div className="description">
                        <p>
                          From this panel, admins can connect new devices to the app, add
                          reagents that are used by ColiMinder, and grant access to
                          specific users.
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-7">
                      <figure>
                        <noscript>
                          <Image
                            srcSet={[deviceManagement, deviceManagement]}
                            placeholder={deviceManagement}
                            alt="thumb"
                          />
                        </noscript>
                        <Image
                          srcSet={[deviceManagement, deviceManagement]}
                          placeholder={deviceManagement}
                          alt="thumb"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-box">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-md-7">
                      <figure>
                        <noscript>
                          <Image
                            srcSet={[dataProcessing, dataProcessing]}
                            placeholder={dataProcessing}
                            alt="thumb"
                          />
                        </noscript>
                        <Image
                          srcSet={[dataProcessing, dataProcessing]}
                          placeholder={dataProcessing}
                          alt="thumb"
                          className="ls-is-cached lazyloaded"
                        />
                      </figure>
                    </div>
                    <div className="col-xs-12 col-md-5 text-column">
                      <p className="caption h3">Data processing &amp; analytics</p>
                      <div className="description">
                        <p>
                          Some of the devices are located in remote, hardly accessible
                          areas — for example, Great Lakes in Canada or closed industrial
                          facilities. The web app serves as a remote interface and robust
                          back-end processes metrics from a centralized database into
                          comprehensive analytics.
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 additional-description">
                      <p className="">
                        So the system supplies users with water data they need:
                      </p>
                      <div className="additional-description-boxes">
                        <div className="info_box_inner">
                          <figure>
                            <noscript>
                              <img
                                style={{ minWidth: '50px' }}
                                src="/template/comprehensive-analytics.svg"
                                alt="icon"
                              />
                            </noscript>
                            <img
                              className="ls-is-cached lazyloaded"
                              style={{ minWidth: '50px' }}
                              src="/template/comprehensive-analytics.svg"
                              data-src="/template/comprehensive-analytics.svg"
                              alt="icon"
                            />
                          </figure>
                          <div className="">
                            Comprehensive analytics – the app analyzes more than 40
                            parameters and measurements for each ColiMinder’s work phase.
                          </div>
                        </div>
                        <div className="info_box_inner">
                          <figure>
                            <noscript>
                              <img
                                style={{ minWidth: '50px' }}
                                src="/template/real-time-data.svg"
                                alt="icon"
                              />
                            </noscript>
                            <img
                              className="ls-is-cached lazyloaded"
                              style={{ minWidth: '50px' }}
                              src="/template/real-time-data.svg"
                              data-src="/template/real-time-data.svg"
                              alt="icon"
                            />
                          </figure>
                          <div className="">
                            Real-time data visualization – all charts are created in live
                            mode, which allows users to monitor water conditions and make
                            informed decisions in real-time.
                          </div>
                        </div>
                        <div className="info_box_inner">
                          <figure>
                            <noscript>
                              <img
                                style={{ minWidth: '50px' }}
                                src="/template/pre-set-filters.svg"
                                alt="icon"
                              />
                            </noscript>
                            <img
                              className="ls-is-cached lazyloaded"
                              style={{ minWidth: '50px' }}
                              src="/template/pre-set-filters.svg"
                              data-src="/template/pre-set-filters.svg"
                              alt="icon"
                            />
                          </figure>
                          <div className="">
                            Pre-set filters – we’ve created 10 pre-set data filters that
                            speed up onboarding of new customers. Although ColiMinder
                            users can build their own view filters if needed.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-box short-bottom-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-md-5 text-column feature-order-2">
                      <p className="caption h3">A role-based access control system</p>
                      <div className="description">
                        <p>
                          We have integrated a role-based access control (RBAC) system
                          that allows ColiMinder owner to manage user privileges within an
                          app.
                        </p>
                        <p>
                          Owners have full control over which data to share and what
                          privileges to grant. By default, there are 5 user roles (Owner,
                          Admin, Manager, User, Guest) in the web app. But there is also
                          an option to create custom user roles if needed.
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-7">
                      <figure>
                        <noscript>
                          <Image
                            srcSet={[accessControlSystem, accessControlSystem]}
                            placeholder={accessControlSystem}
                            alt="thumb"
                          />
                        </noscript>
                        <Image
                          srcSet={[accessControlSystem, accessControlSystem]}
                          placeholder={accessControlSystem}
                          alt="thumb"
                          className="ls-is-cached lazyloaded"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-box short-bottom-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-md-7">
                      <figure>
                        <noscript>
                          <Image
                            srcSet={[notificationCenter, notificationCenter]}
                            placeholder={notificationCenter}
                            alt="thumb"
                          />
                        </noscript>
                        <Image
                          srcSet={[notificationCenter, notificationCenter]}
                          placeholder={notificationCenter}
                          alt="thumb"
                          className="ls-is-cached lazyloaded"
                        />
                      </figure>
                    </div>
                    <div className="col-xs-12 col-md-5 text-column">
                      <p className="caption h3">Notification Center</p>
                      <div className="description">
                        <p>
                          This part of the software was specifically developed to
                          communicate with ColiMinder’s telemetry system. The module
                          transcribes errors and warnings from the machine, then it
                          categorizes errors by levels of importance, and automatically
                          notifies a support team responsible for that kind of issue.
                        </p>
                        <p>
                          Notification Center is fully integrated with RBAC system.
                          Notification can be sent to the specific user group depending on
                          their access level.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature-box short-bottom-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-md-5 text-column feature-order-2">
                      <p className="caption h3">Help center</p>
                      <div className="description">
                        <p>
                          Due to the system’s complexity, it was required to add a
                          dedicated tab where all educational material would be stored.
                          The application supports various types of data so that
                          educational materials of different formats, including images,
                          pdf-manuals, and video content can be added.
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-7">
                      <figure>
                        <noscript>
                          <Image
                            srcSet={[helpCenter, helpCenter]}
                            placeholder={helpCenter}
                            alt="thumb"
                          />
                        </noscript>
                        <Image
                          srcSet={[helpCenter, helpCenter]}
                          placeholder={helpCenter}
                          alt="thumb"
                          className="ls-is-cached lazyloaded"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="results-box">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-md-4 case-box-caption-wrapper">
                    <span className="counter">04</span>
                    <h2 className="h2">Results</h2>
                  </div>
                  <div className="col-xs-12 col-md-8">
                    <div className="project-content">
                      Our development team successfully delivered the ColiMinder web
                      platform, and it was gradually integrated into the existing network.
                      As a result, the massive part of all the processes was automated,
                      and the amount of manual work was so significantly decreased that it
                      made our client consider launching this IoT solution to the market
                      which they successfully did.
                      <div className="case-info-box image-text">
                        <div className="info_box_inner info_box_inner-centred">
                          <noscript>
                            <img src="/template/numbers.svg" alt="icon" />
                          </noscript>
                          <img
                            className="ls-is-cached lazyloaded"
                            src="/template/numbers.svg"
                            data-src="/template/numbers.svg"
                            alt="icon"
                          />
                          <p className="">
                            285K number of measurement released with the ColiMinder
                            system.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials-box">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <h2 className="h2">
                      What clients say <strong>about us</strong>
                    </h2>
                    <div className="testimonials-holder js-testimonials-holder slick-initialized slick-slider">
                      <div className="slick-list draggable">
                        <div
                          className="slick-track"
                          style={{
                            opacity: 1,
                            width: '1344px',
                            transform: 'translate3d(0px, 0px, 0px)',
                          }}
                        >
                          <div
                            className="slick-slide slick-current slick-active"
                            data-slick-index="0"
                            aria-hidden="false"
                            style={{ width: '448px' }}
                          >
                            <div>
                              <div
                                className="item-wrapper"
                                style={{ width: '100%', display: 'inline-block' }}
                              >
                                <div className="item">
                                  <div className="content">
                                    “They understand exactly what I ask of them, but
                                    they're also available to hop on the phone call when
                                    needed. If they know of a better way to do things,
                                    they'll always make suggestions, which we find
                                    invaluable.”
                                  </div>
                                  <div className="meta">
                                    <figure>
                                      <noscript>
                                        <Image
                                          srcSet={[pauline, pauline]}
                                          placeholder={pauline}
                                          alt="photo"
                                        />
                                      </noscript>
                                      <Image
                                        srcSet={[pauline, pauline]}
                                        placeholder={pauline}
                                        alt="photo"
                                        className="ls-is-cached lazyloaded"
                                      />
                                    </figure>
                                    <div className="info">
                                      <p className="caption">PAULINE BROOKS</p>
                                      <p className="position">
                                        Director of operations, Toco Warranty
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="slick-slide slick-active"
                            data-slick-index="1"
                            aria-hidden="false"
                            style={{ width: '448px' }}
                          >
                            <div>
                              <div
                                className="item-wrapper"
                                style={{ width: '100%', display: 'inline-block' }}
                              >
                                <div className="item">
                                  <div className="content">
                                    “Their commitment to the success of the project. They
                                    are enthusiastic and focused on adhering to coding
                                    best practices. Mark has a hands-on approach to ensure
                                    his staff are contributing to client expectation, and
                                    open to hearing about possible improvements.”
                                  </div>
                                  <div className="meta">
                                    <figure>
                                      <noscript>
                                        <Image
                                          srcSet={[ruan, ruan]}
                                          placeholder={ruan}
                                          alt="photo"
                                        />
                                      </noscript>
                                      <Image
                                        srcSet={[ruan, ruan]}
                                        placeholder={ruan}
                                        alt="photo"
                                        className="ls-is-cached lazyloaded"
                                      />
                                    </figure>
                                    <div className="info">
                                      <p className="caption">RUAN GROENEWALD</p>
                                      <p className="position">
                                        Development Manager, Chase Software
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="slick-slide slick-active"
                            data-slick-index="2"
                            aria-hidden="false"
                            style={{ width: '448px' }}
                          >
                            <div>
                              <div
                                className="item-wrapper"
                                style={{ width: '100%', display: 'inline-block' }}
                              >
                                <div className="item">
                                  <div className="content">
                                    “The project was completed in an almost impossible
                                    deadline, helping the client to successfully complete
                                    the contract. The developers were flexible and
                                    communicative throughout the process, staying on top
                                    of all milestones and objectives.”
                                  </div>
                                  <div className="meta">
                                    <figure>
                                      <noscript>
                                        <Image
                                          srcSet={[jozef, jozef]}
                                          placeholder={jozef}
                                          alt="photo"
                                        />
                                      </noscript>
                                      <Image
                                        srcSet={[jozef, jozef]}
                                        placeholder={jozef}
                                        alt="photo"
                                        className="ls-is-cached lazyloaded"
                                      />
                                    </figure>
                                    <div className="info">
                                      <p className="caption">JOZEF BACIGÁL</p>
                                      <p className="position">Scrum master, Gamo</p>
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
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* </ProjectContainer> */}
    </Fragment>
  );
};
