import { Typography, Button } from '@mui/material';
import { Person, VpnKey, PersonAdd } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { StyledDiv, StyledInput, StyledForm } from './styles';

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <StyledDiv>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
        Register
      </Typography>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput>
          <Person className="icon" color="action" fontSize="small" />
          <input
            type="text"
            className="input"
            placeholder="Username"
            {...register('username')}
          />
        </StyledInput>
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
};

export default RegisterPage;
