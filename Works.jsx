import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link}) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index*0.5, 0.75)}>
      <Tilt 
      options={{max:45, scale:1, speed:450}}
      className="-mt-3 bg-[#2e1b0d] p-5 rounded-2xl sm:w-[360px] w-full">


      <div className="mt-5">
        <h3 className="text-[#e4d1be] font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>


      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>MY CERTIFICATIONS</p>
        <h2 className={styles.sectionHeadText}> Certificates.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn(", ", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          The following certificates belong to the courses I have taken in my fields of interest. 
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
          key={`project-${index}`}
          index={index}
          {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");