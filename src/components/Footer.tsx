import { myContacts } from "@/data/data";
import {
  GithubIcon,
  HeartIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  GlobeIcon,
} from "lucide-react";
import { DiscordIcon, WhatsAppIcon } from "./Icons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const mySosmed = [
    {
      id: "linkedin",
      icon: <LinkedinIcon size={20} />,
      url: myContacts.linkedin,
    },
    {
      id: "instagram",
      icon: <InstagramIcon size={20} />,
      url: myContacts.instagram,
    },
    {
      id: "github",
      icon: <GithubIcon size={20} />,
      url: myContacts.github,
    },
    {
      id: "github",
      icon: <GlobeIcon size={20} />,
      url: myContacts.global,
    },
  ];

  return (
    <footer
      id="contact"
      className="mb-[80px] border-t-4 border-blue-400 bg-white dark:bg-slate-900 md:mb-0"
    >
      <div className="container mx-auto px-5">
        <div className="flex place-content-between py-10">
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              <span className="inline-block border-b-4 border-dotted border-blue-400 pb-1">
                Contact Me
              </span>
            </h3>
            <ul className="flex flex-col gap-1">
              <li className="flex flex-row items-center gap-2">
                <MailIcon size={18} className="inline-block text-blue-400" />
                {myContacts.email}
              </li>
              <li className="flex flex-row items-center gap-2">
                <WhatsAppIcon
                  size={18}
                  className="inline-block text-blue-400"
                />
                {myContacts.phone}
              </li>
              <li className="flex flex-row items-center gap-2">
                <DiscordIcon size={18} className="inline-block text-blue-400" />
                {myContacts.discord}
              </li>
              <li className="flex flex-row items-center gap-2">
                <GlobeIcon size={18} className="inline-block text-blue-400" />
                {myContacts.dunia}
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col gap-3 text-lg md:flex-row">
              {mySosmed.map((sosmed) => (
                <a
                  key={sosmed.id}
                  className="block rounded-sm  bg-blue-400 px-2 py-1.5 text-white"
                  href={sosmed.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sosmed.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex place-content-between border-t-4 border-dashed border-slate-100 py-4 text-sm dark:border-slate-800">
          <span>Copyright © {year}</span>
          <span>
            made with{" "}
            <HeartIcon
              size={20}
              className="inline-block fill-blue-400 text-blue-400"
            />{" "}
            by{" "}
            <a href="http://ibrahimelgibran.com" className="fill-blue-400">
              Me
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
