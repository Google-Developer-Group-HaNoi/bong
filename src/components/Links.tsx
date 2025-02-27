import { Flex, Link, Text } from "@radix-ui/themes";
import {
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import useResponsive from "@/hooks/useResponsive";

const Links = () => {
  const { isMobile } = useResponsive();
  return (
    <Flex
      position={"absolute"}
      gap={"2"}
      align={"center"}
      className={`z-50 ${isMobile ? " w-full top-0 left-[-4px]" : "right-16"}`}
      style={isMobile ? { placeContent: "center" } : {}}
    >
      <Link
        href={"https://tuanlda78202.works/"}
        target="_blank"
        rel="me noopener noreferrer"
      >
        <Text size={"4"} className="text-white text-center">
          tuanlda78202.works/
        </Text>
      </Link>

      <Link
        href={"https://github.com/tuanlda78202"}
        target="_blank"
        rel="me noopener noreferrer"
      >
        <GitHubLogoIcon color="#fff" width={18} height={18} />
      </Link>
      <Link
        href={"https://linkedin.com/in/tuanlda78202/"}
        target="_blank"
        rel="me noopener noreferrer"
      >
        <LinkedInLogoIcon color="#fff" width={18} height={18} />
      </Link>
      <Link
        href={"https://twitter.com/tuanlda78202"}
        target="_blank"
        rel="me noopener noreferrer"
      >
        <TwitterLogoIcon color="#fff" width={18} height={18} />
      </Link>

      <Link
        href={"mailto:anhtuanld@gdghanoi.com"}
        target="_blank"
        className="cursor-pointer"
        rel="me noopener noreferrer"
      >
        <EnvelopeOpenIcon color="#fff" width={18} height={18} />
      </Link>
    </Flex>
  );
};

export default Links;
