export  interface Monster {
    name: string;
    type: "fire" | "water" | "wind" | "earth" | "light" | "void";
    level: number;
    health: number;
    criticalStrike: number;
    attackDamage: number;
    abilityPower: number;
    id: number;
}
export interface Stats{
    health: number;
    abilityPower: number;
    attackDamage: number;
    criticalStrike: number;
    type: string;
}

