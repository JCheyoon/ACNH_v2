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
import { useAxios } from "../Components/Hooks/useAxios";

enum FormType {
  LOGIN = "login",
  SIGNUP = "signup",
}
const defaultFormValue = {
  email: "",
  password: "",
};

const Authentication = () => {
  const { post } = useAxios();

  const navigate = useNavigate();
  const { handleLogin } = useAuthContextData();
  const [formType, setFormType] = useState<FormType>(FormType.LOGIN);
  const [formFields, setFormFields] = useState(defaultFormValue);
  const [confirmPassword, setConfirmPassword] = useState("");

  const { email, password } = formFields;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formType === FormType.LOGIN) {
      try {
        const response = await post("/user/login", formFields);
        handleLogin(response.data);
        navigate("/");
        //TODO
        console.log("success");
      } catch (e) {
        if ((e as any)?.response?.data?.message === "INVALID_CREDENTIALS") {
          alert("Incorrect password or email");
        } else if (
          (e as any)?.response?.data?.message[0].message === "INVALID_FORMAT"
        ) {
          alert("Email or password has invalid format");
        }
      }
    } else if (formType === FormType.SIGNUP) {
      try {
        await post("/user/signup", formFields);
        setFormType(FormType.LOGIN);
        resetForm();
      } catch (e) {
        //TODO
        console.log(e);
      }
    } else {
      return;
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
  const resetForm = () => {
    setFormFields({ email: "", password: "" });
    setConfirmPassword("");
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={buttonSX}
            disabled={
              formType === FormType.LOGIN
                ? !email || !password
                : !email ||
                  !password ||
                  !confirmPassword ||
                  password !== confirmPassword
            }
          >
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
