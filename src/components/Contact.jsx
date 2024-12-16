import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkedin, naukri } from "../assets";

const Contact = () => {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = "/resume/resume.pdf";
    link.download = "Smriti_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-12 flex flex-col gap-8">
          <div className="flex flex-col">
            <span className="text-white font-medium text-[20px]">
              Contact me through my email
            </span>

            <a
              href="mailto:smritisaini555@gmail.com"
              className="text-secondary font-medium text-[20px] underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              smritisaini555@gmail.com
            </a>
          </div>

          <div>
            <span className="text-white font-medium mb-4 text-[20px]">
              Visit my Social profiles
            </span>
            <div className="flex gap-4">
              <div
                className="cursor-pointer "
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/smriti-saini-a50727199/",
                    "_blank"
                  )
                }
              >
                <img
                  src={linkedin}
                  alt="source code"
                  className="w-12 h-12 mt-2 object-contain"
                />
              </div>
              <div
                className="cursor-pointer mt-2 bg-white rounded-xl "
                onClick={() =>
                  window.open(
                    "https://www.naukri.com/mnjuser/profile",
                    "_blank"
                  )
                }
              >
                <img
                  src={naukri}
                  alt="source code"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          </div>

          {/* <div>
            <span className="text-white font-medium mb-4 text-[20px]">
              Visit my Naukri profile
            </span>
           
          </div> */}

          <div className="flex flex-col">
            <span className="text-white font-medium mb-4 text-[20px]">
              Download my resume here
            </span>
            <button
              className="bg-gradient-to-r from-[#302e6c] to-[#450245] py-5 px-5 rounded-2xl"
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
