import styled from "styled-components"
import { Content, Media, Image, Level, Icon } from "rbx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import * as gtag from "../lib/gtag"

interface Props {
  name: string
  title: string
  avatarUrl: string
  description: string
  instagramUrl?: string
  linkedinUrl?: string
  githubUrl?: string
}

export const Organiser = ({
  name,
  title,
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
      <Container>
        <Avatar name={name} url={avatarUrl} />
        <NameContainer>
          <Name>{name}</Name>
          <Title>{title}</Title>
          <Media>
            <Media.Item>
              <Level breakpoint="mobile">
                <Level.Item align="left">{links}</Level.Item>
              </Level>
            </Media.Item>
          </Media>
        </NameContainer>
      </Container>
      <Content>{description}</Content>
    </Box>
  )
}

const Box = styled.div`
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  padding: 1.25rem;
`
const Container = styled.div`
  display: flex;
`

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  margin-bottom: 10px;
`

const Name = styled.h1`
  font-weight: bold;
  font-size: 18px;
`
const Title = styled.h2`
  margin-bottom: 5px;
`

interface AvatarProps {
  name: string
  url: string
}
const Avatar = ({ name, url }: AvatarProps) => (
  <Image.Container size={64}>
    <Image rounded alt={name} src={url} />
  </Image.Container>
)

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
    onClick={() => gtag.event({ action: "click", category: name, label: url })}
  >
    <Icon size="small">
      <FontAwesomeIcon icon={icon} />
    </Icon>
  </Level.Item>
)
