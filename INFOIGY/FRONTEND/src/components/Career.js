import React, { useState, useRef } from 'react';
import '../css/Career.css';
import video from '../assets/videos/video1.mp4';
import video1 from '../assets/videos/2D Animator.mp4';
import video2 from '../assets/videos/3Danimator.mp4';
import video3 from '../assets/videos/elearn.mp4';
import video4 from '../assets/videos/contentquality.mp4';
import video5 from '../assets/videos/elearnbde.mp4';
import video6 from '../assets/videos/iotengineer.mp4';

const Career = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        position: '',
        qualifications: '',
        resume: null
    });

    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'resume') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form data
        const { name, email, mobile, position, qualifications, resume } = formData;
        if (name && email && mobile && position && qualifications && resume) {
            // Submit form data
            console.log('Form submitted:', formData);
            setFormData({
                name: '',
                email: '',
                mobile: '',
                position: '',
                qualifications: '',
                resume: null
            });
            fileInputRef.current.value = null;
        //     toast.success('Applied Successfully', {
        //         position: "top-right",
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
        // } else {
        //     toast.error('Please fill out all fields', {
        //         position: "top-right",
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            mobile: '',
            position: '',
            qualifications: '',
            resume: null
        });
        fileInputRef.current.value = null;
    };

    return (
        <div className="career-page">
            <div className="video-background">
                <video autoPlay loop muted preload="metadata">
                    <source src={video} type="video/mp4" />
                </video>
                <div className="video-content">
                    <h1>Join Our Team</h1>
                    <p>We're looking for talented individuals to join us in our mission.</p>
                </div>
            </div>
            <div className="hiring-section">
                <h1>We are Hiring</h1>
            </div>

            {/* Content and Video Sections */}
            <div className="content-video-section borderDiv">
                <div className="content-column">
                    <div className="content-scroll">
                        <h2>About Us</h2>
                        <p>Your long content goes here... Skills/ Experience : 02 to 05 years of experieYour long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.nce in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.</p>
                    </div>
                </div>
                <div className="video-column">
                    <video autoPlay loop muted preload="metadata">
                        <source src={video1} type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Repeat Content and Video Section as needed */}
            <div className="content-video-section borderDiv">
                <div className="video-column">
                    <video autoPlay loop muted preload="metadata">
                        <source src={video2} type="video/mp4" />
                    </video>
                </div>
                <div className="content-column">
                    <div className="content-scroll content-left">
                        <h2>Our Mission</h2>
                        <p>Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.
                        Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.
                        Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.
                        Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.
                        Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.
                        Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.

                        </p>
                    </div>
                </div>
            </div>

            <div className="content-video-section borderDiv">
                <div className="content-column">
                    <div className="content-scroll">
                        <h2>Our Mission</h2>
                        <p>YoYour long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.ur long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.</p>
                    </div>
                </div>
                <div className="video-column">
                    <video autoPlay loop muted preload="metadata">
                        <source src={video3} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="content-video-section borderDiv">
                <div className="video-column">
                    <video autoPlay loop muted preload="metadata">
                        <source src={video4} type="video/mp4" />
                    </video>
                </div>
                <div className="content-column">
                    <div className="content-scroll content-left">
                        <h2>Our Mission</h2>
                        <p>Your long content goYour long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.Your long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.es here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.</p>
                    </div>
                </div>
            </div>

            <div className="content-video-section borderDiv">
                <div className="content-column">
                    <div className="content-scroll">
                        <h2>Our Mission</h2>
                        <p>Your long c SYour long content goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.kills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneouslyontent goes here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.</p>
                    </div>
                </div>
                <div className="video-column">
                    <video autoPlay loop muted preload="metadata">
                        <source src={video5} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="content-video-section borderDiv">
                <div className="video-column">
                    <video autoPlay loop muted preload="metadata">
                        <source src={video6} type="video/mp4" />
                    </video>
                </div>
                <div className="content-column borderLast">
                    <div className="content-scroll content-left">
                        <h2>Our Mission</h2>
                        <p>Your long content goe Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneouslys here... Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously Skills/ Experience : 02 to 05 years of experience in 2D Animator and character design. A handsome knowledge of Adobe Photoshop, Adobe Animate CC, Adobe After Effects, Adobe Audition, Adobe InDesign, and Adobe Illustrator. Proven Experience as a 2D Animation Designer. Strong understanding of animation principles and techniques. Excellent communication and collaboration skills Ability to work under tight deadlines and manage multiple projects simultaneously.</p>
                    </div>
                </div>
            </div>
            <div className="hiring-section">
            </div>

            <div className="hiring-section1">
                <h2 style={{fontSize: "40px", fontWeight: 'bolder', marginBottom: '1rem'}}>Apply Now</h2>
                <form className="apply-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile No."
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Position</option>
                        <option value="Position 1">2D Animator</option>
                        <option value="Position 2">3D Animator</option>
                        <option value="Position 3">E-Learning Developer</option>
                        <option value="Position 4">Content Quality Analyst</option>
                        <option value="Position 5">E-Learning Business Development Manager</option>
                        <option value="Position 6">IOT Engineer</option>
                    </select>
                    <textarea
                        name="qualifications"
                        placeholder="Qualifications"
                        value={formData.qualifications}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <input
                        type="file"
                        name="resume"
                        accept="application/pdf"
                        onChange={handleChange}
                        ref={fileInputRef}
                        required
                    />
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </form>
            </div>

            {/* <ToastContainer /> */}
        </div>
    );
}

export default Career;
