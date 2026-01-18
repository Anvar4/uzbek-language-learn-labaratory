export type ActivityType = 
| 'quiz' 
| 'drag-drop' 
| 'matching' 
| 'fill-blank' 
| 'scenario';

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface FillBlankData {
  sentence: string;
  blanks: { id: string; answer: string }[];
}

export interface DragDropItem {
  id: string;
  text: string;
  category: string;
}

export interface ScenarioChoice {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface ScenarioData {
  situation: string;
  question: string;
  options: ScenarioChoice[];
}

export interface LabActivity {
  id: string;
  topicId: number;
  type: ActivityType;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  instructions: {
    uz: string;
    ru: string;
    en: string;
  };
  data: any;
}

import { virtualLabActivities } from "./virtualLabData";

export const labActivities: any[] = virtualLabActivities;

export const getActivitiesByTopic = (topicId: number): any[] => {
  return labActivities.filter(activity => activity.topicId === topicId);
};

export const getActivityTitle = (activity: any, language: string): string => {
  return activity.title[language] || activity.title['uz'];
};

export const getActivityInstructions = (activity: any, language: string): string => {
  return activity.instructions[language] || activity.instructions['uz'];
};
