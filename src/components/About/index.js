import React from 'react';
import PersonalPic from '../../assets/images/profile.jpg';
import Project3 from '../../assets/images/project3.jpeg';

function About() {
    return(
        <div>
            <div>
                <a href="https://pacific-retreat-64211.herokuapp.com/">
                    <img className="photo" src={Project3} alt=" social platform"/>
                </a>

                <a href="https://github.com/MarkAnthony9014/fitness-project-3">git hub Link</a>
            </div>
            <div>
                <img className="photo" src={PersonalPic} alt="latino with long black hair, glasses, and with a moustache and goatee"/>
            </div>
        
            <h1>
                About Me
            </h1>
            <h3>
                <p> Hello, my name is Angel Aguilar and I'm a full stack web developer from central Texas.
                    I've always had an admiration for computer programming and having friends who were already
                    in the field increased my curiosity for the field. So I have them to partially thank 
                    for aspiring me to take the risk and initaite the action to make an interest into my career.
                </p>

                <p>    I recieved a strong background, experience, and understanding for this field by attending
                    the University of Texas at San Antonio. I graduated with certification for full stack web development
                    by the end of the year in 2022. Languages and some concepts that I have become proficient include: 
                    Node.Js, MongoDb, React, Express, Restful API's, Progressive Web Applications, GraphQl, and
                    Computer Science.
                </p>
                <p>  When away from the computer, I enjoy spending my time by exercising, attending concerts, spending time with friends
                    and family, and relaxing at home.
                </p>
            </h3>
        </div>
    )
}

export default About;