import React from 'react';
import VisualizationBlock from './VisualizationBlock';
import Body from './BodyForm';

export default function Visualization() {
  return (
    <div>
      <Body />
      <VisualizationBlock information={1} />
      <VisualizationBlock information={2} />
      <VisualizationBlock information={3} />
      <VisualizationBlock information={4} />
    </div>
  );
}
