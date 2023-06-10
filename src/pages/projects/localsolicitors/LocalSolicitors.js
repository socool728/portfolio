import Head from 'next/head';
import React, { Fragment } from 'react';
import logo from 'assets/template/1625220598-6-LocalSolicitors-icon.png';
import logoDemo from 'assets/template/1625630526-Local Solicitor.png';
import desktop from 'assets/template/1626933009-locallocal (1).png';
import slide1 from 'assets/template/1627634754-1W.png';
import slide2 from 'assets/template/1627634754-2W.png';
import slide3 from 'assets/template/1627634754-3W.png';
import slide4 from 'assets/template/1627634754-4W.png';
import slide5 from 'assets/template/1627634754-5W.png';
import { Image } from 'components/Image';

export const LocalSolicitors = () => {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="/localsolicitor.css" />
      </Head>
      <div
        className="modal fade"
        id="videomodel"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {/* <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button className="btn btn-secondary" data-dismiss="modal">
                X
              </button>
              <div id="video-popup-overlay"></div>
              <div id="video-popup-close" className="fade" data-btn="right">
                ✖
              </div>
              <iframe
                id="video-popup-iframe"
                src="./Local Solicitors Build By This team Web_files/saved_resource.html"
                width="100%"
                height="450px"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div> */}
      </div>

      <div className="main-section">
        <div
          className="modal fade videoPlayerModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="ParticipantsUserVideo"></div>
            </div>
          </div>
        </div>
        <main id="main">
          <section className="Padding-custom pt-90 custom-work" data-aos="fade-up">
            <div className="breadcrumbHero">
              <div className="container-fluid container-xl">
                <div className="row">
                  <div className="col-xs-12 col-sm-8 col-md-8">
                    <div
                      className="section-title detailsPage text-left"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <div className="projectTitle">
                        <Image
                          srcSet={[logo, logo]}
                          placeholder={logo}
                          alt="Local Solicitors"
                          title="Local Solicitors"
                        />
                        <h2>Local Solicitors</h2>
                      </div>
                      <p className="heroSubText">
                        LocalSolicitors is a free marketing platform for solicitors to
                        showcase their firm and engage with prospective clients. Creating
                        your online profile is completely free and takes less than 2
                        minutes. Once you have signed up, you can immediately take
                        advantage of our fantastic features, which can help establish your
                        brand and generate more leads and clients for your firm.
                      </p>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          width: 100,
                        }}
                      >
                        <small> Landing Page &nbsp;|&nbsp;</small>
                        <small> Web App &nbsp;|&nbsp;</small>
                        <small> API Dev &nbsp;|&nbsp;</small>
                        <small> Admin Panel</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="TechnologysDivHero">
                      <ul>
                        <li className="titleTechnologys">Technologies:</li>
                        <li>Sails JS</li>
                        <li>Next JS</li>
                        <li>ReactJS</li>
                        <li>Node JS</li>
                        <li>MySQL</li>
                        <li>Firebase</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom pt-50" data-aos="fade-up">
            <div className="container-fluid container-xl">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="projectImgDiv">
                  <Image
                    srcSet={[desktop, desktop]}
                    placeholder={desktop}
                    alt="Local Solicitors"
                    title="Local Solicitors"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom pt-50" data-aos="fade-up">
            <div className="container-fluid container-xl">
              <div className="BackgroundMain">
                <div className="section-title" data-aos="fade-up" data-aos-delay="200">
                  <h2 className="mb-40">Background</h2>
                  <p className="projectDetails">
                    LocalSolicitor is a Solicitor directory offering vast features. It's a
                    modern website with smooth user experience. Initially the client
                    choose another company and rejected our proposal, but the other
                    company failed to make any progress in a time of 2 months. The client
                    realised that with the speed of Turtle the project will not be success
                    and came back to us. The project took almost 6 months to complete the
                    development and 10 months to go live.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom pt-50" data-aos="fade-up">
            <div className="projectDuration">
              <div className="container-fluid container-xl">
                <div className="DurationMain">
                  <div className="DurationBox">
                    <i className="icon-tower-bridge"></i>
                    <div className="DurationTitle">
                      <small>Country</small>
                      <h3>GB</h3>
                    </div>
                  </div>
                  <div className="DurationBox">
                    <i className="icon-time-management"></i>
                    <div className="DurationTitle">
                      <small>Duration</small>
                      <h3>561 Days</h3>
                    </div>
                  </div>
                  <div className="DurationBox">
                    <i className="icon-office-building"></i>
                    <div className="DurationTitle">
                      <small>Industry</small>
                      <h3>Legal</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom pt-50" data-aos="fade-up">
            <div className="container-fluid container-xl">
              <div className="ChallengeMain">
                <div className="section-title" data-aos="fade-up" data-aos-delay="200">
                  <h2 className="mb-40">Challenge</h2>
                  <p className="projectDetails">
                    Migration of an existing platform holding huge database is a
                    challenge, but with that the client was very punctual and wanted
                    everything perfect, Client took months to self test the platform and
                    made sure the platform will give the experience that he envisioned.
                    This team successfully delivered the project and worked until 100% of
                    the client's satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom pt-50" data-aos="fade-up">
            <div className="section-title" data-aos="fade-up">
              <small>Core Features</small>
              <h2>Enhancing App Experience</h2>
            </div>
            <div className="EnhancingBg">
              <div className="container-fluid container-xl">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="EnhancingDetails mb-50">
                        <div className="Enhancingtitle">
                          <div className="logoTec">
                            <div className="logoTecIcons">
                              <i className="icon-Solicitor-Profile"></i>
                            </div>
                          </div>
                          <h3>Solicitor Profile</h3>
                        </div>
                        <p>
                          It all starts here by claiming your free online profile. You can
                          build your profile page to showcase your skills, knowledge and
                          experience to potential clients.
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="EnhancingDetails mb-50">
                        <div className="Enhancingtitle">
                          <div className="logoTec">
                            <div className="logoTecIcons">
                              <i className="icon-Legal-Services"></i>
                            </div>
                          </div>
                          <h3>Legal Services</h3>
                        </div>
                        <p>
                          With our premium membership, your law firm can advertise fixed
                          price legal services and offers. From fixed fee writing and
                          probate to special offers on conveyancing and legal advice, our
                          goal is to be the UK's number one destination to find and
                          compare legal services online.
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="EnhancingDetails mb-50">
                        <div className="Enhancingtitle">
                          <div className="logoTec">
                            <div className="logoTecIcons">
                              <i className="icon-Ask-a-Solicitor"></i>
                            </div>
                          </div>
                          <h3>Ask a Solicitor</h3>
                        </div>
                        <p>
                          Answering legal questions is a fantastic way to showcase the
                          knowledge and experience of your firm. Providing helpful answers
                          to questions posted by consumers and businesses instantly opens
                          up a line of communication between your firm and these
                          prospective clients.
                        </p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="EnhancingDetails mb-50">
                        <div className="Enhancingtitle">
                          <div className="logoTec">
                            <div className="logoTecIcons">
                              <i className="icon-Legal-Guides"></i>
                            </div>
                          </div>
                          <h3>Legal Guides</h3>
                        </div>
                        <p>
                          Publishing helpful and informative legal guides and articles is
                          a great way to demonstrate your legal knowledge, and to help
                          establish your firm as an authority in your practice areas. Each
                          guide you publish will display your firm's contact details and
                          link to your online profile. Our legal guides are optimised to
                          receive traffic through search engines, and are promoted
                          throughout the website.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom pt-50 otherSection" data-aos="fade-up">
            <div className="section-title" data-aos="fade-up">
              <h2>Other Features</h2>
            </div>
            <div className="container-fluid container-xl">
              <div className="col-md-12">
                <div className="row justify-content-center">
                  <div className="col-xs-12 col-sm-6 col-md-4 mb-30">
                    <div className="OtherFeaturesTitle">
                      <h3>For Solicitor</h3>
                      <p>
                        LocalSolicitors is a free marketing platform for solicitors to
                        showcase their firm and engage with prospective clients. Creating
                        your online profile is completely free and takes less than 2
                        minutes. Once you have signed up, you can immediately take
                        advantage of our fantastic features, which can help establish your
                        brand and generate more leads and clients for your firm.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4 mb-30">
                    <div className="OtherFeaturesTitle">
                      <h3>Law Firm Profiles</h3>
                      <p>
                        This is your opportunity to tell people and businesses all about
                        your firm and what sets you apart from the competition. As well as
                        information about your services, practice areas and
                        accreditations, your profile can also include full contact details
                        for each of your office locations, and links to your website and
                        social media profiles.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4 mb-30">
                    <div className="OtherFeaturesTitle">
                      <h3>Find a Solicitor</h3>
                      <p>
                        Being featured in our directory will help your firm to be found
                        whenever people or businesses are searching for solicitors in your
                        city, town or county. Your firm will be listed for all of your
                        office addresses and for each area of law that you practice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="Padding-custom" data-aos="fade-up">
            <div className="section-title" data-aos="fade-up" data-aos-delay="200">
              <h2>Project Visuals</h2>
              <p>For a complete demo, Request a Quote below.</p>
            </div>
            <div className="VisualsTabMain">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="tab-contentBg pt-30 pb-30">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade active show"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="your-class-web slick-initialized slick-slider">
                        <button
                          className="slick-prev slick-arrow"
                          aria-label="Previous"
                          type="button"
                        >
                          Previous
                        </button>
                        <div className="slick-list draggable">
                          <div
                            className="slick-track"
                            style={{
                              opacity: 1,
                              width: '11424px',
                              transform: 'translate3d(-2856px, 0px, 0px)',
                            }}
                          >
                            <div
                              className="slick-slide slick-cloned"
                              data-slick-index="-2"
                              aria-hidden="true"
                              style={{ width: '952px' }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{ width: '100%', display: 'inline-block' }}
                                >
                                  <Image
                                    srcSet={[slide4, slide4]}
                                    placeholder={slide4}
                                    className="img-fluid"
                                    alt="Local Solicitors"
                                    title="Local Solicitors"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="slick-slide slick-cloned"
                              data-slick-index="-1"
                              aria-hidden="true"
                              style={{ width: '952px' }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{ width: '100%', display: 'inline-block' }}
                                >
                                  <Image
                                    srcSet={[slide5, slide5]}
                                    placeholder={slide5}
                                    className="img-fluid"
                                    alt="Local Solicitors"
                                    title="Local Solicitors"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="slick-slide"
                              data-slick-index="0"
                              aria-hidden="true"
                              style={{ width: '952px' }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{ width: '100%', display: 'inline-block' }}
                                >
                                  <Image
                                    srcSet={[slide1, slide1]}
                                    placeholder={slide1}
                                    className="img-fluid"
                                    alt="Local Solicitors"
                                    title="Local Solicitors"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="slick-slide slick-current slick-active"
                              data-slick-index="1"
                              aria-hidden="false"
                              style={{ width: '952px' }}
                            >
                              <div>
                                <div
                                  className=""
                                  style={{ width: '100%', display: 'inline-block' }}
                                >
                                  <Image
                                    srcSet={[slide2, slide2]}
                                    placeholder={slide2}
                                    className="img-fluid"
                                    alt="Local Solicitors"
                                    title="Local Solicitors"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="slick-slide slick-active"
                              data-slick-index="2"
                              aria-hidden="false"
                              style={{ width: '952px' }}
                            >
                              <div>
                                <div
                                  className=""
                                  style={{ width: '100%', display: 'inline-block' }}
                                >
                                  <Image
                                    srcSet={[slide3, slide3]}
                                    placeholder={slide3}
                                    className="img-fluid"
                                    alt="Local Solicitors"
                                    title="Local Solicitors"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="slick-slide"
                              data-slick-index="3"
                              aria-hidden="true"
                              style={{ width: '952px' }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{ width: '100%', display: 'inline-block' }}
                                >
                                  <Image
                                    srcSet={[slide4, slide4]}
                                    placeholder={slide4}
                                    className="img-fluid"
                                    alt="Local Solicitors"
                                    title="Local Solicitors"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="slick-slide"
                              data-slick-index="4"
                              aria-hidden="true"
                              style={{ width: '952px' }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{ width: '100%', display: 'inline-block' }}
                                >
                                  <Image
                                    srcSet={[slide5, slide5]}
                                    placeholder={slide5}
                                    className="img-fluid"
                                    alt="Local Solicitors"
                                    title="Local Solicitors"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="slick-slide slick-cloned"
                              data-slick-index="5"
                              aria-hidden="true"
                              style={{ width: '952px' }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{ width: '100%', display: 'inline-block' }}
                                >
                                  <Image
                                    srcSet={[slide1, slide1]}
                                    placeholder={slide1}
                                    className="img-fluid"
                                    alt="Local Solicitors"
                                    title="Local Solicitors"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="slick-slide slick-cloned"
                              data-slick-index="6"
                              aria-hidden="true"
                              style={{ width: '952px' }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{ width: '100%', display: 'inline-block' }}
                                >
                                  <Image
                                    srcSet={[slide2, slide2]}
                                    placeholder={slide2}
                                    className="img-fluid"
                                    alt="Local Solicitors"
                                    title="Local Solicitors"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="slick-slide slick-cloned"
                              data-slick-index="7"
                              aria-hidden="true"
                              style={{ width: '952px' }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{ width: '100%', display: 'inline-block' }}
                                >
                                  <Image
                                    srcSet={[slide3, slide3]}
                                    placeholder={slide3}
                                    className="img-fluid"
                                    alt="Local Solicitors"
                                    title="Local Solicitors"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="slick-slide slick-cloned"
                              data-slick-index="8"
                              aria-hidden="true"
                              style={{ width: '952px' }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{ width: '100%', display: 'inline-block' }}
                                >
                                  <Image
                                    srcSet={[slide4, slide4]}
                                    placeholder={slide4}
                                    className="img-fluid"
                                    alt="Local Solicitors"
                                    title="Local Solicitors"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="slick-slide slick-cloned"
                              data-slick-index="9"
                              aria-hidden="true"
                              style={{ width: '952px' }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{ width: '100%', display: 'inline-block' }}
                                >
                                  <Image
                                    srcSet={[slide5, slide5]}
                                    placeholder={slide5}
                                    className="img-fluid"
                                    alt="Local Solicitors"
                                    title="Local Solicitors"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="slick-next slick-arrow"
                          aria-label="Next"
                          type="button"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom pt-70" data-aos="fade-up">
            <div className="StackSection">
              <div className="container-fluid container-xl">
                <div className="section-title" data-aos="fade-up" data-aos-delay="200">
                  <h2>Technology Stack</h2>
                </div>
                <div className="TechnologyStack">
                  <div className="StackBox">
                    <a href="https://www.This teamweb.co/work/Local-Solicitors#">
                      <div className="StackBoxIcon">
                        <i className="icon-sails-seeklogocom1 tec-custom"></i>
                      </div>
                      <span> Sails JS</span>
                    </a>
                  </div>
                  <div className="StackBox">
                    <a href="https://www.This teamweb.co/work/Local-Solicitors#">
                      <div className="StackBoxIcon">
                        <i className="icon-next-js tec-custom"></i>
                      </div>
                      <span> Next JS</span>
                    </a>
                  </div>
                  <div className="StackBox">
                    <a href="https://www.This teamweb.co/work/Local-Solicitors#">
                      <div className="StackBoxIcon">
                        <i className="icon-ReactJS tec-custom"></i>
                      </div>
                      <span> ReactJS</span>
                    </a>
                  </div>
                  <div className="StackBox">
                    <a href="https://www.This teamweb.co/work/Local-Solicitors#">
                      <div className="StackBoxIcon">
                        <i className="icon-node tec-custom"></i>
                      </div>
                      <span> Node JS</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom" data-aos="fade-up">
            <div className="OurProcessSection">
              <div className="section-title" data-aos="fade-up" data-aos-delay="200">
                <h2>Process We Followed to Bring this Project Live</h2>
              </div>
              <div className="container-fluid container-xl">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="ProcessMainDiv">
                      <i className="icon-search2"></i>
                      <p className="SimpleTitle">Discover</p>
                      <p>
                        We shape brands through exploration, applying in-depth research to
                        challenge assumptions at every turn.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="ProcessMainDiv">
                      <i className="icon-design"></i>
                      <p className="SimpleTitle">Design</p>
                      <p>
                        Our design approach is to simplify. We embrace the joy in creating
                        something unique that is easy for end users.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="ProcessMainDiv">
                      <i className="icon-build"></i>
                      <p className="SimpleTitle">Build</p>
                      <p>
                        Using modern technologies, we build with efficiency and skill,
                        creating flexible and scalable business-driven solutions.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-3">
                    <div className="ProcessMainDiv">
                      <i className="icon-deliver"></i>
                      <p className="SimpleTitle">Deliver</p>
                      <p>
                        We take an iterative approach to both our work and our practice,
                        always looking for ways to improve what we do.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom" data-aos="fade-up">
            <div className="section-title" data-aos="fade-up" data-aos-delay="200">
              <small>Client Testimonials</small>
              <h5>Good things our clients say about us</h5>
            </div>
            <div className="TestimonialsMainData">
              <div className="TestimonialsMain">
                <div className="container-fluid container-xl">
                  <div className="swiper-container">
                    <div className="slick-slide">
                      <div className="slideTestimonials">
                        <div className="TestimonialsPic">
                          <div className="testpicClint">
                            <a>
                              <div className="imgDivclint">
                                <Image
                                  srcSet={[logoDemo, logoDemo]}
                                  placeholder={logoDemo}
                                  alt="Client Testimonials"
                                  title="Client Testimonials"
                                  className="profileuser b-lazy b-loaded"
                                  width="310"
                                  height="310"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="skewDiv">
                            <div className="element"></div>
                          </div>
                        </div>
                        <div className="leftDataclint">
                          <div className="quotationTop">
                            <i className="icon-quotation"></i>
                          </div>
                          <p className="clintFeeds">
                            This team has been a pleasure to work with. I have worked
                            closely with them for many months now on a large and
                            challenging project. From start to finish the communication
                            has been great, they have worked on bugs and changes without
                            issue and are just nice, hard working people. And most
                            important of all, the end result is fantastic. I would not
                            hesitate to recommend this company and am pretty sure I will
                            be working with them on further projects in the near future
                          </p>
                          <div className="quotationbottom">
                            <i className="icon-quotation-bottom"></i>
                          </div>
                          <div className="clintnameDiv">
                            <p>Nicholas Tate</p>
                            <small>Product Manager, Local Solicitor</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Fragment>
  );
};
