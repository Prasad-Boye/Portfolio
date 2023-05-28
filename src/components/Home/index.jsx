/* eslint-disable react/no-unescaped-entities */
import './index.css'
import Header from '../Header'
import Footer from '../Footer'

const Home = () => (
<div>
    <Header/>
    <div className="home-container">
        <div className='profile-details-container'>
            {/* <img src="https://media-exp1.licdn.com/dms/image/C5603AQH_wiK68YQVfQ/profile-displayphoto-shrink_400_400/0/1624845153898?e=1663200000&v=beta&t=XHuBVRSpNrXbOIZFoc540oIACULJsPplKy6ThYjjtPU" alt="profile-pic" className='profile-pic'/> */}
            <div className='contents'>
                <h1 className='home-header'>About Me</h1>
                <p className='description'>Hi, my name is Prasad, and I am working as a Junior Software Developer at Metricstream India. I have knowledge of working with various Frontend
                     and Backend tools like HTML, CSS, JS, MERN, Python and Sqlite.
                     <br/> <br/> 
                    I have 1 year of experience working as a React Developer and 3 years of experience as a Design Engineer in Autonomous Train Drive Systems and simulators. 
                    I did my Bachelor's degree in Mechanical Engineering from Raghu Engineering College.
                    <br/> <br/> 
                    People find me to be an upbeat, self-motivated team player with excellent communication skills.
                    I enjoy reading, cricket, surfing through technical webistes. I have sound knowledge
                    in customer - client relations, report generation, project management, cost cutting,
                    drive management, cost estimation, purchase and sales.
                </p>
            </div>
        </div>
    </div>
    <Footer/>
</div>)

export default Home