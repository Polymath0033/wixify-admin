import classes from "./Profile.module.css";
import { useLoaderData, useMatches, json } from "react-router-dom";
let params;
const Profile = () => {
  const path = useMatches();
  const data = useLoaderData();
  console.log(data);

  path.map(({ params }) => console.log(params.driver));
  const fl = path.filter((f) => f.params);
  let driver = fl[0].params.driver;
  console.log(fl[0].params.driver);
  params = driver;
  return (
    <section className={classes.profile}>
      <div className={classes.div}>
        <h1>Driver's Profile</h1>
        <p>Account information</p>
      </div>
      <div className={classes.img}>
        <img src={data.profilePicture} alt="profile_img" />
      </div>
      <article className={classes.article}>
        <div>
          <h5 className={classes.label}>First Name</h5>
          <p className={classes.value}>{data.firstName}</p>
        </div>
        <div>
          <h5 className={classes.label}>Last Name</h5>
          <p className={classes.value}>{data.lastName}</p>
        </div>
        <div>
          <h5 className={classes.label}>Phone Number</h5>
          <p className={classes.value}>+234 8142 06715</p>
        </div>
        <div>
          <h5 className={classes.label}>E-mail Addres</h5>
          <p className={classes.value}>{data.email}</p>
        </div>
        <div>
          <h5 className={classes.label}>State of Ilorin </h5>
          <p className={classes.value}>{data.stateOfOrigin}</p>
        </div>
        <div>
          <h5 className={classes.label}>Local goverment</h5>
          <p className={classes.value}>{data.lga}</p>
        </div>
        <div>
          <h5 className={classes.label}>Car Manufacture</h5>
          <p className={classes.value}>Toyota motto</p>
        </div>
        <div>
          <h5 className={classes.label}>Car Model</h5>
          <p className={classes.value}>Lexus R</p>
        </div>
        <div>
          <h5 className={classes.label}>Car Year</h5>
          <p className={classes.value}>2018</p>
        </div>
        <div>
          <h5 className={classes.label}>Car color</h5>
          <p className={classes.value}>Grey</p>
        </div>
        <div>
          <h5 className={classes.label}>License plate number</h5>
          <p className={classes.value}>{data.licenseNumber}</p>
        </div>
        <div>
          <h5 className={classes.label}>Driver's license number</h5>
          <p className={classes.value}>AD1246759756</p>
        </div>
      </article>
    </section>
  );
};
export default Profile;
export const loader = async () => {
  const token = localStorage.getItem("token");
  const param = await params;
  console.log(param);
  const response = await fetch(
    "https://wixify.uc.r.appspot.com/admin/drivers",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  // const data = await response.json();
  if (!response.ok) {
    return json({
      message: "Couldn't fetch driver's data",
      status: 500,
    });
  } else {
    return response;
  }
};
