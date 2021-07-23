import React from "react";

interface FooTextProps {
  somethingDynamic: string;
}

// The way we use the props here doesn't make any sense, it's just for demonstration
const FooText: React.FC<FooTextProps> = ({
  children,
  somethingDynamic,
}: React.PropsWithChildren<FooTextProps>) => {
  return (
    <p>
      This is a foo text - {children} {somethingDynamic}
    </p>
  );
};

export default FooText;
