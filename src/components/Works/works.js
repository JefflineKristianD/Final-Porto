import React from 'react';
import './works.css';
import Porto1 from '../../assets/Porto1.jpg';
import Porto2 from '../../assets/Porto2.jpg';
import Porto3 from '../../assets/Porto 3.jpg';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>All Of My <p>Portofolio</p></h2>
        <span className='worksDesc'> Here's My Github
        </span>
        <a className='LinkGit' href='https://github.com/JefflineKristianD'>Github</a>
            
            <div className='worksImgs'>
            <img src={Porto1} alt='Porto1' className='worksImg'/>
            <a className='LinkPorto' href='https://github.com/JefflineKristianD/AndroidProject'>Natia</a>
            </div>

            <div className='worksImgs'>
            <img src={Porto2} alt='Porto2' className='worksImg'/>
            <a className='LinkPorto' href='https://github.com/JefflineKristianD/DatabaseCourse'> DatabaseCourse</a>
            </div>

            <div className='worksImgs'>
            <img src={Porto3} alt='Porto3' className='worksImg'/>
            <a className='LinkPorto' href='https://github.com/Mat554/SoftwareEngineerAOL'> Trash'In</a>
            </div>
    </section>
  )
}

export default Works