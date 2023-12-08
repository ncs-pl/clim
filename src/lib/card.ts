export interface Effects {
    inhabitants: number;
    climate: number;
    finance: number;
    industry: number;
}

export interface Card {
    title: string;
    description: string;
    image: string;
    alt: string;
    effects: Effects;
}

export interface Deck {
    name: string;
    cards: Card[];
};