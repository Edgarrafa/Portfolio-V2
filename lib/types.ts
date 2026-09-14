export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'other';
export interface Skill {
  name: string;
  category: SkillCategory;
}
