export interface Skill {
  name: string;
  icon: string;
  years: number;
}

export interface SkillSet {
  category: string;
  items: Skill[];
}
