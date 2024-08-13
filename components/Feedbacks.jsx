import { motion, spring } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant} from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({ index, testimonial, name, designation, image}) => (
  <motion.div variants={fadeIn("", "spring", index*0.5, 0.75)} 
  className=" mt-10 bg-[#2e1b0d]-200 p-10 rounded-3xl xs:w-[320px] w-full outline">
    <p className='text-secondary font-black text-[48px]'>*</p>

    <div className='mt-1'>
      <p className='text-secondary tracking-wider text-[16px]'>
        {testimonial}
      </p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-secondary font-medium ext-[16px]'>
            <span className='blue-text-gradient'>@</span>{name}
          </p>
          <p className='mt-1 text-secondary text-[11px]'>
            {designation}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback-by-${name}`}
          className='w-20 h-20 rounded-full object-cover'/>
      </div>
    </div>
  </motion.div>
)


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-[#2e1b0d]-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-[#2e1b0d] rounded-2xl-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Volunteering</p>
          <h2 className={styles.sectionHeadText}>Social. </h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} mt-13 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard 
            key={testimonial.name}
            index={index}
            {...testimonial}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");
