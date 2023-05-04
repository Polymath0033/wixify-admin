import Button from "./Button";
import Cancel from "./Cancel";
//import classes_ from "../../pages/Revenue.module.css";
import classes from "./Withdraw.module.css";
import { useEffect, useState, useCallback } from "react";

// const initialState={
//   value:'',
//   account:'',
//   data:'',
//   shouldFetch:null,
//   error:null
// }
// const reducer=(state,action)=>{
// if(action.type==='error'){
//   return{}
// }
// }
const Withdraw = ({ toggleModal, toggleAlert, banks }) => {
  const [value, setValue] = useState("");
  const [account, setAccount] = useState("");
  const [data, setData] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(null);
  const [error, setError] = useState(null);
  const numberHandler = (e) => {
    setAccount(e.target.value);
  };
  const selectHandler = (e) => {
    setValue(e.target.value);
    if (value === "" || account === "") {
      return;
    } else {
      setShouldFetch(true);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const fetchBanks = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.paystack.co/bank/resolve?account_number=${account}&bank_code=${value}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer sk_test_41dafef4fefb54d6f6a57b544377765fc202f1ad",
          },
        }
      );
      const data_r = await response.json();
      if (!response.ok) {
        throw new Error("failed  to load");
      }
      console.log(data_r.data);
      setData([data_r.data]);
    } catch (e) {
      setError(null);
      console.log(e);
    }
  }, [account, value]);
  useEffect(() => {
    if (shouldFetch) {
      fetchBanks();
    }
  }, [shouldFetch, fetchBanks]);

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => {
          toggleModal();
        }}
      ></div>
      <dialog open className={classes.dialog}>
        <form className={classes.form} onSubmit={submitHandler}>
          <p className={classes["modal-header"]}>Enter your details</p>
          <input
            type="number"
            name="account_name"
            id="account_name"
            placeholder="Bank account Number"
            value={account}
            onChange={numberHandler}
            required
          />
          <select
            name="bank_name"
            id="bank_name"
            onChange={selectHandler}
            placeholder="Bank Name"
            value={value}
            required
          >
            <option value="">--please select your bank here--</option>
            {banks.map((bank) => (
              <option key={bank.code} value={bank.code}>
                {bank.name}
              </option>
            ))}
          </select>
          {shouldFetch && (
            <div>
              {data?.map((acct) => (
                <p key={acct.number} className={classes.account}>
                  {acct.account_name}
                </p>
              ))}
            </div>
          )}
          {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
          <Button
            value={"Proceed"}
            onClick={() => {
              toggleAlert();
            }}
          />
          <Cancel
            value={"cancel"}
            onClick={() => {
              toggleModal();
            }}
          />
        </form>
      </dialog>
    </>
  );
};
export default Withdraw;
