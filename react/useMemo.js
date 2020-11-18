function Hooks(props) {
    const [ count, setCount ] = useState(props.count);
    useLayoutEffect(() => {
      console.log('useLayoutEffect 后执行');
      setCount(props.count);
    }, [ props.count ]);

    const dom = useMemo(() => {
      console.log('useMemo 优先执行');
      return <h2>{count * 10}</h2>;
    }, [count]);

    return (
      <div className="">
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>点击</button>
        {dom}
      </div>
    );
  }


  /**
   * 注意：传入 useMemo 的函数会在渲染期间执行。
   * 请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffec 的适用范畴，而不是 useMemo
   */