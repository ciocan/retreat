import React from "react"
import { Content } from "rbx"
import { Gallery } from "./Gallery"
import { Map } from "./Map"
import { Section } from "./common/layout"
import House from "../svg/House.svg"
import SectionHeader from "./common/SectionHeader"

export function Location({}) {
  return (
    <Section>
      <SectionHeader title="Where You’ll be Staying" Icon={House} />
      <Content size="medium">
        A retreat wouldn’t be a retreat without a calm, peaceful and picturesque
        location. It’s the reason why we’ve found the ideal spot to host you,
        right on the coast of Essex.
      </Content>
      <Content size="medium">
        You’ll find yourself in a luxury barn on a farm set in the picturesque
        countryside off the Essex coast. With beautifully designed living
        quarters and a spa on site, and plenty of nature outside, you’ll find
        everything you need to switch off from the outside world - so you can be
        creative and in flow with the melody you want to embody.
      </Content>
      <Content size="medium">
        But more than that, you’ll be surrounded by unique yet similar
        individuals to you who are looking to do the same - opening the door to
        maximum creativity and relaxation.
      </Content>
      <Content size="medium">
        Come along and enjoy three, full and uninterrupted days of focused,
        meaningful work, with Wi-FI, and a community of people on a similar ride
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
