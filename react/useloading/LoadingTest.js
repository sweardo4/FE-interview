import useLoading from './useLoading';
import React, {useEffect, useState, useRef} from 'react';

const LoadingTest = ({ text }) => {
  const ref = React.useRef(null);
  const loading = useLoading(ref);
  return (
       <div className="scrollitem" style={{padding: 50, margin: 10, backgroundColor: 'red'}} ref={ref}>{loading ? 'loading' : text}</div>
  )
}

export default LoadingTest;
