import React from 'react'
import { skills,experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA'
const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='bluFe-gradient_text font-semibold drop-shadow'>Song</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
              I thrive on problem-solving, constantly looking for new challenges to push my limits. While backend development remains my passion, I’ve also delved into frontend technologies, transforming into a full-stack developer to craft responsive, aesthetically pleasing interfaces.
          </p>
          <p>
              Collaboration is key to my process. Whether working on group projects during my studies or coding alongside peers, I’ve found that the best ideas often emerge from collective effort. I’m always eager to contribute my skills to a team, learning from others while sharing my own knowledge.
          </p>
          <p>
              Outside of coding, I enjoy strategy games, particularly those by Paradox Interactive. These games challenge the same analytical and strategic thinking I use in development. I also love staying up-to-date with the latest tech trends and tools, constantly seeking opportunities to expand my skill set.
          </p>
          <p>
              Feel free to reach out at <a href='mailto:ysong0930@gmail.com'>ysong0930@gmail.com</a> if you're looking for someone who brings creativity, collaboration, and a passion for problem-solving. I’m open to discussing job opportunities, new projects, or the latest in software development.
          </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
          My Skills
        </h3>
        <div className='mt-16 flex flex-wrap gap-12' >
          {skills.map(
            (skill)=>(
              <div key={`skill-${skill.name}`} className='block-container w-20 h-20'>
                <div className='btn-back rounded-xl'/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain'/>
                </div>
              </div>
          )
          )}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>
          Work Experience
        </h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              Software Engineer based in Limerick, Ireland, specializing in backend development.
            </p>
          </div>
          <div className='mt-12 flex'>
              <VerticalTimeline>
                {experiences.map((experience)=>(
                  <VerticalTimelineElement
                    key={experience.company_name}
                    date={experience.date}
                    icon={<div className='flex justify-center items-center w-full h-full'>
                      <img 
                        src={experience.icon} 
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                      />
                    </div>}
                    iconStyle={
                      {
                        background:experience.iconBg
                      }
                    }
                    contentStyle={{
                      borderBottom:'8px',
                      borderStyle:'solid',
                      borderBottomColor:experience.iconBg,
                      boxShadow:'none',
                    }}
                  >
                    <div>
                      <h3 className='text-black text-xl font-poppins font-semibold'>
                        {experience.title}
                      </h3 >
                      <p className='text-black-500 font-medium font-base' 
                      style={{margin:0}}>
                        {experience.company_name}
                      </p>
                    </div>
                    <ul className='my-5 list-disc ml-5 space-y-2'>
                      {experience.points.map((point,index)=>(
                        <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
          </div>
      </div>

      <hr className='border-slate-200'/>
      <CTA/>
    </section>
  )
}

export default About