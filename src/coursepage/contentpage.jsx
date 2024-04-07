import React from 'react';
import opportunity from '/opportunity.webp';
import maxLife from '/maxLife.webp';
import bharati from '/bharatiAXA.webp';
import Placement from '/Placement.webp';
import pathToSuccess from '/pathToSuccess.webp';
import completeTransparency from '/completeTransparency.webp';
import fillApplication from '/fillApplication.webp';
import ClearExam from '/ClearExam.webp'
import clearInterview from '/clearInterview.webp'
import admission from '/admission.webp';
import selfLearn from '/selfLearn.webp';
import LifeLectures from '/LifeLectures.webp';
import Assessments from '/Assessments.webp';
import './coursepage.css';


const ContentA = () => {
  return (
    <div>

      <div className='content-A'>
        <div>
          <img src={opportunity} alt="opportunity-img" width="300px" height="260px" />
        </div>
        <div className='typo-oppotny'>
          <h2> Opportunities in Insurance Sector </h2>
          <p>
            Insurance Sector is fastest growing industry in India. Still Insurance awareness in India is low
            and penetration is extremely low as compared to the Developed Countries.
            Post Covid awareness and demand for various Life and Medical Insurance products has flipped up.
          </p>
          <p>
            Banks and Insurance companies have entered into partnership where the banks sell the tied Insurance
            Company's products to its clients. Many Start ups, Fintech companies and Corporate Agents have
            entered into this fasted
            growing space.
          </p>
          <p>
            Ensueno Learning Insurance Program prepares students for the exact skills you need
            not only to start your career in BFSI Sector but also to excel in it.
          </p>
        </div>
      </div>

      <div className='palcement-prtnr'>
        <h2> Our Placement Partner </h2>
        <div className='partner-img'>
          <div className='prtner-img-contnr'>
            <img src={maxLife} alt="maxlife-mg" width="220px" height="140px" className='prtner-img' />
          </div>
          <div className='prtner-img-contnr'>
            <img src={bharati} alt="bhartiaxa-img" width="220px" height="140px" className='prtner-img' />
          </div>
        </div>
      </div>

      <div className='insurance-prgm'>
        <h2> Insurance Placement Program </h2>
        <p>
          Our unique Self Learning Modules will not only ensure the comfort of learning from your home but also the
          efficiency for maximum learning. This course will provide you with the domain knowledge and soft skills needed
          for a successful career in Insurance Sector. This is an programme in which you are responsible for self
          learning, upskilling, successfully completing the course, and earning your certification.
        </p>
        <div className='plcmnt-card-cntner'>
          <div className='plcmnt-card'>
            <img src={Placement} alt="placement-1mg" width="130px" height="150px" />
            <div>
              <h3> Placement Opportunities </h3>
              <p>
                Our students get to interview for full-time and internship positions with our placement partners,
                serving as a bridge to the professional world. It’s a unique opportunity for anyone eager to jumpstart
                their career!
              </p>
            </div>
          </div>
          <div className='plcmnt-card'>
            <img src={pathToSuccess} alt="pathToSuccess-img" width="120px" height="150px" />
            <div>
              <h3> Pathway to Success </h3>
              <p>
                We teach you not only the basic skills required for the job, but also how to build your career faster and
                get promoted, which no one else will teach you
              </p>
            </div>
          </div>
          <div className='plcmnt-card'>
            <img src={completeTransparency} alt="comp-transparency" width="120px" height="150px" />
            <div>
              <h3> Complete Transparency </h3>
              <p>
                You will gain a clear picture of your day-to-day work life, as well as strategies for dealing with it.
                We only provide the knowledge you need to succeed!
              </p>
            </div>
          </div>
        </div>
        <div className='btn-container'>
          <button> Enroll Here! </button>
        </div>
      </div>

      <div className='join-prgrm'>
        <h2> How can I join the Insurance program ? </h2>
        <div className='join-prgrm-stps'>
          <div className='prgrm-stps-crd'>
            <img src={fillApplication} alt="fill-app" width="120px" height="130px" />
            <p> Fill the registration form </p>
          </div>
          <div className='prgrm-stps-crd'>
            <img src={ClearExam} alt="clear-exam" width="120px" height="130px" />
            <p> Clear an online entrance test & interview </p>
          </div>
          <div className='prgrm-stps-crd'>
            <img src={clearInterview} alt="clear-int" width="120px" height="130px" />
            <p> Get access to the course </p>
          </div>
          <div className='prgrm-stps-crd'>
            <img src={admission} alt="admission" width="120px" height="130px" />
            <p> Complete the course & get certificate </p>
          </div>
          <div className='prgrm-stps-crd'>
            <img src={ClearExam} alt="clear-exam" width="120px" height="130px" />
            <p> Get Placement Opportunity </p>
          </div>
        </div>
        <div className='btn-container'>
          <button> Enroll Here! </button>
        </div>
      </div>

      <div className='learn-process'>
        <h2> How will you learn? </h2>
        <div className='learn-card-cntner'>
          <div className='learn-card'>
            <img src={selfLearn} alt="placement" width="130px" height="150px" />
            <div>
              <h3> Self learning Moduels </h3>
              <p>
                Recorded videos by industry leaders to master the fundamentals of the finance world,
                allowing students to learn at their own pace. This will result in less stress for the student and more
                learning.
              </p>
            </div>
          </div>
          <div className='learn-card'>
            <img src={LifeLectures} alt="self-learn" width="120px" height="150px" />
            <div>
              <h3> Doubt Solving Sessions </h3>
              <p>
                You may email us your queries or can interact with our experts
              </p>
            </div>
          </div>
          <div className='learn-card'>
            <img src={Assessments} alt="assessments" width="120px" height="150px" />
            <div>
              <h3> Assessments and Teach-backs Sessions </h3>
              <p>
                Assignments, test, quizzes help students internalize key concepts.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContentA;