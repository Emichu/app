import React from 'react';
import { useParams } from 'react-router';


interface ViewParams {
  id: string;
}

function ViewPage() {
  const params = useParams<ViewParams>();

  return (
    <p>ViewPage {params.id} </p>

  )
};

export default ViewPage;