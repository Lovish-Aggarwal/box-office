/* eslint-disable no-unused-vars */
import React from 'react';
import ShowCard from './ShowCard';
import {FlexGrid} from '../styled';
import IMAGE_NOR_FOUND from '../../images/not-found.png';

const ShowGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({show}) => (
        <ShowCard
          key={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOR_FOUND}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
