import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  IconButton,
  Link,
  HStack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <Box
      mt="80px"
      p={10}
      mx="auto"
      width={["100%", "90%", "80%", "60%"]}
    >
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Stack>
          <CardHeader>
            <Heading>Youna Noynaert</Heading>
          </CardHeader>
          <CardBody>
            I’m a software developer at Kleyo and a passionate
            photographer, specializing in sports photography for volleyball. I
            love combining creativity and technology to tell compelling stories
            and create beautiful visuals.
          </CardBody>
          <CardFooter>
            <HStack spacing={2}>
              {accounts.map((sc, index) => (
                <IconButton
                  key={index}
                  as={Link}
                  isExternal
                  href={sc.url}
                  aria-label={sc.label}
                  colorScheme={sc.type}
                  icon={sc.icon}
                  rounded="md"
                  size="md"
                />
              ))}
            </HStack>
          </CardFooter>
        </Stack>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="/picture_me.jpg"
          alt="Youna Noynaert"
        />
      </Card>
    </Box>
  );
}

const accounts = [
  {
    url: "https://github.com/ynoynaert",
    label: "Github Account",
    type: "gray",
    icon: <FaGithub />,
  },
  {
    url: "https://www.linkedin.com/in/youna-noynaert-a7b76132a/",
    label: "LinkedIn Account",
    type: "linkedin",
    icon: <FaLinkedin />,
  },
];
