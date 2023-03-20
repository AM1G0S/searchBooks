import Typography from '@mui/material/Typography';
import { ErrorObject } from '../../constants/interfaces';
import './ErrorPage.scss';

export const ErrorPage = (props: ErrorObject) => {
  return (
    <div className="error-page-wrapper" data-testid="error-page-wrapper">
      <Typography variant="h4" color="error">
        {props.title}
      </Typography>
      <h4>{props.description}</h4>
    </div>
  );
};
