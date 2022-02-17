import { Typography, Button, Alert } from '@mui/material';
import { Person, VpnKey, Login, Save } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { StyledDiv, StyledInput, StyledForm } from './styles';
import useHooks from './hooks';
import { EActionStatus } from '../../../utils/constants';

const LoginPage = () => {
  const {
    register: registerForm,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'all',
    criteriaMode: 'all',
  });
  const { handlers, selectors } = useHooks();
  const location = useLocation();

  const { onSubmitLogin } = handlers;
  const { status, error } = selectors;

  let content = (
    <StyledDiv>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
        Login
      </Typography>
      <StyledForm onSubmit={handleSubmit(onSubmitLogin)}>
        <StyledInput>
          <Person className="icon" color="action" fontSize="small" />
          <input
            type="text"
            className="input"
            placeholder="Username"
            {...registerForm('username')}
          />
        </StyledInput>
        <StyledInput>
          <VpnKey className="icon" color="action" fontSize="small" />
          <input
            type="password"
            className="input"
            placeholder="Password"
            {...registerForm('password')}
          />
        </StyledInput>

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

  if (location.state?.from === 'register') {
    content = (
      <StyledDiv>
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
          Login
        </Typography>
        <Alert severity="success" variant="filled">
          Register success, login now!
        </Alert>
        <StyledForm onSubmit={handleSubmit(onSubmitLogin)}>
          <StyledInput>
            <Person className="icon" color="action" fontSize="small" />
            <input
              type="text"
              className="input"
              placeholder="Username"
              {...registerForm('username')}
            />
          </StyledInput>

          <StyledInput>
            <VpnKey className="icon" color="action" fontSize="small" />
            <input
              type="password"
              className="input"
              placeholder="Password"
              {...registerForm('password')}
            />
          </StyledInput>

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
  }

  if (status === EActionStatus.PENDING) {
    content = (
      <StyledDiv>
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
          Login
        </Typography>
        <StyledForm onSubmit={handleSubmit(onSubmitLogin)}>
          <StyledInput>
            <Person className="icon" color="action" fontSize="small" />
            <input
              type="text"
              className="input"
              placeholder="Username"
              {...registerForm('username')}
            />
          </StyledInput>

          <StyledInput>
            <VpnKey className="icon" color="action" fontSize="small" />
            <input
              type="password"
              className="input"
              placeholder="Password"
              {...registerForm('password')}
            />
          </StyledInput>

          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<Save />}
            variant="outlined"
            style={{ width: '100%' }}
          >
            Login in...
          </LoadingButton>
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
  } else if (status === EActionStatus.FAILED) {
    content = (
      <StyledDiv>
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
          Login
        </Typography>
        <Alert severity="error">{error}</Alert>
        <StyledForm onSubmit={handleSubmit(onSubmitLogin)}>
          <StyledInput>
            <Person className="icon" color="action" fontSize="small" />
            <input
              type="text"
              className="input"
              placeholder="Username"
              {...registerForm('username', {
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

          <StyledInput>
            <VpnKey className="icon" color="action" fontSize="small" />
            <input
              type="password"
              className="input"
              placeholder="Password"
              {...registerForm('password', {
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
  }

  return content;
};

export default LoginPage;
