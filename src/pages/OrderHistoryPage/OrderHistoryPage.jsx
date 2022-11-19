import { checkToken } from "../../utilities/services/users";

export default function OrderHistoryPage(props) {
  async function handleCheckToken(){
    const expDate = await checkToken()
    console.log(expDate)
  }

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );}
