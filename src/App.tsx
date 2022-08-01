import React, { useEffect } from "react";
import { FirstLayout } from "./Layouts";
import { Login, Profile } from "./Components";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./Store";
import { setLastUserData } from "./Store/userStore/action";
import { LocalStorageService } from "./Services";
function App() {
  const { token } = useSelector((state: State) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const userDataRaw = LocalStorageService.getKey("user");
    if (!userDataRaw) return;
    const parsedUserData = JSON.parse(userDataRaw);
    dispatch(setLastUserData(parsedUserData));
  }, []);
  return (
    <>
      <FirstLayout>{token ? <Profile /> : <Login />}</FirstLayout>
    </>
  );
}

export default App;
