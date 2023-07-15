import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderBackground,
  Title,
  HeaderContainer,
  InputContainer,
  Input,
  Button,
} from "./styles";
import { Search } from "@mui/icons-material";
import data from "../../data/freelancers.json";

function Header() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const freelancer = data.freelancers.find((freelancer) =>
      freelancer.name.toUpperCase().includes(name.trim().toUpperCase())
    );

    freelancer && navigate(`/profile/${freelancer.id}`);
  };

  return (
    <HeaderBackground>
      <HeaderContainer>
        <Title onClick={() => navigate("/")}>Freelancer</Title>
        <InputContainer onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="text"
            placeholder="Buscar freelancers pelo nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="submit">
            <Search sx={{ fontSize: "1em" }} />
          </Button>
        </InputContainer>
      </HeaderContainer>
    </HeaderBackground>
  );
}

export { Header };
