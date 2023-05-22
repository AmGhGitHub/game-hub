import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function Critics({ score }: Props) {
  const color_scheme = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      fontSize="14px"
      colorScheme={color_scheme}
      borderRadius="3px"
      paddingX="6px"
    >
      {score}
    </Badge>
  );
}

export default Critics;
