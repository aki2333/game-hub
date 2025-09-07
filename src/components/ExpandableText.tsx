import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  limit?: number;
}
const ExpandableText = ({ children, limit = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!children) return null;

  return (
    <>
      <Text>
        {!isExpanded && children.length > limit
          ? children.slice(0, limit) + "..."
          : children}
        {children.length > limit && (
          <Button
            size="xs"
            fontWeight={"bold"}
            ml={2}
            colorPalette="yellow"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "show less" : "show more"}
          </Button>
        )}
      </Text>
    </>
  );
};

export default ExpandableText;
