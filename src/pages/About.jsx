import "react-vertical-timeline-component/style.min.css"; // move to top‑level once
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { skills, experiences } from "../constants";
import CTA from "../components/CTA";

export default function About() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I&apos;m
        <span className="blue-gradient_text font-semibold drop-shadow"> Abdurehman</span>
      </h1>

      <p className="mt-5 text-slate-500">
        Software engineer based in Addis Ababa, specializing in technical education through hands‑on learning and building applications.
      </p>

      {/* Skills */}
      <div className="py-10">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <p className="mt-5 text-slate-500">
          I&apos;ve worked with all sorts of projects, leveling up my skills teaming up with smart people. Here’s the rundown.
        </p>

        <div className="mt-12 w-full">
          <VerticalTimeline className="w-full" lineColor="#2b77e7">
            {experiences.map((exp) => (
              <VerticalTimelineElement
                key={exp.company_name}
                date={exp.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img src={exp.icon} alt={exp.company_name} className="w-[60%] h-[60%] object-contain" />
                  </div>
                }
                iconStyle={{ background: exp.iconBg }}
                contentStyle={{
                  borderBottomWidth: 8,
                  borderStyle: "solid",
                  borderBottomColor: exp.iconBg,
                  boxShadow: "none",
                }}
              >
                <h3 className="text-black text-xl font-[--font-poppins] font-semibold">{exp.title}</h3>
                <p className="text-[--color-black-500] font-medium m-0">{exp.company_name}</p>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-[--color-black-500]/50 text-sm">{point}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
}
