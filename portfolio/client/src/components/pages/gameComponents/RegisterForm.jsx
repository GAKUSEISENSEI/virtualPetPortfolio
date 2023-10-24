import { FormContainer } from "./LoginForm.styles";

const RegisterForm = ({ value, valueChange }) => {
  return (
    <FormContainer>
      <input
        type="text"
        placeholder="Enter your pet's name"
        value={value}
        onChange={(e) => {
          valueChange(e.target.value);
        }}
      />
    </FormContainer>
  );
};

export default RegisterForm;
