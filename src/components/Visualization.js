import React from 'react';
import AuthorVisualizationBlock from './AuthorVisualizationBlock'
import VisualizationBlock from './VisualizationBlock';
import Body from './BodyForm';

export default function Visualization() {
  return (
    <div>
      <Body />
      
      <AuthorVisualizationBlock query="GlueGen" />

      <VisualizationBlock information={2} />
      <VisualizationBlock information={3} />
      <VisualizationBlock information={4} />
    </div>
  );
}
