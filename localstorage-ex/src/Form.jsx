export default function Form(props) {
  const { handleEnter, handleChange, currentData } = props;

  let elementz = currentData.map((f) => {
    return (
      <>
        <div key={f.id}>
          ID: {f.id}- Username: {f.userName}, Password: {f.passWord}
        </div>
      </>
    );
  });

  return (
    <div className="container">
      <form onSubmit={handleEnter}>
        <p>Welcome</p>
        <input
          type="text"
          placeholder="Username"
          name="userName"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="passWord"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Register" />
      </form>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
      <div></div>
      {currentData.length > 0 && (
        <>
          {elementz}
          <input
            type="submit"
            value="Clear"
            onClick={() => localStorage.clear()}
          />
        </>
      )}
    </div>
  );
}
