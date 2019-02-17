import { Section, Title, Box } from "rbx"

export function Benefits({}) {
  return (
    <Section>
      <Title size={5}>Join the Retreat and enjoy:</Title>
      <Box backgroundColor="white-ter" textColor="black">
        <ul>
          <li>📵 Three, full days of distraction-free work 🔕</li>
          <li>🎯 A chance to hone your side project away from the office 🌲</li>
          <li>
            🤝 The opportunity to collaborate with likeminded creatives 👀
          </li>
          <li>🗣️ Good, honest feedback and insight from fellow attendees 👌</li>
          <li>🧘‍ Daily yoga and meditation to help fuel your ideas 🤸</li>
          <li>🥗 Three, nutritious and delicious meals a day 🍲</li>
          <li>🥪 Healthy, low-sugar snacks to get you through the day 🥑</li>
        </ul>
      </Box>
      <style jsx>{`
        ul {
        }
        li {
          font-size: 18px;
          padding: 0.5rem;
        }
      `}</style>
    </Section>
  )
}
