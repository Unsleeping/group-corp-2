import React from 'react';
import { useDispatch } from 'react-redux';
import './Error.scss';
import { IconButton, Box } from '@material-ui/core';
import { Replay } from '@material-ui/icons';
import { fetchProfileInfo } from '../../redux/ducks/profile';

interface Props {
  handleClick?: (dispatch: React.Dispatch<any>) => void;
  mx?: string;
}

const defaultProps: Props = {
  handleClick: (dispatch) => dispatch(fetchProfileInfo('yellso')),
  mx: 'auto',
};

export const Error: React.SFC<Props> = ({ handleClick, mx }) => {
  const dispatch = useDispatch();
  return (
    <Box mx={mx} my="auto">
      Something went wrong...
      <IconButton
        color="secondary"
        size="medium"
        onClick={() => handleClick(dispatch)}
      >
        <Replay />
      </IconButton>
    </Box>
  );
};

Error.defaultProps = defaultProps;

const comp = <Error />;
