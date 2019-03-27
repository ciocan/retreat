import { Title, Content } from "rbx"
import { Gallery } from "./Gallery"
import { Map } from "./Map"
import { Section } from "./common/layout"

export function Location({}) {
  return (
    <Section>
      <Title size={5}>Where You’ll be Staying</Title>
      <Content size="medium">
        A retreat wouldn’t be a retreat without a calm, peaceful and picturesque
        location. It’s the reason we’re working hard behind the scenes to find
        the ideal spot to host you. Of course, it’ll have Wi-Fi/4G Internet –
        but it’ll also be somewhere that will allow for maximum creativity.
      </Content>
      <Content size="medium">
        The setting for the retreat will be a luxury barn on a farm set in
        picturesque countryside off the Essex coast. With top notch living
        quarters and a state of the art gym and spa on site, you’ll find
        everything you need to switch off from the outside world and get
        creative.
      </Content>
      <Content size="medium">
        Come along and enjoy three, full and uninterrupted days of focused work
        at one of six, beautiful{" "}
        <a
          rel="noopener"
          target="_blank"
          href="http://www.creekseaplacebarns.co.uk/home.asp"
        >
          Creeksea Place Barns
        </a>{" "}
        in Burnham-on-Crouch, Essex.
      </Content>
      <Gallery />
      <Map />
    </Section>
  )
}
