export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'other';
export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  email: string;
  socialLinks: SocialLink[];
  resumeUrl?: string;
}
