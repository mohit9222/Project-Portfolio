import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { download, downloadHover, resume } from "../assets";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    // contentStyle={{
    //   background: "#eaeaec",
    //   color: "#292929",
    //   boxShadow:
    //     "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    // }}
    contentArrowStyle={{
      borderRight: "7px solid  #fffff",
    }}
    date={
      <div>
        <h3
          className="text-dim text-[18px] font-bold font-beckman"
          style={{ color: "white" }}
        >
          {experience.name}
        </h3>
      </div>
    }
  >
    {/* <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div> */}
  </VerticalTimelineElement>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          Core Competencies
        </p>
        <h2
          className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}
          style={{ color: "white" }}
        >
          Skills.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {technologies.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          {/* <VerticalTimelineElement
            contentStyle={{
              background: "#eaeaec",
              color: "#292929",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  #232631",
            }}
            iconStyle={{ background: "#333333" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          ></VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
