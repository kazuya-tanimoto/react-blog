export interface Skill {
  name: string;
  icon: string;
  years: number;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}
