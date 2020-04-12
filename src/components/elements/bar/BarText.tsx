import React from 'react';

export interface BarTextProps {
  fixedText?: string;
  dynamicText?: string;
}

const BarText: React.FC<BarTextProps> = ({ fixedText, dynamicText }: BarTextProps) => {
  return (
    <p>
      This is a bar text - {fixedText} {dynamicText}
    </p>
  );
};

export default BarText;
