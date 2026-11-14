// import gmailIcon from '../assets/images/icons/gmail.svg';
import linkedInIcon from '../assets/images/icons/LinkedIn_Logo.svg';
import githubIcon from '../assets/images/icons/github.svg';
import pluralsightIcon from '../assets/images/icons/Pluralsight.svg';
// import twitterCircularIcon from '../assets/images/icons/twitter (circular).svg';

import pdfImage from '../assets/images/icons/pdf.svg';
import { useStickyState } from '../hooks/stickyState';

export default function Header() {
    const { headerRef, sentinelRef } = useStickyState<HTMLElement>();

    return (
        <>
            <div className="sticky-sentinel" aria-hidden="true" ref={sentinelRef}></div>
            <header className="sticky-header" ref={headerRef}>
                {/* <h1
                        className="name-title"
                        aria-label="Alexander Koik-Cestone"
                        style={{ textAlign: 'center' }}>
                        <span className="color-cap">A</span>lexander
                        <span className="color-cap">K</span>oik-<span className="color-cap">C</span
                        >estone
                        <a
                            href="#"
                            className="name-click"
                            title="Phonetic pronounciation"
                            aria-label="Phonetic pronounciation"
                        >
                            🔊
                        </a>
                    </h1> */}

                <section>
                    <div className="resume-and-sm-container">
                        <div className="resume-and-sm">
                            <div>
                                <a
                                    className="button big-button resume-button"
                                    target="_blank"
                                    href="CurriculumVitae/Alexander_Koik-Cestone_resume.pdf"
                                    title="Open my resume in PDF format"
                                    aria-label="Alex Koik-Cestone's resume in PDF format"
                                >
                                    Résumé
                                    <img
                                        src={pdfImage}
                                        width="64"
                                        height="64"
                                        alt="Resume icon"
                                    />
                                </a>
                            </div>
                            <div className="linkbar-separator"><div></div></div>
                            <div>
                                <ul className="social-media" aria-label="My social media profiles">
                                    {/* <li id="email-container" style={{ visibility: 'hidden' }}>
                                            <button
                                                className="sm g-recaptcha email-addr"
                                                title="Email me"
                                                aria-label="Email me"
                                            >
                                                <img
                                                    className="sm-image"
                                                    src={gmailIcon}
                                                    alt="Email"
                                                />
                                            </button>
                                        </li> */}
                                    <li>
                                        <a
                                            className="sm"
                                            target="_blank"
                                            rel="noopener"
                                            href="https://www.linkedin.com/in/alexander-koik-cestone-89304556"
                                            title="My LinkedIn page"
                                            aria-label="LinkedIn profile"
                                        >
                                            <img
                                                className="sm-image"
                                                src={linkedInIcon}
                                                alt="LinkedIn"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="sm"
                                            target="_blank"
                                            rel="noopener"
                                            href="https://github.com/sirkoik"
                                            title="My Github repositories"
                                            aria-label="Github"
                                        >
                                            <img
                                                className="sm-image"
                                                src={githubIcon}
                                                alt="Github"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="sm"
                                            target="_blank"
                                            rel="noopener"
                                            href="https://app.pluralsight.com/profile/alexander-koik-cesto"
                                            title="My Pluralsight Skills profile"
                                            aria-label="Pluralsight"
                                        >
                                            <img
                                                className="sm-image"
                                                src={pluralsightIcon}
                                                alt="Pluralsight"
                                            />
                                        </a>
                                    </li>
                                    {/* <li>
                                            <a
                                                className="sm"
                                                target="_blank"
                                                rel="noopener"
                                                href="https://twitter.com/sirkoik"
                                                title="Twitter"
                                                aria-label="My Twitter"
                                            >
                                                <img
                                                    className="sm-image"
                                                    src={twitterCircularIcon}
                                                    alt="Twitter"
                                                />
                                            </a>
                                        </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
};