import React from 'react';
import me from '../../assets/pictures/baby_photo.jpg';
import meNow from '../../assets/pictures/current.png';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Adam Benaceur</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a nursing student currently studying at the University of Calgary!
                    I hope to graduate as class of 2024 with a Bachelor of Nursing.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:benaceur.adam@gmail.com">
                        benaceur.adam@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                As a nursing student at the University of Calgary, I am fueled 
                by a deep desire to make a positive impact in the lives of 
                others. The intrinsic motivation to help those in need has 
                always been the driving force behind my decision to embark on 
                a nursing career. However, it was during this journey that I 
                realized the immense potential technology holds in reaching a 
                broader audience and making a difference on a larger scale. It 
                became evident to me that by integrating technology into the 
                realm of healthcare, I could extend my reach and touch the lives 
                of countless individuals who may otherwise remain inaccessible. 
                This realization sparked a newfound passion within me to pursue 
                the synergistic blend of healthcare and technology, where I could 
                leverage technological advancements to enhance the well-being of 
                a greater community. With an unwavering commitment to improving 
                lives and a deep appreciation for the transformative power of 
                technology, I am driven to explore the endless possibilities that 
                lie ahead. 
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.babyPhoto} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> 1999 - Humble Beginnings :)
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming more seriously in university,
                    initially creating arcade games, mobile applications, and 
                    building front-end landing pages. I went on to do a ton of 
                    passion projects that are viewable on my {' '}
                    <Link to="/projects/software">Software Projects</Link> page.  
                    Additional projects can be found on my {' '}
                    <a href="https://github.com/adambenaceur">
                        github
                    </a>. 
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        {/* <p>
                            Beyond software, I have a lot of hobbies that I
                            enjoy doing in my free time. The more tangible
                            hobbies I have are{' '}
                            <Link to="/projects/music">Music Production</Link>{' '}
                            and creating{' '}
                            <Link to="/projects/art">Digital Art</Link>. You can
                            read more about each of these on their respective
                            pages under my projects tab. Some other hobbies I
                            enjoy are working out, cooking, and (unsurprisingly)
                            playing video games.
                        </p>
                        <br />
                        <p>
                            In college, I was an active member in the fraternity
                            Sigma Alpha Epsilon and held multiple positions in
                            the chapter. I met a lot of amazing people through
                            my fraternity and thoroughly enjoyed the community.
                        </p> */}
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, June 2023
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:benaceur.adam@gmail.com">
                        benaceur.adam@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    babyPhoto: {
        height: 'auto',
        width: '25%',
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
