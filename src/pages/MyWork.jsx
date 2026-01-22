import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Image,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";

export default function MyWork() {
  return (
    <Box  mt="80px" p={10} mx="auto" width={["100%", "90%", "80%", "60%"]}>
      {work.map((w, index) => (
        <Card
          key={index}
          direction={{ base: "column", sm: "row" }}
          variant="outline"
          borderWidth="2px"
          mb={4}
          boxShadow="lg"
        >
          <Flex
            align="center"
            justify="center"
            flexDirection={{ base: "column", sm: "row" }}
            width="100%"
          >
            <Stack spacing="10px" align="center">
              <Image src={w.imageurl} alt={w.title} borderRadius="20" />
              <Text
                fontStyle="italic"
                color="gray.600"
                textAlign="center"
                mt={2}
              >
                {w.period}
              </Text>
            </Stack>
          </Flex>

          <Stack maxWidth="400px" width="100%">
            <CardBody>
              <Heading size="md">{w.title}</Heading>
              <Text mt={2} mb={2}>
                {w.description}
              </Text>
              {w.technologies && (
                <>
                  <Text as="b">Used technologies</Text>
                  <Text>{w.technologies}</Text>
                </>
              )}
            </CardBody>
            <CardFooter flexWrap="wrap" gap={2}>
              {w.buttonTwo ? (
                <>
                  <Button
                    as="a"
                    href={w.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    background="#e0b187"
                    color="white"
                    width={{ base: "full", sm: "auto" }}
                    whiteSpace="normal"
                    height="auto"
                    py={2}
                  >
                    {w.but}
                  </Button>
                  <Button
                    as="a"
                    href={w.buttonTwo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    background="#e0b187"
                    color="white"
                    width={{ base: "full", sm: "auto" }}
                    whiteSpace="normal"
                    height="auto"
                    py={2}
                  >
                    {w.buttonTwo.text}
                  </Button>
                </>
              ) : (
                <Button
                  as="a"
                  href={w.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  background="#e0b187"
                  color="white"
                  width={{ base: "full", sm: "auto" }}
                  whiteSpace="normal"
                  height="auto"
                  py={2}
                >
                  {w.but}
                </Button>
              )}
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Box>
  );
}

const work = [
  {
    title: "Bachelor thesis: 'The impact of automated player and match statistics at volleyball club Lindemans Aalst'",
    description:
      "For my bachelor thesis, I conducted a research project at the volleyball club Lindemans Aalst. The focus of the research was to investigate the impact of automated player and match statistics on the performance of the team. The project involved analyzing data collected from matches and training sessions, and evaluating how this information could be used to improve player performance and team strategy. The results of the research provided valuable insights into the benefits of using data analytics in sports, and highlighted the potential for further development in this area.",
      imageurl: "/myWork/bap.jpg",
      period: "February - May 2025",
      but: "Read thesis",
      link: "/myWork/NoynaertYounaBP.pdf",
  },
  {
    title: "DevOps Dozer Project",
    description:
      "The DevOps Dozer Project focuses on developing an integrated digital platform consisting of a website and a mobile app. The project is run by a team of six developers and four operations specialists, who work together to build a user-friendly and scalable solution. The website, developed in C#, offers extensive functionality such as managing machines, quotes, orders, branches, translations, categories and options, types and vendors. In addition, there is a login system that gives admins and vendors specific access rights. The mobile app, developed in Kotlin, offers a simplified interface that allows users to view machines, quotes and orders. In addition, quotes can be created directly through the app.",
    technologies: ".NET, Azure Blob Storage, Auth0, Jira, Kotlin, Blazorise",
    imageurl: "/myWork/dozer.png",
    but: "Website repository",
    link: "https://github.com/ynoynaert/2425-rise-dotnet",
    period: "October - December 2024",
    buttonTwo: {
      text: "Android app repository",
      link: "https://github.com/ynoynaert/2425-rise-android",
    },
  },
  {
    title: "Website Fanclub Lindemans Aalst",
    description:
      "As a dedicated fan of the volleyball club, I gave the fan club's website a fresh, modern redesign. Using React and Chakra UI, I not only updated the look and feel but also made it more user-friendly and responsive. The improved navigation and design now better reflect the energy of the club and its supporters.",
    technologies: "React JS, Chakra UI, JavaScript",
    imageurl: "/myWork/fanclub.png",
    but: "Visit website",
    link: "http://www.fanclubaalst.be",
    period: "September 2024",
  },
  {
    title: "Delaware B2B Portal",
    description:
      "The Delaware B2B Portal is a comprehensive software solution developed by a team of five skilled members as part of a school project. This project involved the development of both web and desktop applications. The desktop application aims to streamline business-to-business (B2B) operations, providing efficient management tools. The Technologies used for this project include Java, JPA, MySQL, and CSS. The team dedicated significant effort to ensure a smooth user experience and deliver a high-quality final product. Through this project, the team gained valuable insights into software development, project management, and effective collaboration. Our project involved developing a comprehensive solution for a school project that encompasses both web and desktop applications. We made sure to put in a great deal of effort into the development of this application to ensure that it functions smoothly and is easy to use.",
    technologies:
      "Java, JavaFX, MySQL, JPA, React JS, Material UI, TypeScript, AdonisJS",
    imageurl: "/myWork/delawareB2B.png",
    but: "Visit website",
    link: "https://two024-frontend-a03.onrender.com/products",
    period: "February - May 2024",
    buttonTwo: {
      text: "Desktop App Repository",
      link: "https://github.com/ynoynaert/2324-sdp2-java",
    },
  },
  {
    title: "Olympic Games Ticket Shop",
    description:
      "The goal of this assignment was to develop a Spring Boot application for managing events for the 2024 Paris Olympic Games. The application supports two roles: admin and user. Admins can add new events, while users can purchase tickets and view their purchased tickets. The application features a main screen displaying an overview of at least five sports, with hyperlinks to event screens. These screens list events sorted by date and time, including details such as the sport name, date, time, venue, disciplines, available seats, and ticket prices. There is a separate page for admins to add events, with strict validation for input. Users can purchase a maximum of 20 tickets per event, with a total limit of 100 tickets. The application uses JPA for database access and Spring Security for authentication. Additionally, unit tests and a REST web service for retrieving events and available seats have been implemented.",
    technologies: "Java, JPA, SpringBoot, CSS, MySQL",
    imageurl: "/myWork/olympicGames.png",
    but: "Repository",
    link: "https://github.com/ynoynaert/2324-enterpriseWebDevelopment",
    period: "April - May 2024",
  },
  {
    title: "Vinyl vault",
    description:
      "Introducing 'VinylCollection', a web application that I developed as part of a school project. Leveraging the power of React for the front end and Node.js for the back end, VinylCollection offers users a seamless experience in managing and exploring their vinyl records. This platform serves as a testament to my skills in full-stack web development, allowing vinyl enthusiasts to immerse themselves in a vast collection of records while enjoying a user-friendly interface. The website provides an extensive range of albums, each accompanied by comprehensive details. Throughout the development of VinylCollection, I honed my skills in React and Node.js, deepening my understanding of full-stack web development. The project allowed me to practice creating intuitive user interfaces, managing data flow between front-end and back-end components, and developing interactive features that enhance user engagement. This was my very first full-stack web project.",
    technologies: "React JS, JavaScript, Node JS, MySQL, Chakra UI",
    imageurl: "/myWork/vinylvault.png",
    but: "Visit website",
    link: "https://frontendweb-ynoynaert.onrender.com",
    period: "September - December 2023",
  },
  {
    title: "Splendor",
    description:
      "As a team of five students, we developed a version of the game Splendor for our school project. During the development process, we collaborated to design and implement various aspects of the game, such as the user interface, game mechanics, and scoring system.",
    technologies: "Java, JavaFX, Scene Builder, CSS, MySQL",
    imageurl: "/myWork/splendor.png",
    but: "Repository",
    link: "https://github.com/ynoynaert/2223-sdp1",
    period: "February - May 2023",
  },
  {
    title: "Mijn eerste website",
    description:
      "My very first project was a website about my lesser-known hobby. This website was an assignment for school that I worked on alone. Several things had to be present on the website.",
    technologies: "HTML5, CSS",
    imageurl: "/myWork/eerste_website.png",
    but: "Repository",
    link: "https://github.com/ynoynaert/2122-informatica",
    period: "February - May 2022",
  },
];
