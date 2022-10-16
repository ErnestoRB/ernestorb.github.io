import githubIcon from "./iconos/github.svg";
import instagramIcon from "./iconos/instagram.svg";
import bloggerIcon from "./iconos/blogger.svg";
import ButtonOrganizer from "./views/ButtonOrganizer";
import Link from "./components/Link";

export default function SocialButtons() {
  return (
    <>
      <ButtonOrganizer>
        <p>¿Quieres ver mi trabajo?</p>
        <Link
          href={"https://github.com/ErnestoRB"}
          className="bg-white text-black shadow-lg"
        >
          <img src={githubIcon} alt="GitHub repo" className="inline w-8 h-8 " />
          <span>Ir a mi GitHub</span>
        </Link>
      </ButtonOrganizer>
      <ButtonOrganizer>
        <p>¿Quieres involucrarte en mi vida personal?</p>
        <Link
          href={"https://instagram.com/ernestorb_"}
          className="bg-white text-black shadow-lg"
        >
          <img
            src={instagramIcon}
            alt="Instagram profile"
            className="inline w-8 h-8 "
          />
          <span>Ir a mi Instagram</span>
        </Link>
      </ButtonOrganizer>
      <ButtonOrganizer>
        <p>Lee cosas interesantes</p>
        <Link
          href={"https://blog.ernestorb.com"}
          className="bg-white text-black shadow-lg"
        >
          <img
            src={bloggerIcon}
            alt="GitHub repo"
            className="inline w-8 h-8 "
          />
          <span>Visita mi blog</span>
        </Link>
      </ButtonOrganizer>
    </>
  );
}
