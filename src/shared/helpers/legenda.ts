import alive from '@images/alive.png';
import dead from '@images/dead.png';
import unknown from '@images/unknown.png';

export const statusPersonagem = (status: string): string => {

  if (status === 'Alive') {
    return alive;
  } else if (status === 'Dead') {
    return dead;
  } else {
    return unknown;
  }
};
