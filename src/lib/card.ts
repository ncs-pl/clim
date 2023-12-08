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

export const beginCard: Card = {
    title: "Clim",
    description: "Bienvenue à Climville ! Vous êtes le nouveau maire de cette ville. Votre mission est de faire prospérer la ville et d'assurer le bien-être de ses habitants, tout en préservant un climat sain pour la planète.",
    image: "mayor.png",
    alt: "Le maire",
    effects: {
        inhabitants: 0,
        climate: 0,
        finance: 0,
        industry: 0
    }
};
