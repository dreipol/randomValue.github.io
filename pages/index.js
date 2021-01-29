import { BigLetterSection } from '../src/components/big-letter-section'
import { Header } from '../src/components/header'
import { FlowerCardSection } from '../src/components/flower-card-section'
import { TextSection } from '../src/components/text-section'

export default function Home({ isDarkMode }) {
  return (
    <div>
      <Header isDarkMode={isDarkMode} />
      <main />
      <TextSection />
      <FlowerCardSection />
      <BigLetterSection isDarkMode={isDarkMode} />
      <footer />
    </div>
  )
}
