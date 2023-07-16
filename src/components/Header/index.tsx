import { useState, useEffect } from "react";
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
import { useAppDispatch } from "../../store/hooks";
import {
  defineFreelancers,
  defineSearchInput,
  resetState,
} from "../../store/dataSlice";

function Header() {
  const [name, setName] = useState("");
  const [smallWindow, setSmallWindow] = useState(false);
  const [input, setInput] = useState(true);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (window.innerWidth < 500) {
      setSmallWindow(true);
      setInput(false);
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setName("");
    const freelancers = data.freelancers.filter((freelancer) =>
      freelancer.name.toUpperCase().includes(name.trim().toUpperCase())
    );

    dispatch(defineFreelancers(freelancers));
    dispatch(defineSearchInput(name));
    navigate("/");
  };

  return (
    <HeaderBackground smallWindow={input && smallWindow}>
      <HeaderContainer>
        <Title
          onClick={() => {
            dispatch(resetState());
            navigate("/");
          }}
        >
          Freelancer
        </Title>
        {input && (
          <InputContainer onSubmit={(e) => handleSubmit(e)}>
            <Input
              type="text"
              value={name}
              placeholder="Buscar freelancers pelo nome"
              onChange={(e) => setName(e.target.value)}
            />
            <Button type="submit">
              <Search sx={{ fontSize: "1em" }} />
            </Button>
          </InputContainer>
        )}
        {smallWindow && (
          <Button onClick={() => setInput(!input)}>
            <Search sx={{ fontSize: "1em" }} />
          </Button>
        )}
      </HeaderContainer>
    </HeaderBackground>
  );
}

export { Header };
