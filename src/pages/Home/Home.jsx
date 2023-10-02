import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Home = () => {
  const { name } = useContext(AuthContext);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Home;
