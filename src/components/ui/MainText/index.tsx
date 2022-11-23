import { useTranslation } from 'next-i18next';
import { Trans } from 'next-i18next';
import { FC, ReactNode } from 'react';


interface TextProps {
  className?: string;
  color?: string;
  weight?: string;
  size?:string;
  onClick?: () => void;
  children?:any;
  value?:string;
  decoration?:string;
  trans?:string;
}

const MainText: FC<TextProps> = ({
    color,
    weight,
    size,
   onClick,
   children,
   decoration,
   value,
}) => {
 
  return (
    <span
    onClick={onClick}
    style={{
       color: color,
       fontWeight:weight,
       fontSize:size,
       textDecoration:decoration
    }}
    >
   <Trans i18nKey={value}>
 {children}
</Trans>
    </span>
  );
};



export default MainText;
