import React from 'react';
import AuthorVisualizationBlock from './AuthorVisualizationBlock'
import VisualizationBlock from './VisualizationBlock';
import Body from './BodyForm';

export default function Visualization() {
  return (
    <div>
      <Body />
      <AuthorVisualizationBlock query="Computers And Intractability A Guide To The Theory Of Np Completeness" />

      <VisualizationBlock information={2} />
      <VisualizationBlock information={3} />
      <VisualizationBlock information={4} />
    </div>
  );
}
