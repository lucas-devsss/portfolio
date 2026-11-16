import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import SocialBadge from "./SocialBadge";
import { motion } from "motion/react";
import { itemVariants } from "../../../animations/variants";

export default function SocialContainer() {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-wrap justify-center gap-4"
    >
      <SocialBadge
        name="LinkedIn"
        icon={<IconBrandLinkedin size={24} aria-hidden="true" />}
        href="https://www.linkedin.com/in/lucas-devsss/"
      />
      <SocialBadge
        name="Instagram"
        icon={<IconBrandInstagram size={24} aria-hidden="true" />}
        href="https://www.instagram.com/lucas.devss/"
      />
      <SocialBadge
        name="GitHub"
        icon={<IconBrandGithub size={24} aria-hidden="true" />}
        href="https://github.com/lucas-devsss"
      />
      <SocialBadge
        name="Email"
        icon={<IconMail size={24} aria-hidden="true" />}
        href="mailto:caiosoftwaredev@gmail.com"
      />
    </motion.div>
  );
}
