import { Title, Box, Content, Media, Image, Level, Icon } from "rbx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface Props {
  name: string
  avatarUrl: string
  description: string
  instagramUrl?: string
  linkedinUrl?: string
  githubUrl?: string
}

export const Organiser = ({
  name,
  avatarUrl,
  instagramUrl,
  linkedinUrl,
  githubUrl,
  description
}: Props) => {
  const links = Array.from(
    [
      { url: instagramUrl, icon: faInstagram, name: "Instagram" },
      { url: linkedinUrl, icon: faLinkedin, name: "Linkedin" },
      { url: githubUrl, icon: faGithub, name: "Github" }
    ],
    ({ url, icon, name }) =>
      url && <Link key={url} url={url} icon={icon} name={name} />
  )

  return (
    <Box>
      <Media>
        <Media.Item align="left">
          <Image.Container size={64}>
            <Image rounded alt={name} src={avatarUrl} />
          </Image.Container>
        </Media.Item>
        <Media.Item>
          <Content>
            <Title size={5}>{name}</Title>
            {description}
          </Content>
          <Level breakpoint="mobile">
            <Level.Item align="left">{links}</Level.Item>
          </Level>
        </Media.Item>
      </Media>
    </Box>
  )
}
interface LinkProps {
  url: string
  icon: IconProp
  name: string
}

const Link = ({ url, icon, name }: LinkProps) => (
  <Level.Item
    as="a"
    aria-label={name}
    href={url}
    target="_new"
    textColor="black"
  >
    <Icon size="small">
      <FontAwesomeIcon icon={icon} />
    </Icon>
  </Level.Item>
)
