import { Fade, Slide } from "react-awesome-reveal";
import kid from "../../../assets/kid.jpg";
import { DarkContext } from "../../../context/DarkMoodContext";
import { useContext } from "react";

const About = () => {
  const { isDarkMode } = useContext(DarkContext);

  return (
    <div className={isDarkMode ? "bg-custom2" : ""}>
      <div className="container w-9/12 mx-auto py-32">
        <div className="flex flex-col md:flex-row justify-start gap-5 md:gap-10">
          <img className="w-[650px] object-contain" src={kid} alt="" />
          <div className="space-y-4">
            <Slide direction="down" className="-z-[99999px]">
              <h1
                className={`text-3xl md:text-5xl -z-[9999px] ${
                  isDarkMode ? "text-gray-400" : "text-gray-800"
                }  font-bold font-heading`}
              >
                The Best Martial Arts Academy
              </h1>
            </Slide>
            <Fade
              cascade
              direction="up"
              className={`text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-800"
              }`}
            >
              <p>
                Our camp provides a unique opportunity for children and teens to
                develop physical fitness, mental discipline, and personal growth
                in a safe and supportive environment.
              </p>
            </Fade>
            <p>
              <Fade
                cascade
                direction="up"
                className={`text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-800"
                }`}
              >
                <span>
                  We believe that martial arts training goes beyond self-defense
                  techniques. It instills confidence, fosters resilience,and
                  promotes character development. Through our carefully designed
                  curriculum,
                </span>

                <span>
                  led by experienced and passionate instructors, we aim to
                  cultivate a lifelong love for martial arts while nurturing
                  valuable life skills.
                </span>
              </Fade>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
