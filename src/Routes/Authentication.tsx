import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAuthContextData } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

enum FormType {
  LOGIN = "login",
  SIGNUP = "signup",
}
const defaultFormValue = {
  email: "",
  password: "",
};

const BASE_URL = import.meta.env.VITE_API_URL;

const Authentication = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuthContextData();
  const [formType, setFormType] = useState<FormType>(FormType.LOGIN);
  const [formFields, setFormFields] = useState(defaultFormValue);
  const { email, password } = formFields;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formType === FormType.LOGIN) {
      try {
        const response = await fetch(`${BASE_URL}/user/login`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formFields),
        });
        const data = await response.json();
        handleLogin(data);
        navigate("/");
      } catch (e) {
        console.log(e);
      }
    }
  };

  const changeForm = () => {
    setFormType(formType === FormType.LOGIN ? FormType.SIGNUP : FormType.LOGIN);
  };

  const buttonSX = {
    mt: 3,
    mb: 2,
    backgroundColor: "var(--primary-main)",
    "&:hover": {
      backgroundColor: "var(--primary-dark)",
    },
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <Container component="main" maxWidth="xs" sx={{ p: 5, mt: 8 }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ fontWeight: 700, color: "var(--primary-main)" }}
        >
          {formType === FormType.SIGNUP ? "SIGN UP" : "SIGN IN"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
            autoComplete="current-password"
          />
          {formType === FormType.SIGNUP ? (
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
            />
          ) : null}
          <Button type="submit" fullWidth variant="contained" sx={buttonSX}>
            {formType === FormType.SIGNUP ? "Sign Up" : "Sign In"}
          </Button>
          <Button
            onClick={changeForm}
            sx={{
              fontWeight: 600,
              color: "var(--gray)",
              "&:hover": { color: "var(--primary-dark)" },
            }}
          >
            {formType === FormType.SIGNUP
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign Up"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Authentication;
