import Paragraph from "./components/Paragraph";
import Stats from "./components/Stats";
import SwipableCard from "./components/SwipableCard";
import Title from "./components/Title";
import { Card, Deck, Effects, beginCard } from "./lib/card";
import { useState } from "react";

import positiveDeck from "./lib/decks/positive.json";
import negativeDeck from "./lib/decks/negative.json";
import christmasDeck from "./lib/decks/christmas.json";

const decks: Deck[] = [positiveDeck, negativeDeck, christmasDeck];
const cards: Card[] = decks.flatMap((deck) => deck.cards);

function App() {
  const [climate, setClimate] = useState(50);
  const [industry, setIndustry] = useState(50);
  const [finance, setFinance] = useState(50);
  const [inhabitants, setInhabitants] = useState(50);

  // shuffle cards
  cards.sort(() => Math.random() - 0.5);

  const [currentCard, setCurrentCard] = useState(cards[0]);

  const onClick = (choice: boolean) => {
    const effects: Effects = currentCard.effects;
    setClimate(climate + effects.climate * (choice ? 1 : -1));
    setIndustry(industry + effects.industry * (choice ? 1 : -1));
    setFinance(finance + effects.finance * (choice ? 1 : -1));
    setInhabitants(inhabitants + effects.inhabitants * (choice ? 1 : -1));

    cards.shift();
    setCurrentCard(cards[0]);
  };

  return (<>
    <header>
      <Stats kind='climate' level={climate} />
      <Stats kind='industry' level={industry} />
      <Stats kind='finance' level={finance} />
      <Stats kind='inhabitants' level={inhabitants} />
    </header>
    <main>
      <aside>
        <Title>{currentCard.title}</Title>
        <Paragraph>{currentCard.description}</Paragraph>
        <footer>
          <button onClick={() => onClick(false)}>No</button>
          <button onClick={() => onClick(true)}>Yes</button>
        </footer>
      </aside>
      <SwipableCard url={currentCard.image} alt={currentCard.alt} />
    </main>
  </>);
}

export default App;
