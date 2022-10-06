import { ReactNode } from "react";
import { IconContainer, ItemWithIconContainer } from "./styles";

interface InforWithIconProps {
  icon: ReactNode
  text: string | ReactNode
  iconBg: string
}

export function InforWithIcon({ icon, iconBg, text }: InforWithIconProps) {
  return (
    <ItemWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </ItemWithIconContainer>
  )
}