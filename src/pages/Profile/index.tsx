import { Header } from "../../components";
import {
  Body,
  BodyContainer,
  Button,
  Container,
  IconsContainer,
  Image,
  ImageContainer,
  BorderTextContainer,
  BorderText,
  LanguageTitle,
  SubTitle,
  Text,
  TextContainer,
  BoldText,
  ItalicText,
  SmallText,
  Name,
  JobsContainer,
  BoldGreyText,
} from "./styles";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import data from "../../data/freelancers.json";

function Profile() {
  const { id } = useParams();
  const freelancer = data.freelancers.find(
    (freelancer) => freelancer.id === parseInt(id || "")
  );

  return (
    <Container>
      <Header />
      {freelancer ? (
        <Body>
          <BodyContainer>
            <ImageContainer>
              <Image src={freelancer.imageURL} alt="profile" />
              <Name>{freelancer.name}</Name>
              <SubTitle>{freelancer.level}</SubTitle>

              <IconsContainer>
                <a href={freelancer.linkedinURL} target="_blank">
                  <LinkedIn
                    sx={{
                      color: "#000000",
                      fontSize: "2em",
                    }}
                  />
                </a>
                <a href={freelancer.githubURL} target="_blank">
                  <GitHub
                    sx={{
                      color: "#000000",
                      fontSize: "1.8em",
                    }}
                  />
                </a>
              </IconsContainer>

              <LanguageTitle>Idiomas</LanguageTitle>
              <BorderTextContainer>
                {freelancer.languages.map((language) => (
                  <BorderText key={language}>{language}</BorderText>
                ))}
              </BorderTextContainer>
              <Button
                href={`mailto:${freelancer.email}?subject=Contrate-me&body=Vi seu perfil no site freelancer e gostaria de te contratar para um projeto!`}
              >
                Contrate agora
              </Button>
            </ImageContainer>
            <TextContainer>
              <h1>Sobre</h1>
              <Text>{freelancer.about}</Text>
              <h1>Competências</h1>
              <BorderTextContainer>
                {freelancer.skills.map((skill) => (
                  <BorderText key={skill}>{skill}</BorderText>
                ))}
              </BorderTextContainer>
              <h1>Experiência</h1>
              {freelancer.experiences.map((experience, index) => (
                <div key={experience.company}>
                  <BoldText>
                    {index + 1}. {experience.company}
                  </BoldText>
                  <ItalicText>
                    {experience.place} | {experience.time}
                  </ItalicText>
                  <JobsContainer>
                    {experience.jobs.map((job) => (
                      <div key={job.level}>
                        <BoldGreyText>{job.level}</BoldGreyText>
                        <ItalicText>
                          {job.from} - {job.to}
                        </ItalicText>
                        {job.summary && <SmallText>{job.summary}</SmallText>}
                      </div>
                    ))}
                  </JobsContainer>
                </div>
              ))}
              <h1>Formação acadêmica</h1>
              {freelancer.academics.map((academic) => (
                <div key={academic.institution}>
                  <BoldText>{academic.institution}</BoldText>
                  <Text>
                    {academic.degree}, {academic.course}
                  </Text>
                  <ItalicText>
                    {academic.from} - {academic.to}
                  </ItalicText>
                </div>
              ))}
            </TextContainer>
          </BodyContainer>
        </Body>
      ) : (
        <p>Usuário não encontrado</p>
      )}
    </Container>
  );
}

export { Profile };
