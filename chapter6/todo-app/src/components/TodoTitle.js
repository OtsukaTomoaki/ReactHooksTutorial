import React from "react";

import { Heading } from "@chakra-ui/react";

export const TodoTitle = ({ title, as, fontSize, mt }) => {
    return (
    <Heading mt={mt} as={as} fontSize={fontSize} w="full">
        {title}
    </Heading>
    );
};
