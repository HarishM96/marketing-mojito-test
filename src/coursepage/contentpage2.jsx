import React from 'react';
import careerService from '/careerService.webp';
import { AiFillPlusCircle } from "react-icons/ai";
import { ImCheckmark } from "react-icons/im";
import userA from '/userA.webp';
import userB from '/userB.webp';
import userC from '/userC.webp';
import potrait from "/potrait.webp";
import './coursepage.css'; 
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const ContentB = () => {
    const items = [
        {
          image: userA,
          title: 'Arpit Jain',
          msg:"This institution offers amazing and well-designed courses. Besides providing in-depth knowledge of finance, they also explain in detail how insurance works. Faculty members are very supportive and always willing to help.",
        },
        {
          image: userB,
          title: 'Amey Kamble',
          msg:"It's a great place to learn about the world of banking. It has helped me build my career foundation strong by giving me good placement and also by developing my personality with soft skill training to make myself more marketable in the global market."
        },
        {
          image: userC,
          title: 'Gorav Sharma',
          msg:"Their course is very practical-oriented and extensive, which focuses on both domain knowledge and soft skills that will support your personal development."
        },
    ];
    return (
        <div>
            <div className='career-suprt'>
                <h2>What other career support will i get ?</h2>
                <p>Improve your career by taking advantage of our strong relationships with top-tier banking and finance hiring firms.</p>
                <img src={careerService} alt='career-service' width="900px" height="500px" />
            </div>
            <div className='course'>
                <h2> Course Content </h2>
                <div className='course-content'>
                    <div className='content-card-cntnr'>
                        <div className='content-cards'>
                            <p> Fundamentals of Insurance </p>
                            <AiFillPlusCircle />
                        </div>
                        <div className='content-cards'>
                            <p> Insurance Products & Profiling </p>
                            <AiFillPlusCircle />
                        </div>
                        <div className='content-cards'>
                            <p> Regulatory Environments & Understanding </p>
                            <AiFillPlusCircle />
                        </div>
                        <div className='content-cards'>
                            <p> Basic Banking products & Services </p>
                            <AiFillPlusCircle />
                        </div>
                        <div className='content-cards'>
                            <p> Communication Skills </p>
                            <AiFillPlusCircle />
                        </div>
                        <div className='content-cards'>
                            <p> Sales Mindsets </p>
                            <AiFillPlusCircle />
                        </div>
                    </div>
                    <div className='prsn-img'>
                        <img src={potrait} alt="smile-potrait" width='500px' height='330px' className='img-smile' />
                    </div>
                </div>
            </div>
            <div className='reviews-carousel'>
                <h3> Start your career in BFSI with Ensueno Learning </h3>
                <div className="carsoule-rvw">
                {/* <BsFillArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} /> */}
                    {
                        items.map((review, index)=>{
                            return(
                                <div key={index} className='rvw-card'>
                                    <div className='card-body'>
                                        <img src={review.image} alt="rvw-images" className="rvw-card-img"/>
                                        <p>{review.title}</p>
                                    </div>
                                    <div className='card-rvw-txt'>
                                        <p> {review.msg} </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <BsFillArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} /> */}
                </div>
                <div className='register-box'>
                    <div>
                        <h3>How much does it cost and what will I get?</h3>
                        <button>Register Now</button>
                    </div>
                    <div>
                        <h4>
                            Joining the course is completely free! Simply register and pass the online test and interview.
                            Self Learning Videos Certificate of Completion
                        </h4>
                        <div className='joining-perks'>
                            <p> <ImCheckmark className='checkmark'/> Self Learning Videos </p>
                            <p> <ImCheckmark className='checkmark' /> Placement Opportunity </p>
                            <p> <ImCheckmark className='checkmark' /> Certificate of Completion </p>
                            <p> <ImCheckmark className='checkmark' /> Career Support </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq">
                <h2> Frequently Asked Questions </h2>
                <div className='faq-container'>
                    <div className='qstns'>
                        <p>How much does the course cost?</p>
                        <AiFillPlusCircle />
                    </div>
                    <div className='qstns'>
                        <p>What career opportunities are available after completing the insurance course?</p>
                        <AiFillPlusCircle />
                    </div>
                    <div className='qstns'>
                        <p>What will be duration of course ?</p>
                        <AiFillPlusCircle />
                    </div>
                    <div className='qstns'>
                        <p>How I will get the Certificate ?</p>
                        <AiFillPlusCircle />
                    </div>
                    <div className='qstns'>
                        <p>What may be my role and remuneration in Insurance Sector ?</p>
                        <AiFillPlusCircle />
                    </div>
                </div>
            </div>
            <div className='brochure'>
                <div>
                    <h2> Ready to kickstart your career? </h2>
                </div>
                <div>
                    <button> Download Brochure </button>
                </div>
            </div>
        </div>
    )
}

export default ContentB;