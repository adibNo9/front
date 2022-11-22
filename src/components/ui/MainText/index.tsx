import { useTranslation } from 'next-i18next';
import { Trans } from 'next-i18next';
import { FC, ReactNode } from 'react';


interface TextProps {
  className?: string;
  color?: string;
  weight?: string;
  size?:string;
  onClick?: () => void;
  children?: ReactNode;
  decoration?:string;
}

const MainText: FC<TextProps> = ({
    color,
    weight,
    size,
   onClick,
   children,
   decoration
}) => {
    const { t } = useTranslation()
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
   <Trans  t={t}   components={{ italic: <i />, bold: <strong /> }}>
{children}
   </Trans>




    </span>
  );
};



export default MainText;
