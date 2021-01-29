import { BigLetterSection } from '../components/big-letter-section'
import { Header } from '../components/header'
import { FlowerCardSection } from '../components/flower-card-section'
import { TextSection } from '../components/text-section'

export default function CssVars({ isDarkMode }) {
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
