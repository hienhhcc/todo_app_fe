import { Typography, Button } from '@mui/material';
import { Person, VpnKey, Login } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { StyledDiv, StyledInput, StyledForm } from './styles';

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'all',
    criteriaMode: 'all',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <StyledDiv>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
        Login
      </Typography>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput>
          <Person className="icon" color="action" fontSize="small" />
          <input
            type="text"
            className="input"
            placeholder="Username"
            {...register('username', {
              required: 'Username is required.',
              minLength: {
                value: 8,
                message: 'Username must exceed 8 characters',
              },
              maxLength: {
                value: 32,
                message: 'Username must not exceed 32 characters',
              },
            })}
          />
        </StyledInput>
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ messages }) => {
            console.log('messages', messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />
        <StyledInput>
          <VpnKey className="icon" color="action" fontSize="small" />
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required.',
              minLength: {
                value: 8,
                message: 'Password must exceed 8 characters',
              },
              maxLength: {
                value: 32,
                message: 'Password must not exceed 32 characters',
              },
            })}
          />
        </StyledInput>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ messages }) => {
            console.log('messages', messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              : null;
          }}
        />

        <Button
          startIcon={<Login />}
          variant="contained"
          sx={{ mt: 1, width: '100%' }}
          type="submit"
        >
          Login
        </Button>
      </StyledForm>
      <Typography
        variant="caption"
        gutterBottom
        component="div"
        sx={{ margin: 'auto', textAlign: 'center', marginTop: '0.5rem' }}
      >
        Don't have an account? Register <Link to="/register">now!</Link>
      </Typography>
    </StyledDiv>
  );
};

export default LoginPage;
