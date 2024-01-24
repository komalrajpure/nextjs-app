import Link from "next/link";
const login = () => {
  return (
    <div>
      <h1 className="heading"> Login Page</h1>
      <Link href="/"> Go To Home</Link>
      <br/>
      <Link href="/login/Studentlogin"> Go To Studentlogin</Link>
    </div>
  );
};

export default login;
