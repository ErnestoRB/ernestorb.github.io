import { animated as a, useSpring } from "@react-spring/web";
import githubIcon from "../iconos/github-white.svg";
import linkedinIcon from "../iconos/linkedin.svg";
import bloggerIcon from "../iconos/blogger.svg";
import mailIcon from "../iconos/mail.svg";

function NavItem({ children }: { children: React.ReactNode }) {
  return <li className="border-gradient">{children}</li>;
}

export default function NavBar() {
  const { background } = useSpring({
    from: {
      background: "linear-gradient(to right,#e73677, #9226ff)",
    },
    to: {
      background: "linear-gradient(to right, #9226ff,  #e73677)",
    },
    loop: { reverse: true },
    config: { duration: 5000 },
  });

  return (
    <nav className="absolute w-full flex flex-wrap bg-black bg-opacity-70 backdrop-blur justify-center items-center p-2 gap-y-2 md:py-4 flex-none z-50 max-h-24">
      <h1 className="relative font-staatliches text-white text-3xl w-max flex z-10 justify-center items-center ">
        <a.div
          style={{ background }}
          className=" bg-rose-3 w-full h-full absolute -z-10  box-content p-1 animate-glow"
        ></a.div>
        Ernesto Ramírez
      </h1>
      <ul className="flex w-full md:flex-1 justify-center md:justify-end flex-end gap-x-2  transition-all ">
        <NavItem>
          <a href="https://www.linkedin.com/in/ernesto-ram%C3%ADrez-briano/">
            <img
              src={linkedinIcon}
              alt="Linkedin profile"
              className="inline w-8 h-8 "
            />
          </a>
        </NavItem>
        <NavItem>
          <a href="https://blog.ernestorb.com/">
            <img src={bloggerIcon} alt="Mi blog" className="inline w-8 h-8" />
          </a>
        </NavItem>
        <NavItem>
          <a href="https://github.com/ErnestoRB">
            <img
              src={githubIcon}
              alt="GitHub repo"
              className="inline w-8 h-8 "
            />
          </a>
        </NavItem>
        <NavItem>
          <a href="mailto:ernestorb_@outlook.com">
            <img src={mailIcon} alt="Email" className="inline w-8 h-8" />
          </a>
        </NavItem>
      </ul>
    </nav>
  );
}
