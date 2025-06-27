export interface SuccessAnimationProps {
  visible: boolean;
  onAnimationComplete?: () => void;
  suggestions: string[];
  isDark: boolean;
}

export interface AnimationValues {
  scale: number;
  opacity: number;
  checkmarkScale: number;
  checkmarkOpacity: number;
  cardWidth: number;
  cardHeight: number;
  borderRadius: number;
  contentOpacity: number;
  closeButtonOpacity: number;
}
