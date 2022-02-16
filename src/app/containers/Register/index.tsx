import { Typography, Button, Alert } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Person, VpnKey, PersonAdd, Save } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { StyledDiv, StyledInput, StyledForm } from './styles';
import useHooks from './hooks';
import { EActionStatus } from '../../../utils/constants';

const RegisterPage = () => {
  const { register: registerForm, handleSubmit } = useForm();
  const { handlers, selectors } = useHooks();

  const { onSubmitRegister } = handlers;
  const { status, error } = selectors;

  let content = (
    <StyledDiv>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
        Register
      </Typography>
      <StyledForm onSubmit={handleSubmit(onSubmitRegister)}>
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
          startIcon={<PersonAdd />}
          variant="contained"
          sx={{ mt: 1, width: '100%' }}
          type="submit"
        >
          Register
        </Button>
      </StyledForm>
      <Typography
        variant="caption"
        gutterBottom
        component="div"
        sx={{ margin: 'auto', textAlign: 'center', marginTop: '0.5rem' }}
      >
        Already have an account? Login <Link to="/login">now!</Link>
      </Typography>
    </StyledDiv>
  );

  if (status === EActionStatus.PENDING) {
    content = (
      <StyledDiv>
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
          Register
        </Typography>
        <StyledForm onSubmit={handleSubmit(onSubmitRegister)}>
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

          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<Save />}
            variant="outlined"
            style={{ width: '100%' }}
          >
            Registering...
          </LoadingButton>
        </StyledForm>
        <Typography
          variant="caption"
          gutterBottom
          component="div"
          sx={{ margin: 'auto', textAlign: 'center', marginTop: '0.5rem' }}
        >
          Already have an account? Login <Link to="/login">now!</Link>
        </Typography>
      </StyledDiv>
    );
  } else if (status === EActionStatus.FAILED) {
    content = (
      <StyledDiv>
        <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
          Register
        </Typography>
        <Alert severity="error">Something wrong happen!</Alert>
        <StyledForm onSubmit={handleSubmit(onSubmitRegister)}>
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
            startIcon={<PersonAdd />}
            variant="contained"
            sx={{ mt: 1, width: '100%' }}
            type="submit"
          >
            Register
          </Button>
        </StyledForm>
        <Typography
          variant="caption"
          gutterBottom
          component="div"
          sx={{ margin: 'auto', textAlign: 'center', marginTop: '0.5rem' }}
        >
          Already have an account? Login <Link to="/login">now!</Link>
        </Typography>
      </StyledDiv>
    );
  }

  return content;
};

export default RegisterPage;
