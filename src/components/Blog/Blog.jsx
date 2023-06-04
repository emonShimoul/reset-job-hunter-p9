const Blog = () => {
  return (
    <div className="container">
      <h2 className="my-5">Blog</h2>
      <div className="mb-5">
        <h3>When should you use context API?</h3>
        <p>
          We should use <strong>Context Api</strong> to pass data from one
          component to another component easily. To avoid the prop drilling the
          Context API is also used. It is a problem to pass prop from many
          components to use in a child component. So to avoid this problem
          Context API can be used.
        </p>
      </div>
      <div className="mb-5">
        <h3>What is a custom hook?</h3>
        <p>
          A custom hook is a function by which we can create reusable function.
          Sometimes we need some function which are repeatedly used in different
          component. So by using a custom hook we can write the function in a
          single file and can use it any component where it will be needed.{" "}
          <br />
          The name custom hook is always starts with the <strong>
            use
          </strong>{" "}
          word as a prefix. By this <strong>use</strong> keyword react will
          understand that is a custom hook.
        </p>
      </div>
      <div className="mb-5">
        <h3>What is useRef?</h3>
        <p>
          A <strong>useRef</strong> is a hook that is used to persist a mutable
          value at the time of render. It will create a mutable value which will
          not cause for re-rendering a component. When we need to access a DOM
          element we can use this useRef hook. <br /> The useRef hook will
          return a object named <strong>current</strong> By using this current
          object we can set the persist value which will not change at the
          re-rendering of a component.
        </p>
      </div>
      <div className="mb-5">
        <h3>What is useMemo?</h3>
        <p>
          <strong>useMemo</strong> is a react hook which is used to cache a
          value in between of re-renders. Sometime we need some calculation in
          our code which are time consuming. For these time consuming
          calculation the re-renders are slowing down every time. By using{" "}
          <strong>useMemo</strong> we can cache the calculated result and
          returned the result in every re-render. The calculation will not
          performed at the time of re-render and will not slow down the
          application. This will increase the performance of the applicaton.
        </p>
      </div>
    </div>
  );
};

export default Blog;
